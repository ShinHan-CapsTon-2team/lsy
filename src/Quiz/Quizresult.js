import { useLocation ,Link} from 'react-router-dom';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import bodyResult from '../Datajson/bodyresult.json'
import familyResult from '../Datajson/familyresult.json'
import petResult from '../Datajson/petresult.json'
import profileResult from '../Datajson/petresult.json'
import weddingResult from '../Datajson/weddingresult.json'


import KakaoShareBtn from '../Component/Kakao';
const getResultbody = () => {
    return bodyResult;
};

const getResultpet = () => {
    return petResult;
};

const getResultwedding = () => {
    return weddingResult;
};

const getResultfamily = () => {
    return familyResult;
};
const getResultprofile = () => {
    return profileResult;
};

const Quizresult  = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    console.log("location",location);

    //링크 복사 
    const [copied, setCopied] = useState(false);
    const currentUrl = window.location.href;
    
    

    const categoryName = params.get('name');
    const res = params.get('res');
    //확인해보기 
    console.log('categoryName :',categoryName);
    console.log('res: ',res);

    const type= '?name='+categoryName+'&res='+res;
    console.log('type:',type);
    //페이지 이동 
    const navigate = useNavigate();

        // 홈페이지 이동 수정 
    const handleGoHomeClick = () => {
        navigate('/home');
    };

        // 다시 테스트 
    const handleRetestdClick = () => {
        navigate('/quizindex');
    };
        // 이미지 클릭하면 해당 이미지의 lookup 페이지 이동 
    const handleImageClick = (id) => {
        navigate(`/lookup/${id}`);
    };

    // 데이터 가져오기
    let result = [];
    if (categoryName === 'body') {
        result = getResultbody();
    } else if (categoryName === 'pet') {
        result = getResultpet();
    }else if (categoryName === 'wedding') {
        result = getResultwedding();
    }else if (categoryName === 'family') {
        result = getResultfamily();
    }else if (categoryName === 'profile') {
        result = getResultprofile();
    }
    
    // 확인
        // type 확인
    const typeData = result.find((data) => data.type === res);
    console.log("typeData:",typeData);

    if (!typeData) {
        return <div>No data available for the selected category.</div>;
    }

        // img 파일이름 확인
    const imgPaths = typeData?.answer.map(answer => answer.img);
    console.log("imgPaths:",imgPaths)
    if (!imgPaths) {
        return <div>No data available for the selected type.</div>;
    }
        // img id 확인
    const imgIds = typeData?.answer.map(answer => answer.id);
    console.log("imgIds:",imgIds)

     // 대답 확인
    const answers = typeData?.answer;
    console.log("answers:",answers)

    
    
  
    const handleCopy = () => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // 2초 후에 '복사되었습니다' 메시지가 사라지도록 설정
  
      // 복사 후 추가적인 작업을 수행하고 싶다면 여기에 코드를 추가할 수 있습니다.
    };
    

    return (
        <OutWrap>
            <InsideWrap>
                <TextWrap>
                    <Text1> 추천 결과</Text1>
                    <Text2> 선택한 사진과 비슷한 스타일의 다른 사진을 확인하세요</Text2>
                </TextWrap>
                
                <Direction>

                
                
                <Content  >
                    <Row>
                        {answers && answers.slice(0, 2).map((answer, index) => (
                        <Img 
                            key={index}
                            src={`${process.env.PUBLIC_URL}/Images/questresult/${categoryName}/${answer.img}`}
                            alt={`Image ${index + 1}`}
                            onClick={() => handleImageClick(answer.id)}
                            isNotLast={index !== 1}
                        />
                        ))}
                    </Row>
                    <Row>
                        {answers && answers.slice(2, 4).map((answer, index) => (
                        <Img 
                            key={index + 2}
                            src={`${process.env.PUBLIC_URL}/Images/questresult/${categoryName}/${answer.img}`}
                            alt={`Image ${index + 3}`}
                            onClick={() => handleImageClick(answer.id)}
                            isNotLast={index !== 1}
                        />
                        ))}
                    </Row>
                </Content>
                
                </Direction>
                
                
                    
            </InsideWrap>

            
            <InsideNextWrap> 
                <ButtonTwo onClick={handleGoHomeClick}>                         
                    
                    홈페이지 방문하기 
                </ButtonTwo>
                <ButtonTwo onClick={handleRetestdClick}>                         
                    테스트 다시 하기  
                </ButtonTwo>

            
                <div>
                    <CopyToClipboard text={currentUrl} onCopy={handleCopy}>
                        <button>링크 복사하기</button>
                    </CopyToClipboard>
                    {copied && <p>링크가 복사되었습니다.</p>}
                </div>
                
                <KakaoShareBtn _resulttype={type}/>
            </InsideNextWrap>
        </OutWrap>
    );
};

export default Quizresult;

const OutWrap = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    

    
`;

    const InsideWrap = styled.div`

        text-align: center;
        display: flex;
        flex-direction: column;
        //margin-top: 50px;
        align-items: center;
    `;
    const Direction = styled.div`
        display: flex;
        flex-direction: row;

        /* tablet 규격 */
        @media screen and (max-width: 1023px){
            flex-direction: column;
        }

    `;
    const Content = styled.div`
    display: flex;
    justify-content: center;
    //flex-direction: column;
    align-items: center;
    flex-direction: column;

    /* s 데스크 */
        @media screen and (min-width: 1024px){
            //margin-right:20px;
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            //margin-right:40px;
        }

    `;

    const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
    const Img= styled.img`
    border: 5px #798BE6 solid;
    border-radius: 31px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center; 
    overflow:hidden;
    cursor:pointer;
    ${({ isNotLast }) => isNotLast && "margin-right: 20px;"}
    
    &:hover {
        border: 5px #4E62C5 solid;
    }
    /* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width: 45vw;
            height: 46vh;
            margin-bottom:10px;
            ${({ isNotLast }) => isNotLast && "margin-right: 10px;"}
            border: 4px #798BE6 solid;
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            width: 22vw;
            height: 63vh;
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            width: 26vw;
            height: 65vh;
            border: 8px #798BE6 solid;
            &:hover {
                border: 8px #4E62C5 solid;
              }
        }
    
    `;


    const InsideNextWrap = styled.div`
    
        display: flex;
        justify-content: center;
        margin-top: 30px;

        width:100%;
        //position: fixed;
        //margin-bottom: 40px;
        /* mobile 규격 */
        @media screen and (max-width: 540px){
            margin-top: 15px; 
        }
        
    `;

   
    
    
    
    const Radius = styled.button`
    //border: 6px #798BE6 solid;
    
    padding: 20px;
    word-wrap: break-word;
    border-radius: 21px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    cursor:pointer;
    margin-bottom: 20px;
    border:none;
    
    
    &:active {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transform: translateY(4px);
      }
    `;

    const TextWrap =styled.div`
    border: 3px #798BE6 solid;
    
    padding: 20px;
    word-wrap: break-word;
    border-radius: 21px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    width:58vw;
    height: 9vh; 

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top:20px;
    margin-bottom:25px;
    /* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width:75vw;
            height: 9vh; 
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            height: 11vh;
        }

    `;

    const Text1= styled.text`
    font-size: 40px;
    color:  #798BE6;
    font-weight: 600;
    /* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            font-size: 30px;
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            font-size: 45px;
        }
    `;

    const Text2= styled.text`
    font-size: 23px;
    color:  #798BE6;
    font-weight: 500;
    /* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            font-size: 20px;
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            font-size: 30px;
        }
    `;


    const ButtonTwo = styled(Radius)`
background: #798BE6;
display: flex;
align-items: center;
justify-content: center;

position: relative;
cursor: pointer;
  
  font-size: 33px;

color: white;
font-weight: 500;

  ;
  /* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width:42.2vw;
            height: 7vh; 
            margin-right:10px;
            font-size: 15px;
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            width:25vw;
            height: 7vh;
            margin-right:20px;
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            width:26vw;
            height: 7vh;
            font-size: 36px;
        }
 `;