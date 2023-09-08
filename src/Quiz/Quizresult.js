import { useLocation } from 'react-router-dom';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AllDataResult from "../Datajson/AllDataResult.json"
import btn_link from '../Images/btn_link.svg'
import { Success } from '../Modal/Success';
import KakaoShareBtn from '../Component/Kakao';


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

    // 링크 
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

    //데이터 가져오기 
        //카테고리 
    const categoryData = AllDataResult.find((data) => data.categoryName === categoryName);
    

        // categoryName에 해당하는 결과 데이터 중에서 res에 해당하는 데이터 찾기
    const typeData = categoryData.results.find((data) => data.type === res);
    

    //console.log("categoryData:",categoryData);
    //console.log("typeData:",typeData);
    
        // img 파일이름 확인
    const imgPaths = typeData?.answer.map(answer => answer.img);

    console.log("imgPaths:",imgPaths)
    
        // img id 확인
    const imgIds = typeData?.answer.map(answer => answer.id);

    console.log("imgIds:",imgIds)

    const handleCopy = () => {
    setCopied(true);
    
    setTimeout(() => {
        setCopied(false);
    }, 1000); // 2초 후에 '복사되었습니다' 메시지가 사라지도록 설정

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
                        {typeData.answer && typeData.answer.slice(0, 2).map((answer, index) => (
                        <Img 
                            key={index}
                            src={`${process.env.PUBLIC_URL}/Images/questresult/${categoryName}/${answer.img}`}
                            alt={`Image ${index + 1}`}
                            onClick={() => handleImageClick(answer.id)}
                            isnotlast={index !== 1}
                        />
                        ))}
                    </Row>
                    <Row>
                        {typeData.answer && typeData.answer.slice(2, 4).map((answer, index) => (
                        <Img 
                            key={index + 2}
                            src={`${process.env.PUBLIC_URL}/Images/questresult/${categoryName}/${answer.img}`}
                            alt={`Image ${index + 3}`}
                            onClick={() => handleImageClick(answer.id)}
                            isnotlast={index !== 1}
                        />
                        ))}
                    </Row>
                </Content>
                
                </Direction>
                 
                
                    <Twrap style={{flexDirection:'column'}}>
                        
                        <Text2 style={{fontWeight:600 ,marginBottom:20,}}> 결과 공유하기</Text2>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <CopyToClipboard text={currentUrl} onCopy={handleCopy}>
                                <BtnLink src = {btn_link}></BtnLink>
                            </CopyToClipboard>
                            {copied && <Success text="링크 복사가 완료되었습니다."/>}
                            
                        
                            <KakaoShareBtn _resulttype={type}/>
                        </div>
                    </Twrap>
                


                <InsideNextWrap> 
                    <ButtonTwo onClick={handleGoHomeClick}>                         
                        
                        홈페이지 방문하기 
                    </ButtonTwo>
                    <ButtonTwo style={{marginRight:0}} onClick={handleRetestdClick}>                         
                        테스트 다시하기  
                    </ButtonTwo>

                </InsideNextWrap>
                    
            </InsideWrap>
            
            
            
            
        </OutWrap>
    );
};

export default Quizresult;


const BtnLink = styled.img`
width:60px;
height:60px;

/* tablet 규격 */
    @media screen and (max-width: 1023px){
        
    }

    /* mobile 규격 */
    @media screen and (max-width: 540px){
        width:50px;
        height:50px;
    }
    /* s 데스크 */
    @media screen and (min-width: 1024px){
        
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){
        width:70px;
        height:70px;
    }`;


const OutWrap = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center; 

    /* mobile 규격 */
        @media screen and (max-width: 840px){
            
            height: calc(var(--vh, 1vh) * 100);
            /*border: 3px solid red;*/
        }
`;

    const InsideWrap = styled.div`
        width:100%;

        text-align: center;
        display: flex;
        flex-direction: column;
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
    align-items: center;
    flex-direction: column;
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
    ${({ isnotlast }) => isnotlast && "margin-right: 20px;"}
    
    //width:350px;
    //height:470px;

    width: 24vw;
    height: 63vh;
   
    &:hover {
        border: 5px #4E62C5 solid;
    }
    /* tablet 규격 */
        @media screen and (max-width: 1024px){
            width: 33vw;
            height: 31vh;
            //width:250px;
            //height:370px;
            
            
            border: 4px #798BE6 solid;
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width: 43vw;
            height: 36vh;
            //width:160px;
            //height:280px;
            //margin-bottom:10px;
           
            border: 4px #798BE6 solid;
        }
        /* s 데스크 */
        @media screen and (min-width: 1025px){
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            width: 26vw;
            height: 65vh;
            //width:470px;
            //height:590px;
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
    padding: 20px;
    word-wrap: break-word;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    cursor:pointer;
    border:none;
    background: #798BE6;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    margin-bottom: 20px;
    border-radius: 21px;
    `;

    const TextWrap =styled.div`
    border: 4px #798BE6 solid;
    
    padding: 20px;
    word-wrap: break-word;
    border-radius: 21px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top:20px;
    margin-bottom:25px;
    /* tablet 규격 */
    @media screen and (max-width: 1024px){
        width:70vw;
        height: 9vh; 
    }

    /* mobile 규격 */
    @media screen and (max-width: 540px){
        width:80vw;
        height: 11.5vh; 
        margin-bottom:30px;
    }
    /* s 데스크 */
    @media screen and (min-width: 1025px){
        width:58vw;
        height:11vh; 
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){
        height: 13vh; 
    }

`;

    const FontStyle = {
        '@media screen and (max-width: 1024px)': {
            fontSize: 22,
        },
        
        '@media screen and (max-width: 850px)': {
            fontSize: 21,
        },
        
        /* mobile 규격 */
        '@media screen and (max-width: 540px)': {
            fontSize: 19,
        },
        /* tablet 규격 */
        '@media screen and (min-width: 1025px)': {
            fontSize: 24,
        },
        '@media screen and (min-width: 1700px)': {
            fontSize: 37,
        },
        };
        
    const Text1FontStyle = {
    '@media screen and (max-width: 1024px)': {
        fontSize: 38,
    },

    '@media screen and (max-width: 850px)': {
        fontSize: 37,
    },

    /* mobile 규격 */
    '@media screen and (max-width: 540px)': {
        fontSize: 35,
    },
    /* tablet 규격 */
    '@media screen and (min-width: 1025px)': {
        fontSize: 40,
    },
    '@media screen and (min-width: 1700px)': {
        fontSize: 53,
    },
    };
    
    const Text1 = styled.text`
    /* font-size: 40px; */
    color: #798BE6;
    font-weight: 600;
    margin-bottom: 13px;
    
    ${Text1FontStyle};
    `;
    

    const Text2= styled.text`
    ${FontStyle};
    color:  #798BE6;
    font-weight: 500;
    
    `;


    const Twrap =styled.div`
    border: 4px #798BE6 solid;
    
    padding: 20px;
    word-wrap: break-word;
    border-radius: 21px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    width:25vw;
    height: 18vh; 

    display: flex;
    align-items: center;
    justify-content: center;
    
    flex-direction: row;
    margin-top:20px;
    margin-bottom:25px;

    @media screen and (max-width: 1024px){

    }
    
    @media screen and (max-width: 850px){
        width:30vw;
        height:11vh; 
    }
    /* mobile 규격 */
    @media screen and (max-width: 540px){
        width:50vw;
        height:14vh; 
        margin-bottom:30px;
    }
    
    /* s 데스크 */
    @media screen and (min-width: 1025px){
    
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){
        height: 14vh;
    }
    
    
    `;

const ButtonTwo = styled(Radius)`
    ${FontStyle};

  /* tablet 규격 */
    @media screen and (max-width: 1024px){
        width:33vw;
        height: 7vh;
        
        margin-right:10px;
    }
    @media screen and (max-width: 850px){
    }
    /* mobile 규격 */
    @media screen and (max-width: 540px){
        
        width:45.5vw;
        height: 8vh; 
        margin-right:10px;
    }
    /* s 데스크 */
    @media screen and (min-width: 1025px){
        width:25vw;
        height: 8vh;
        margin-right:20px;
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){
        width:26vw;
        height: 7vh;
    }
 `;