import logo from '../Images/imagelogo.png'
import { useNavigate,useLocation } from 'react-router-dom';
import styled from "styled-components";
import { useState ,useEffect} from 'react';
import { LoginModal } from '../Modal/LoginModal';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip'
import "./Tooltipstyle.css";
import { InfoModal } from '../Modal/InfoModa';


function Landing(){
    const [access_Token, setAccessToken] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const accessToken = localStorage.getItem('access_token'); // 로컬 스토리지에서 액세스 토큰 가져오기
    const location = useLocation();
    const currentPath = location.pathname;
    const [emailId, setemailId] = useState('');
    console.log("accessToken:",accessToken);
    
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log("CODE:",code);
        
        if (code) {
            fetch('http://localhost:4001/api/example', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Received data:',data.tokenData.access_token);
    
                if (data.userInfoData && data.tokenData.access_token) {  
                        setAccessToken(data.tokenData.access_token);
    
                        const userInfoData = data.userInfoData; // 서버에서 전달받은 사용자 정보 데이터
                        setUserInfo(userInfoData.response); // 사용자 정보를 상태로 설정
                        console.log('Received user:', userInfoData);
                    
                }
                // 액세스 토큰을 로컬 스토리지에 저장합니다.
                localStorage.setItem('access_token', data.tokenData.access_token);
                // 로컬 스토리지에 액세스 토큰이 정상적으로 저장되었는지 확인하고 처리합니다.
                if (localStorage.getItem('access_token')) {
                console.log('액세스 토큰이 로컬 스토리지에 저장되었습니다.');
                } else {
                console.error('액세스 토큰 저장에 실패했습니다.');
                }
            })
            .catch(error => {
                console.error('Error fetching access token:', error);
            });
        }
        }, []);
    
    useEffect(() => {
        console.log("현재 주소 : ", currentPath);
        console.log("accessToken:",accessToken);
        
        // 서버로 액세스 토큰을 보내서 사용자 이메일 정보를 요청
        if (accessToken) {
        fetch('http://localhost:4001/api/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ accessToken }),
            })
            .then((response) => response.json())
            .then((data) => {
    
            if (data.email) {

                console.log(" 현재 접속중인 사용자 이메일:", data.email);
                console.log(" 현재 접속중인 사용자 닉네임:", data.nickname);
    
                // 이메일 아이디 추출
                const emailParts = data.email.split('@');
                setemailId(emailParts[0]);
                
            } else {
                // "email" 필드가 없는 경우
                console.log("header 이메일 정보가 없습니다.");
                
                localStorage.removeItem("access_token");// 만료된 토큰 처리하기 
                
                navigate(currentPath); // 다시 현재 페이지로 새로고침 
            }
            })
            .catch((error) => {
                console.error("Error fetching user email:", error);
                localStorage.removeItem("access_token");// 만료된 토큰 처리하기 
                window.location.reload();
            });
        }
    }, [access_Token]); 
        

    const navigate = useNavigate();
    
    //퀴즈 
    const handleFitPhotoClick = () => {
        navigate('/quizindex');
    };

    //홈페이지
    const handleGohomeClick = () => {
        navigate('/home');
    };
    // 사진 등록 추천
    const handleUploadPhotoClick = () => {
        navigate('/reco');
    };
    
    const [isOpen, setIsOpen] = useState(false); // 모달창때문에 있는거 삭제 노 
    
    const openModalHandler = () => { // 모달창 관련임 자세히 알 필요 X 
        setIsOpen(!isOpen) 
    };
    
    
    const onGoProfile = () => {
        navigate(`/profile/${emailId}`);  
    };
    
    const onGoPost = () => {
        navigate(`/post`);  
    };

    const [isOpenInfoReco, setIsOpenInfoReco] = useState(false); // 색감 매칭 툴팁 모달창 
    const [isOpenInfoTest, setIsOpenInfoTest] = useState(false);  // 테스트 툴팁 모달창 
    const showInfoReco = () => {
        setIsOpenInfoReco(!isOpenInfoReco) 
    };
    const showInfoTest = () => {
        setIsOpenInfoTest(!isOpenInfoTest)  
    };
    return (
        <div>
            <OutWrap>
                <InsideWrap>

                    <LogoImg src={logo} alt='' />

                    <ImgWrap> 
                        
                        <Button onClick={handleUploadPhotoClick}>🎨 색감 매칭을 통해 추천받기 
                           <InfoButton >
                            <TooImg  onClick={(e) => {
                                        e.stopPropagation(); // 이벤트 전파 중단
                                        showInfoReco();
                                    }}
                                    />
                           </InfoButton>
                            
                        </Button>

                        {isOpenInfoReco ?
                            // 액세스 토큰이 없는 경우
                            <ModalBackdrop onClick={showInfoReco}>
                                <InfoModal showInfoReco= {showInfoReco}/>
                            </ModalBackdrop>
                            : null}
                        
                        <Tooltip 
                            id="colormatching-tooltip" 
                            className="colormatching-toolstyle"
                            place="right" >
                                우리의 색감 매칭 기능을 통해 여러분의 사진과 유사한 색감을 가진 다른 사진을 찾아보세요. <br/>
                                다섯 가지 다양한 카테고리 중 하나의 사진을 올리면, 그와 맞는 카테고리의 사진에서 색감 기반으로 유사한 이미지를 찾아 드립니다.
                                
                        </Tooltip> 
                        

                        <Button onClick={handleFitPhotoClick}> 🔍테스트를 통해 추천받기
                           <InfoButton>
                                <TooImg
                            onClick={showInfoTest}
                                />   
                            </InfoButton>    
                        </Button>


                        {isOpenInfoTest ?
                            
                            <ModalBackdrop onClick={showInfoTest}>
                                <InfoModal showInfoReco= {showInfoTest}/>
                            </ModalBackdrop>
                            : null}
                        
                        <Tooltip 
                                id="testmatching-tooltip" 
                                className="testmatching-toolstyle"
                                place="right" >
                                    사진 취향을 발견하고 원하는 사진을 찾기 위한 흥미로운 테스트를 시작하세요. <br/>
                                    선택한 카테고리에 따라 원하는 스타일과 옵션을 선택하세요.<br/>
                                    선택지 기반으로 맞춤형 사진을 찾아 드립니다.
                                    
                        </Tooltip>
                        
                        <Button onClick={handleGohomeClick}>🖼️ 모든 게시글 보러가기 </Button>

                        {emailId ?
                            <Button onClick={() => { onGoProfile(); openModalHandler(); }}>📁 내 프로필 가기 </Button>

                            :null    
                        }
                        {emailId ?
                                <Button onClick={() => {onGoPost(); openModalHandler();}}>📸 포스트 작성하기 </Button>
                                :null    
                        }
                        
                        {isOpen ?
                            // 액세스 토큰이 없는 경우
                            <ModalBackdrop onClick={openModalHandler}>
                                <LoginModal />
                            </ModalBackdrop>
                            : null}

                    </ImgWrap>
                </InsideWrap>

            </OutWrap>
            <FixedSpan>📢 저작권 문제 인지하고 있으며
            끝나고 바로 삭제하겠습니다.
            </FixedSpan>

        </div>
        
    
    );
}

export default Landing;


const FixedSpan = styled.div`
    position: fixed;
    left: 20px;
    bottom: 17px;
    font-size: 15px;
    color: gray;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* 수평 정렬을 오른쪽으로 변경 */
    justify-content: flex-end; /* 수직 정렬을 아래쪽으로 변경 */
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

export const ProfileBackdrop = styled.div`
// Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
width:100%;
height:100%;

z-index: 1; //위치지정 요소
position: fixed;
display : flex;
justify-content : center;
align-items : center;
//background-color: rgba(0,0,0,0.4);
top : 0;
left : 0;
right : 0;
bottom : 0;

`;


    const OutWrap = styled.div`

    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    
    width: 100%;
    height:100%;
`;

    const InsideWrap = styled.div`
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width:80%;

        @media screen and (max-width: 1025px){
            width:90%;
        }
    
        @media screen and (max-width: 850px){
            width:95%;
        }
        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width:100%;
        }
    
        /* s 데스크 */
        @media screen and (min-width: 1025px){ 

            width:85%;
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
    
        
            
        }
 
    `;

    const LogoImg = styled.img`
        margin-top: 50px; 
        margin-bottom: 20px; 

        width: 48%;

        @media screen and (max-width: 1024px){
            width: 63%;
        }
        @media screen and (max-width: 540px){
            width: 80%;
        }
        
    `;

    const ImgWrap = styled.div`
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        width:51%;
        height:100%;
        @media screen and (max-width: 1300px){
            
            width: 70%;
        }
        @media screen and (max-width: 540px){
            
            width: 100%;   
        }
    `;


    const Radius = styled.button`
    padding: 20px;
    word-wrap: break-word;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border:none;
    `;

    const Button = styled(Radius)`
    background: #798BE6;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    
    color: white;
    width: 85%;
    height: 15%;
    font-size: 35px;
    margin-bottom:15px;
    
    &:hover {
        background: #5d6bb4;
    }


    @media screen and (max-width: 1024px){
        font-size: 28px;
    }

    @media screen and (max-width: 850px){
        font-size: 27px;
        width: 95%;
    }
    /* mobile 규격 */
    @media screen and (max-width: 540px){
        
        font-size: 25px;
        margin-bottom:15px;
    }

    /* s 데스크 */
    @media screen and (min-width: 1025px){ 
        font-size: 30px;
        
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){

        font-size: 40px;
        
    }
`;

const InfoButton = styled.button`
position: absolute;
  right: 25px;
  background-color: transparent;
`;
const TooImg = styled(AiFillQuestionCircle)`

color:white;
  width: 35px;
  height: 35px;
  cursor:pointer;

@media screen and (max-width: 1024px){
           
}

@media screen and (max-width: 850px){
    
}
/* mobile 규격 */
@media screen and (max-width: 540px){
    width:40px;
    height: 40px;
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

