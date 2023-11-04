import React,{useState,useEffect} from "react";
import { useNavigate ,useLocation} from "react-router-dom";
import logo from "../Images/imagelogo.png";
import loginlogo from "../Images/loginBefor.png";
import profilelogo from "../Images/loginFin.jpg";
import * as S from "./HeaderStyle";
import { LoginModal } from "../Modal/LoginModal";
import * as P from "./ProfileWrapStyle";
import { ModalBackdrop } from "../Modal/ModalStyle";
import { Popup } from "../Modal/Popup";
import "./DropMenu.css";

const Header  = props => {
  const location = useLocation();
  const accessToken = localStorage.getItem("access_token");
  
  const navigate = useNavigate();

  const [access_Token, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState(null); 
  const [acces,SetAcces]= useState('');
  const [emailId, setemailId] = useState('');
  const [userinfo, setUserinfo] = useState([]);
  const [nickname, setNickname] = useState('');
  const [isOpen, setIsOpen] = useState(false); // 모달창때문에 있는거 삭제 노
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // 로그아웃 성공 여부 
  const [currentPath, setCurrentPath] = useState(location.pathname);// currentPath 상태 정의 및 초기화
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { onData } = props;

  
  const recoRoute =["/reco","/recoresult"];
  const testRoutes = ["/quizindex", "/quizfrist", "/quiztest", "/quizresult"];
  const isTestRoute = testRoutes.includes(location.pathname);
  const isRecoRoute =recoRoute.includes(location.pathname);

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

  useEffect(() => 
  {
    
    setCurrentPath(location.pathname);
    console.log("현재 주소 : ", currentPath);
    console.log("accessToken:",accessToken);
    
    if (accessToken)
    {
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
            setUserinfo(data);

            console.log("header 현재 접속중인 사용자 이메일:", data.email);
            console.log("header 현재 접속중인 사용자 닉네임:", data.nickname);
            setNickname(data.nickname)

            // 이메일 아이디 추출
            const emailParts = data.email.split('@');
            setemailId(emailParts[0]);
            const senddata = {
              accesstoken: accessToken ,
              emailid: emailParts[0],
            };
            console.log("senddata: ",senddata);
            onData(senddata);
            
        } else {
            // "email" 필드가 없는 경우
            console.log("header 이메일 정보가 없습니다.");
            
            localStorage.removeItem("access_token");// 만료된 토큰 처리하기 
            window.location.reload();
            //navigate(currentPath); // 다시 현재 페이지로 새로고침 
        }
        })
        .catch((error) => {
            console.error("Error fetching user email:", error);
            localStorage.removeItem("access_token");// 만료된 토큰 처리하기 
            window.location.reload();
        }
        );

        
    }
    
  }, [location.pathname,accessToken]); 


  const handleGoLandingClick = () => {
    navigate("/");
  };
  const handleGoRecoClick = () => {
    navigate("/reco");
  };
  const handleGoTestClick = () => {
    navigate("/quizindex");
  };


// 자기 프로필 가는거 처리하기 App js 참고  
const onGoProfile = () => { 
  navigate(`/profile/${emailId}`);  
};
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(false);
    
  };

  const openMenuHandler = () => {

    setIsMenuOpen(!isMenuOpen);
    setIsOpen(false);

  };
  
  const onNaverLogout = () => {
    //로그아웃 처리 코드
    localStorage.removeItem("access_token"); // 토큰 살아있음 

    setShowSuccessMessage(true); // 로그아웃 후 모달 

    // 2초 후에 성공 메시지를 숨김
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000); 
    window.location.reload();
    setIsOpen(!isOpen);
    console.log("로그아웃 되었습니다.");
  };


  return (
    <S.LogoWrap style={{flexDirection:'column'}}>
      <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>

      <S.LandingWrap  style={{display:'flex',alignItems:'center'}}>
        <S.LandingLogo src={logo} alt="" onClick={handleGoLandingClick} />

        <S.SmallMenu  onClick={openMenuHandler} 
        />
        {isMenuOpen?(
          <P.DropMenuBar  className={`element ${isMenuOpen ? 'open' : 'hidden'}`}>
            <P.CateMenu style={{marginBottom:'1vh'}}onClick={handleGoRecoClick}>#색감 매칭</P.CateMenu>
            <P.CateMenu onClick={handleGoTestClick}>#취향 테스트</P.CateMenu>
        </P.DropMenuBar>
        ):null
        }
        
        
        <S.MenuBarWrap style={{marginLeft:20}} onClick={handleGoRecoClick} > 
          <S.MenuBar style={{ color: isRecoRoute ? '#5d6bb4' : ''}}  data-tooltip-id="colormatching-tooltip" >#색감 매칭</S.MenuBar>
        </S.MenuBarWrap>

        <S.MenuBarWrap onClick={handleGoTestClick}>
          <S.MenuBar  style={{ color: isTestRoute ? '#5d6bb4' : ''}}  data-tooltip-id="testmatching-tooltip"> #취향 테스트</S.MenuBar>
        </S.MenuBarWrap>
        <S.Tool 
          id="colormatching-tooltip" 
          place="bottom" >
          우리의 색감 매칭 기능을 통해 여러분의 사진과 비슷한 색감을 가진 다른 사진을 찾아보세요. <br/>
          여러분이 원하는 카테고리 중 하나의 사진을 업로드하면, 그와 비슷한 색감을 가진 다른 사진을 찾아드립니다.

        </S.Tool> 

        <S.Tool  
          id="testmatching-tooltip" 
          place="bottom" >
          사진 취향을 발견하고 원하는 사진을 찾기 위한 흥미로운 테스트를 시작하세요.<br/>
          선택한 카테고리에 따라 원하는 스타일과 옵션을 선택하세요.<br/>
          선택지 기반으로 맞춤형 사진을 찾아 드립니다.
        </S.Tool>
      </S.LandingWrap>
      
      <S.HomeWrap>
      
      <P.ProfileWrap>
        <P.ProfileShow style={accessToken ? {}:{marginTop:0}}>
          <P.ProfileLogo src={accessToken ? profilelogo : loginlogo} onClick={openModalHandler} />
          {accessToken && <P.Profilename >{nickname}</P.Profilename>}
          
        </P.ProfileShow> 
        {isOpen && (
          <>
            {accessToken ? ( // 액세스 토큰이 있는 경우 , 만료된 토큰에 대해 처리했기 때문에 
              <P.DropMenu className={`element ${isOpen ? 'open' : 'hidden'}`}>
                <P.CateMenu style={{marginBottom:'1vh'}}onClick={onGoProfile}>마이프로필</P.CateMenu>
                <P.CateMenu onClick={onNaverLogout}>로그아웃</P.CateMenu>
              </P.DropMenu>
            ) : (
              // 액세스 토큰이 없는 경우
              <ModalBackdrop onClick={openModalHandler}>
                <LoginModal />
              </ModalBackdrop>
            )}
          </>
        )}


        {/* 성공 메시지를 보여주는 부분 */}
        {showSuccessMessage && (
          <Popup text="로그아웃 되었습니다."/>
        )}
        
      </P.ProfileWrap>
      </S.HomeWrap>
      </div>

      <hr style={{width:'100%',border:'1.5px solid',color:'black',marginTop:15}}/>
      
    </S.LogoWrap>
  );
};

export default Header;