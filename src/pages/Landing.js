import logo from '../Images/imagelogo.png'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useState ,useEffect} from 'react';
import { LoginModal } from '../Modal/LoginModal';


function Landing(){
    const [access_Token, setAccessToken] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const accessToken = localStorage.getItem('access_token'); // 로컬 스토리지에서 액세스 토큰 가져오기

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log(code);
        
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

    return (

        <OutWrap>
            <InsideWrap>
                
                <LogoImg src={logo} alt=''/>
                
                
                <ImgWrap> {/* 말 줄이기 ... fontsize 높여야함  */}
                    <Button onClick ={handleUploadPhotoClick}>매칭을 통해 추천받기 </Button>
                    <Button onClick={handleFitPhotoClick}> 맞는 사진 추천받기</Button>
                    <Button onClick={handleGohomeClick} > 홈페이지 방문하기</Button>
                    <Button onClick={openModalHandler} >내 프로필 가기 </Button> 
                    {isOpen && (
                    <>
                        {accessToken ? ( // 액세스 토큰이 있는 경우
                            <Link to="/profile"/>
                        ) : (
                        // 액세스 토큰이 없는 경우
                        <ModalBackdrop onClick={openModalHandler}>
                            <LoginModal />
                        </ModalBackdrop>
                        )}
                    </>
                    )}
                </ImgWrap>
                
            </InsideWrap>
        </OutWrap>
    
    );
}

export default  Landing;


const FontStyle = {
  '@media screen and (max-width: 1024px)':{
  
  fontSize: 22
  },
  
  '@media screen and (max-width: 850px)':{
  fontSize: 21
  
  },
  
  /* mobile 규격 */
  '@media screen and (max-width: 540px)':{
  
  fontSize: 19
  },
  /* tablet 규격 */
  '@media screen and (min-width: 1025px)':{
  
  fontSize: 24
  },
  '@media screen and (min-width: 1700px)': {
  
  fontSize: 37
  }
  };


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

	@media screen and (max-width: 1023px){
        width: 95%;
    }
	
`;

    const InsideWrap = styled.div`
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width:80%
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

        //width:55%;
        width:51%;
        height:100%;
        @media screen and (max-width: 1024px){
            
            width: 70%;
        }
        @media screen and (max-width: 540px){
            
            width: 87%;
            
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
    cursor: pointer;
    color: white;
    font-weight: 500;

    
    width: 100%;
    height: 9.6vh;; 
    font-size: 35px;
    margin-bottom:15px;
    //height:18.5%;


    @media screen and (max-width: 1024px){
        font-size: 28px;
    }

    @media screen and (max-width: 850px){
        font-size: 27px;
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