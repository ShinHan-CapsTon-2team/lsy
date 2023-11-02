import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs'; //npm i @tensorflow/tfjs
import '@tensorflow/tfjs-backend-webgl'; //npm i @tensorflow/tfjs-backend-webgl
import Header from '../Component/Header';
import { useNavigate } from 'react-router-dom';
import Loading from '../Component/Loading';
import upload from '../Images/upload.png'; 
import { Popup } from "../Modal/Popup";
import { AiFillQuestionCircle } from 'react-icons/ai';
import { InfoModal } from '../Modal/InfoModa';

//모델파일 사용안함
//히스토그램 기반 메트릭스 
// 두 이미지 간의 히스토그램 오버랩을 계산하는 
import styled from "styled-components";

function Reco() { 
  const [imageFile, setImageFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null); // 미리보기 이미지 URL 상태
    const [model, setModel] = useState(null);
    const [imagePaths, setImagePaths] = useState([]); //이미지 경로 가져오기 
    const imagePathsInFolder = imagePaths; 
      // 로딩 상태를 관리하는 상태 변수
    const [isLoading, setIsLoading] = useState(false);
    const [sizeFile,setSizeFile]= useState(false); // 10MB, 정적 이미지 파일이 아닐 경우 
    const [categoryNo,setcategoryNo]= useState(false); // 해당없음 분류
    const [noImg,setnoImg]= useState(false);// 
    const classLabels = [
      'body',
      'dog',
      'family',
      'profile',
      'wedding',
      'unknown'
    ];

    const [dataFromChild, setDataFromChild] = useState({})
    const handleChildData = (data) => {
      // 자식 컴포넌트로부터 받은 데이터를 처리
      setDataFromChild(data);
    };
    const navigate = useNavigate();

    useEffect(() => {
        // 모델 로드
        const modelUrl = './model_tfjs/model.json';
        async function loadModel() {
          const model = await tf.loadLayersModel(modelUrl);
          setModel(model);
        }
        loadModel();
      }, []);

      

     // 이미지 분류 함수 (소프트맥스 함수 사용)
    const classifyImageData  = async (img, threshold) => {
      try {
          if (!model) {
              console.error('Model not loaded yet.');
              return null;
          }

          const imageData = await getImageData(img);
          const tensorImg = tf.browser.fromPixels(imageData).toFloat();
          const resizedImg = tf.image.resizeBilinear(tensorImg, [350, 250]); 
          const expandedImg = resizedImg.expandDims();
          const normalizedImg = expandedImg.div(255.0);
          const prediction = await model.predict(normalizedImg).array();

          // 소프트맥스 함수 적용하여 확률로 변환
          const softmaxPrediction = tf.softmax(tf.tensor(prediction)).arraySync()[0];

          // 예측 확률 중 가장 높은 값과 해당 클래스 인덱스 가져오기
          const maxProb = Math.max(...softmaxPrediction);
          const classIndex = softmaxPrediction.indexOf(maxProb);

          // 특정 임계값 이상인 경우 해당 클래스 레이블 반환, 그렇지 않으면 "해당없음"
          if (maxProb >= threshold) {
              // 각 클래스 레이블과 예측 확률을 함께 콘솔에 출력
                console.log('Predictions with Softmax:');
                softmaxPrediction.forEach((prob, classIndex) => {
                    console.log(`${classLabels[classIndex]}: ${prob * 100}%`);
                });
            return classIndex;
        } else {
            console.log('Predictions with Softmax:');
            softmaxPrediction.forEach((prob, idx) => {
                console.log(`${classLabels[idx]}: ${prob * 100}%`);
            });
            console.log(`Predicted as: 해당없음 (Threshold: ${threshold * 100}%)`);
            return -1; // -1을 반환하여 "해당없음" 클래스를 나타냄
        }
      } catch (error) {
          console.error('Error classifying the image:', error);
          return null;
      }
    };

    const getImageDataFromPath = async (imagePath) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous'; // 권한 설정
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, img.width, img.height);
          resolve(imageData);
        };
        img.onerror = (error) => {
          console.error('Error loading image:', error);
          reject(error);
        };
        img.src = imagePath;
      });
    };

    const handleImageFileChange = async (event) => {
      const imageFile = event.target.files[0];
      if (
        imageFile &&
        (imageFile.type === 'image/jpeg' ||
          imageFile.type === 'image/png' ||
          imageFile.type === 'image/jpg') &&
        imageFile.size <= 10 * 1024 * 1024
      ) {
        const reader = new FileReader();
        reader.onload = async (event) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = async () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            setImageFile(imageFile);
            setPreviewImage(URL.createObjectURL(imageFile));
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(imageFile);
      } else {
        setImageFile(null);
        setPreviewImage(null);

        //10MB, 정적 이미지 파일이 아닐 경우 
        setSizeFile(true);

        setTimeout(() => {
          setSizeFile(false);
          }, 2000);
        console.log("실패");
      }
    };
      
    const getImageData = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.crossOrigin = 'anonymous'; // 권한 설정
            img.onload = () => {
              const canvas = document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = img.height;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0);
              const imageData = ctx.getImageData(0, 0, img.width, img.height);
              resolve(imageData);
            };
            img.src = event.target.result;
          };
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
    };


    //업로드 버튼 
    const handleCosineCalculation = async () => {
      if(previewImage)
      {
        try {
          if (!model || !imageFile) {
            console.error('모델 또는 이미지를 사용할 수 없습니다.');
            setIsLoading(false);
            return;
          }
      
          const classIndex = await classifyImageData(imageFile, 0.1);
      
          if (classIndex !== -1) {
            const categoryName = classLabels[classIndex];
      
            const imagePathsResponse = await fetch(`http://localhost:4004/api/${categoryName}`);
            if (imagePathsResponse.ok) {
              const data = await imagePathsResponse.json();
              const updatedImagePaths = data.map((imagePath) => `http://localhost:4004${imagePath}`);
              
              // calculateEuclideanSimilarity 함수 내부에서 바로 사용할 수 있도록 전달
              const topSimilarImages=await calculateImageSimilarityMatrix (updatedImagePaths);
      
              setIsLoading(false); // 로딩 상태를 해제
      
              navigate('/recoresult', { state: { topSimilarImages } });
            } else {
              console.error('Failed to fetch image paths:', imagePathsResponse.status);
            }
          } else {
            console.log('이미지가 분류되지 않았습니다.');
      
            setcategoryNo(true);
            
            setTimeout(() => 
            {
              setcategoryNo(false);
              navigate('/reco');
              }, 2000);
            
            
          
          }
        } catch (error) {
          console.error('Error calculating cosine similarity:', error);
        }
      }else{

        setnoImg(true);
            
            setTimeout(() => 
            {
              setnoImg(false);
            }, 2000);
      }
      
    };


    // 히스토그램 계산 함수
    const calculateHistogram = (imageData) => {
            const histogram = Array(256).fill(0); // 히스토그램 배열 초기화
          
            for (let i = 0; i < imageData.data.length; i += 4) {
              const pixelValue = Math.floor(imageData.data[i] * 0.299 + imageData.data[i + 1] * 0.587 + imageData.data[i + 2] * 0.114);
              histogram[pixelValue] += 1; // 픽셀 값의 빈도수 증가
            }
          
            return histogram;
    };
      
    // 히스토그램 기반 메트릭스 계산 함수
    const calculateHistogramBasedSimilarity = (histogramA, histogramB) => {
    let sum = 0;

    for (let i = 0; i < histogramA.length; i++) {
            sum += Math.min(histogramA[i], histogramB[i]);
    }

    // 히스토그램 유사성 계산
    const similarity = sum / Math.max(histogramA.reduce((a, b) => a + b, 0), histogramB.reduce((a, b) => a + b, 0));

    return similarity;
    };
          
    // 이미지 간의 유사성 메트릭스 계산 함수 (히스토그램 기반)
    const calculateImageSimilarityMatrix = async (imagePaths) => {
    try {
            if (!model || !imageFile || imagePaths.length === 0) {
            console.error('모델 또는 이미지를 사용할 수 없습니다.');
            return;
            }

            // 로딩 상태를 true로 설정하여 로딩 표시를 활성화
            setIsLoading(true);

            // 입력 이미지의 특성 추출
            const inputImageData = await getImageData(imageFile);
            const inputHistogram = calculateHistogram(inputImageData);

            console.log('Input Image Histogram:', inputHistogram); // 입력 이미지 히스토그램 출력

            // 각 이미지의 유사성 메트릭스 계산
            const similarityMatrix = [];
            for (const imagePath of imagePaths) {
            try {
            const folderImageData = await getImageDataFromPath(imagePath);
            const folderHistogram = calculateHistogram(folderImageData);

            console.log('Folder Image Histogram for', imagePath, ':', folderHistogram); // 폴더 이미지 히스토그램 출력

            // 이미지 간의 유사성 메트릭스 계산 (히스토그램 기반)
            const similarity = calculateHistogramBasedSimilarity(inputHistogram, folderHistogram);

            console.log('Histogram-Based Similarity for', imagePath, ':', similarity); // 유사성 메트릭스 출력

            similarityMatrix.push({ imagePath, similarity });
            } catch (imageError) {
            console.error('이미지 처리 중 오류:', imageError);
            }
            }

            // 유사성 메트릭스를 기준으로 이미지 정렬
            similarityMatrix.sort((a, b) => b.similarity - a.similarity);

            // 상위 3개 유사한 이미지 선택
            const topSimilarImages = similarityMatrix.slice(0, 3);

            console.log("상위 유사한 이미지:", topSimilarImages);
            setIsLoading(false);

            return topSimilarImages; // 상위 유사한 이미지를 반환

    } catch (error) {
            console.error('이미지 유사성 메트릭스 계산 중 오류:', error);
    }
    };

    const [isOpenInfoReco, setIsOpenInfoReco] = useState(false); // 색감 매칭 툴팁 모달창 
    const [isOpenInfoTest, setIsOpenInfoTest] = useState(false);  // 테스트 툴팁 모달창 
    const showInfoReco = () => {
        setIsOpenInfoReco(!isOpenInfoReco) 
    };

    return (
      <>
        {isLoading ?(
          <Loading what="유사한 이미지를 찾고 있습니다" />
        ):(
        <OutWrap>
          
          <InOutWrap>
            {/* 로고 */}        
            <Header onData={handleChildData}/>
            {/* 컨텐츠 */}
            <Center>
    
              <InLayoutOne>
                <Content>
                  <Five> 
                      {previewImage && (
                          <SelectImg src={previewImage} alt="upload" />
                          )}{/* 업르드시 보이는 사진 */}
                  
                      {!previewImage && (
                          <EmptyImg src={upload} alt="up" />        
                      )}{/* 빈 이미지 로고 그림인데 업로드 하면 없어진 */}
    
    
                      <FindImgButton onClick={() => document.getElementById('file-upload').click()}>
                        내 파일 찾기
                      </FindImgButton>
                      
    
                      <InputBox
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageFileChange}
                      />
                  </Five>  
                </Content>
              </InLayoutOne>
    
              <InLayoutTwo> 
                  <ResultGoButton style={{ backgroundColor: (!previewImage) &&'#5d6bb4'}}onClick={handleCosineCalculation}>
                    결과보기 
                    <InfoButton >
                      <TooImg  onClick={(e) => {
                        e.stopPropagation(); // 이벤트 전파 중단
                        showInfoReco();}}/>
                    </InfoButton>
                  </ResultGoButton>  
              </InLayoutTwo>
              {isOpenInfoReco ?
                <ModalBackdrop onClick={showInfoReco}>
                    <InfoModal 
                    text="reco"
                    showInfo= {showInfoReco}/>
                </ModalBackdrop>
                : null}

              {/* 사진없이 결과 보기를 누를 경우  */}
              {noImg && (
                <Popup text="이미지 파일을 올려주세요." />
              )}
              {/* 파일 사이즈 클 경우 나오는  메시지를 보여주는 부분 */}
              {sizeFile && (
                <Popup text="최대 10MB 정적인 이미지 파일을 올려주세요." />
              )}

              {categoryNo && (
                <Popup text="해당 사진이 카테고리 분류를 실패했습니다." />
              )}
            </Center>
          </InOutWrap>



      </OutWrap>)}
        
      </>
    );
  }
     
export default Reco;

const PostWrap = styled.div`
  text-align: center;
  display: flex;
  align-items: flex-end; /* 수평 정렬을 오른쪽으로 변경 */
  justify-content: flex-end; /* 수직 정렬을 아래쪽으로 변경 */
  position: fixed; /* 위치를 고정 */
  top: 161px; /* 아래쪽 여백을 20px로 설정 */
  left: 201px; /* 오른쪽 여백을 20px로 설정 */

  /* tablet 규격 */
  @media screen and (max-width: 1023px) {
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    bottom: 120px; /* 아래쪽 여백을 20px로 설정 */
    right: 25px; /* 오른쪽 여백을 20px로 설정 */
  }
  /* s 데스크 */
  @media screen and (min-width: 1024px) {
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    bottom: 130px; /* 아래쪽 여백을 20px로 설정 */
    right: 80px;
  }
`;

const InfoButton = styled.div`
display: flex;
    align-items: center;
position: absolute;
  right: 15px;
  background-color: transparent;

  @media screen and (max-width: 840px){
    right: 10px;
    
    }
`;
const TooImg = styled(AiFillQuestionCircle)`

  width: 50px;
  height: 50px;
  cursor:pointer;
  opacity:1;
  
@media screen and (max-width: 1024px){
           
}

@media screen and (max-width: 850px){
  width:40px;
  height: 40px;
}
/* mobile 규격 */
@media screen and (max-width: 600px){
    width:35px;
    height: 35px;
}

/* s 데스크 */
@media screen and (min-width: 1025px){ 

  
}
/* l 데스크 */
@media screen and (min-width: 1700px){
    width: 45px;
    height: 45px;  
}
  `;
  
const FontStyle = {
  "@media screen and (max-width: 1024px)": {
    fontSize: 22,
  },

  "@media screen and (max-width: 850px)": {
    fontSize: 21,
  },

  /* mobile 규격 */
  "@media screen and (max-width: 540px)": {
    fontSize: 19,
  },
  /* tablet 규격 */
  "@media screen and (min-width: 1025px)": {
    fontSize: 24,
  },
  "@media screen and (min-width: 1700px)": {
    fontSize: 37,
  },
};

const OutWrap = styled.div`
      width: 100%;
      height: 100%;
      background: white;
      align-items: center;
      display: flex;
      flex-direction: column;
    position: absolute;
    `;
    const InOutWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 65%;
    height:100%;
    
    /* tablet 규격 */
      @media screen and (max-width: 1023px){
        width: 75%;
      }
    /* mobile 규격 */
      @media screen and (max-width: 540px){
        width: 90%;
      }
      /* s 데스크 */
      @media screen and (min-width: 1024px){
          
      }
      /* l 데스크 */
      @media screen and (min-width: 1700px){
          
      }
    `;
    
    
    const Center = styled.div`
    width: 100%;
    height:80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
    const InLayoutOne = styled.div`
    width:100%;
    height:85%
    `;
    const Content = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    `;
    
      const SelectImg = styled.img`
      width: 100%;
      height: 100%;
      object-fit: contain;
      `;
    
      const EmptyImg = styled.img`
      width: 150px;
      height: 150px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      /* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }
    
        /* mobile 규격 */
        @media screen and (max-width: 540px){
            
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
          width: 200px;
          height: 200px;
        }
      `;
    
    const InLayoutTwo = styled(InLayoutOne)`
    display: flex;
    width:100%;
    height:15%;
    justify-content: flex-end;
    align-items: center;
    
    `;
    
    const InputBox = styled.input`
    display: none;
    `;
    
    
    const ContentRadius = styled.div`
    border: 3px #3A76EF solid;
    padding: 20px;
    word-wrap: break-word;
    border-radius: 31px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing:border-box;
    
    @media screen and (max-width: 1600px) {
      border: 3px #3A76EF solid;
      };
      
      @media screen and (max-width: 540px) {
      margin-top: 15px;
      border: 2px #3A76EF solid;
      };
      
      @media screen and (min-width: 1601px) {
      margin-top: 30px;
      border: 4px #3A76EF solid;
    `;
    
    
    
    const Five = styled(ContentRadius)`
    position: relative;
    width:100%;
    height:100%;
    overflow:hidden;
    `;
      
    const Radius = styled.button`
    padding: 20px;
    word-wrap: break-word;
    border-radius: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border:none;
    background: #798BE6;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    //cursor: pointer;
    color: white;
    `;
    
    // 버튼투
    const ButtonTwo = styled(Radius)`
      width:30%;
      height: 70%; 
      ${FontStyle};
      /* tablet 규격 */
      @media screen and (max-width: 1023px){
        width:40%;
        
      }
      /* mobile 규격 */
      @media screen and (max-width: 560px){
        width:55%;
      }
    
      /* s 데스크 */
      @media screen and (min-width: 1024px){
          
      }
      @media screen and (min-width: 1700px) {
      
      };
    `;
    const FindImgButton = styled(ButtonTwo)` 
      position: absolute;
      bottom: 30px;
      left: 10px;
    
      width:30%;
      height:12.5%;
    

      /* tablet 규격 */
      @media screen and (max-width: 1023px){
        width:40%;
        
      }
      /* mobile 규격 */
      @media screen and (max-width: 560px){
        width:55%;
        height: 13%; 
        bottom: 20px;
    
      }
    
      /* s 데스크 */
      @media screen and (min-width: 1024px){
          
      }
      @media screen and (min-width: 1700px) {
        
      };
    
    `;
    const ResultGoButton = styled(ButtonTwo)` 
      margin-right:10px;
   
    `;
    
export const ModalBackdrop = styled.div`
// Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
width:100vw;
height:100%;

z-index: 1; //위치지정 요소
position: fixed;
display : flex;
justify-content : center;
align-items : center;
background-color: rgba(0,0,0,0.1);
top : 0;
left : 0;
right : 0;
bottom : 0;

`;