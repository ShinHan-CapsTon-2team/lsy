import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs"; //npm i @tensorflow/tfjs
import "@tensorflow/tfjs-backend-webgl"; //npm i @tensorflow/tfjs-backend-webgl
import { useNavigate } from "react-router-dom";
import upload from "../Images/upload.png";
import Header from "../Component/Header";
import * as S from "./PostStyle";

import { Popup } from "../Modal/Popup";
const SERVER_URL = "http://localhost:4000/api/post";

function Post() {

  const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [profile, setProfile] = useState(''); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null); // 미리보기 이미지 URL 상태
    const [prediction, setPrediction] = useState(null);
    const [selectedClass, setSelectedClass] = useState(0); // 선택한 클래스의 인덱스
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // 업로드 성공
    const [showErrorMessage, setShowErrorMessage] = useState(false); // 업로드 실패


    const [sizeFile,setSizeFile]= useState(false); // 10MB, 정적 이미지 파일이 아닐 경우 

    const [showMessage, setShowMessage] = useState(false); // 카테고리 분류 중 
    const classLabels = [
      '바디프로필',
      '반려동물',
      '가족사진',
      '증명사진',
      '웨딩사진',
      '해당없음'
    ];

    const categoryLabels  = {
        '바디프로필': 'body',
        '반려동물': 'dog',
        '가족사진': 'family',
        '증명사진': 'profile',
        '웨딩사진': 'wedding',
        '해당없음': 'none',
    };


    const navigate = useNavigate();
  
    //홈페이지
    const handleGohomeClick = () => {
        navigate('/home');
    };
    
    useEffect(() => {
        // 모델 로드
        const modelUrl = './model_tfjs/model.json';
        async function loadModel() {
          const model = await tf.loadLayersModel(modelUrl);
          setModel(model);
        }
        loadModel();
      }, []);
    
      const [model, setModel] = useState(null);
    
    
         // 이미지 분류 함수 (소프트맥스 함수 사용)
      const classifyImage  = async (img, threshold) => {
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

      // 이미지 파일을 ImageData로 변환
      //TensorFlow.js 모델에 이미지를 입력으로 제공하기 위해서 이미지 파일을 ImageData로 변환하여 모델에 전달
      //TensorFlow.js 모델은 숫자 행렬 형태인 ImageData를 입력으로 받아들이기 때문임 
      const getImageData = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            const img = new Image();
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
      // 사용자가 한글 카테고리를 선택할 때 호출되는 함수
      const handleCategorySelect = (selectedCategory) => {
        setCategory(selectedCategory);
      };

      // 서버로 전송할 때 한글 카테고리를 영어로 변환하는 함수
      const getEnglishCategory = (koreanCategory) => {
        return categoryLabels[koreanCategory];
      };
        /*파일업로드*/
      const handleImageFileChange = async (event) => {
        const imageFile = event.target.files[0];
        if 
        (
          imageFile &&
          (imageFile.type === 'image/jpeg' ||
            imageFile.type === 'image/png' ||
            imageFile.type === 'image/jpg') && imageFile.size <= 10* 1024 * 1024 //30 메가바이트를 바이트로 환산
        ) 
        {
          setImageFile(imageFile);
          setPreviewImage(URL.createObjectURL(imageFile));

          
          //카테고리 분류중
          console.log("예측 수행");
          setShowMessage(true);
          
          // 이미지 파일이 업로드되면 예측 수행
          const classIndex = await classifyImage(imageFile, 0.8); //0.8프로의정확도가 임계값
          
          setSelectedClass(classIndex);
          setShowMessage(false);
          //예측 결과 나옴 
          console.log("예측결과 나옴");
          
          if (classIndex === -1) {
            setPrediction(classLabels[5]);
            setCategory(classLabels[5]);
          } else {
            const predictedLabel = classLabels[classIndex];
            
            setPrediction(predictedLabel);
            setCategory(predictedLabel); // 카테고리를 예측된 클래스로 설정
          }
        } 
        else { 
          setImageFile(null);
          setPreviewImage(null);

          //10MB, 정적 이미지 파일이 아닐 경우 
          setSizeFile(true);

          setTimeout(() => 
          {
            setSizeFile(false);
            }, 2000);
          console.log("실패");
        }
      };

      const handleSubmit = () => {
          const data = {
          title,
          description,
          category:getEnglishCategory(category),
          };
          console.log("카테고리 :",data.category) 
              // 엑세스 토큰을 로컬 스토리지에서 가져오기
        const accessToken = localStorage.getItem("access_token");
      // 이미지 파일을 FormData로 감싸서 서버로 전송
          const formData = new FormData();
          formData.append('data', JSON.stringify(data));
          formData.append('image', imageFile);

      // fetch()를 이용하여 서버로 데이터를 전송
          fetch(SERVER_URL, {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: `Bearer ${accessToken}`, // 엑세스 토큰을 헤더에 추가
          },
          })
          .then((response) => response.json())
          .then((responseJson) => {
            const { message, data: responseData } = responseJson;
            console.log("서버 응답:", message);
            console.log("삽입된 게시글의 ID:", responseData.id);
    
            // 성공 메시지를 표시
            setShowSuccessMessage(true);
    
            // 2초 후에 성공 메시지를 숨기고 페이지를 이동
            setTimeout(() => {
              setShowSuccessMessage(false);
              navigate(`/lookup/${responseData.id}`);
            }, 2000); // 2초를 기다립니다 (2000 밀리초)
    
              
          })
          .catch((error) => {
              console.error('Error:', error);

              // 실패 메시지를 보여줍니다.
              setShowErrorMessage(true);

              // 2초 후에 실패 메시지를 숨깁니다.
              setTimeout(() => {
              setShowErrorMessage(false);
              }, 2000);
          });
      };

    
    const handleMenuToggle = () => { //메뉴열기/닫기
        setIsMenuOpen(!isMenuOpen);
    };

    
  const [dataFromChild, setDataFromChild] = useState(null); 

  const handleChildData = (data) => {
    // 자식 컴포넌트로부터 받은 데이터를 처리
    setDataFromChild(data);
  };


  return (
    <S.OutWrap>
      <S.InOutWrap>
        {/* 로고 */}
        <Header onData={handleChildData} />
        {/* 내용 */}

        <S.Center>
          <S.InLayoutOne>
            <S.Content>
              <S.One>
                {" "}
                {/*제목*/}
                <S.WrapAuto>
                  <S.InputBasic
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목"
                  />
                </S.WrapAuto>
              </S.One>

              <S.Two>
                {/* 설명 */}
                {/* 드래그 방지 추가하기 */}
                <S.WrapPer>
                  <S.TextareaBasic
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="설명"
                  />
                </S.WrapPer>
              </S.Two>

              <S.Three>
                {/* 이미지 */}
                {!previewImage && <S.EmptyImg src={upload} alt="upload" />}{" "}
                {/*빈 이미지로 사진 올리면 없어짐 */}
                <S.FindImg>
                  <S.Menu
                    onClick={() => document.getElementById("fileInput").click()}
                  >내 파일 찾기
                  </S.Menu>
                </S.FindImg>
                <S.FileBox
                  id="fileInput"
                  type="file"
                  accept="image/jpg, image/png ,image/jpeg"
                  onChange={handleImageFileChange}
                />
                {previewImage && (
                  <S.SelectImg src={previewImage} alt="Preview" />
                )}
              </S.Three>
            </S.Content>
          </S.InLayoutOne>

          <S.InLayoutTwo>
            <S.Buttons>
              <S.Left>
                
                <S.ButtonOne onClick={handleMenuToggle} show={showMessage}  >{/* 0916 추가 */}
                  
                  {/* 0916 추가 */}
                  {showMessage ? (
                    <S.Menu >카테고리 분류 중</S.Menu>
                  ) : (
                    <S.Menu >
                      {category ? category : "카테고리 선택"}
                    </S.Menu>
                  )}

                  <S.DropContainer>
                    {isMenuOpen && (
                      <S.DropMenu>
                        {classLabels.map((label, index) => (
                          <S.CateMenu
                            key={index}
                            onClick={() => handleCategorySelect(label)}
                          >
                            {label}
                          </S.CateMenu>
                        ))}
                      </S.DropMenu>
                    )}
                  </S.DropContainer>
                </S.ButtonOne>
              </S.Left>

              <S.Right>
                <S.ButtonTwo onClick={handleSubmit}>업로드</S.ButtonTwo>
              </S.Right>
              {/* 파일 사이즈 클 경우 나오는  메시지를 보여주는 부분 */}
              {sizeFile && (
                <Popup text="최대 10MB 정적인 이미지 파일을 올려주세요." />
              )}
              {/* 성공 메시지를 보여주는 부분 */}
              {showSuccessMessage && (
                <Popup text="게시물이 성공적으로 업로드되었습니다" />
              )}
              {/* 실패 메시지를 보여주는 부분 */}
              {showErrorMessage && (
                <Popup text="게시물 업로드를 실패했습니다" />
              )}
            </S.Buttons>
          </S.InLayoutTwo>
        </S.Center>
      </S.InOutWrap>
    </S.OutWrap>
  );
}

export default Post;

