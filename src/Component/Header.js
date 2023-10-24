import React,{useState,useEffect} from "react";
import { useNavigate ,useLocation} from "react-router-dom";
import logo from "../Images/imagelogo.png";
import homelogo from "../Images/hh.png";
import loginlogo from "../Images/loginBefor.png";
import profilelogo from "../Images/loginFin.jpg";

import * as S from "./HeaderStyle";
import { LoginModal } from "../Modal/LoginModal";
import * as P from "./ProfileWrapStyle";
import { ModalBackdrop } from "../Modal/ModalStyle";
import { Popup } from "../Modal/Popup";


const Header  = props => {
  
  const location = useLocation();
  
  const isHomeRoute = location.pathname === "/home";// 현재 주소가 "/home"인 경우에만 요소를 숨깁니다.
  
  const accessToken = localStorage.getItem("access_token");

  const navigate = useNavigate();

  const [emailId, setemailId] = useState('');
  const [userinfo, setUserinfo] = useState([]);
  const [nickname, setNickname] = useState('');
  const [isOpen, setIsOpen] = useState(false); // 모달창때문에 있는거 삭제 노
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // 로그아웃 성공 여부 
  const [currentPath, setCurrentPath] = useState(location.pathname);// currentPath 상태 정의 및 초기화
 
  const { onData } = props;

useEffect(() => {
  setCurrentPath(location.pathname);
  console.log("현재 주소 : ", currentPath);
  console.log("accessToken:",accessToken);
  
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
          
          navigate(currentPath); // 다시 현재 페이지로 새로고침 
      }
      })
      .catch((error) => {
          console.error("Error fetching user email:", error);
      });
  }
}, [location.pathname]); 
  // landing page
  const handleGoLandingClick = () => {
    navigate("/");
  };

  //홈페이지
  const handleGohomeClick = () => {
    navigate("/home");
  };


// 자기 프로필 가는거 처리하기 App js 참고  
const onGoProfile = () => { 
  navigate(`/profile/${emailId}`);  
};
  const openModalHandler = () => {
    setIsOpen(!isOpen);
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
    <S.LogoWrap>
      <S.LandingWrap>
        <S.LandingLogo src={logo} alt="" onClick={handleGoLandingClick} />
      </S.LandingWrap>

      <S.HomeWrap>
      {isHomeRoute ? null :
        <div>
          <S.HomeLogo
            src= {homelogo}
            alt="homelogo"
            onClick={handleGohomeClick}
          />
        </div>
}

      <P.ProfileWrap>
      <div style={{display:'felx',marginTop:20,flexDirection:'column'}}>
        <P.ProfileLogo src={accessToken ? profilelogo : loginlogo} onClick={openModalHandler} />
        <div style={{marginTop:5}}>{accessToken && <span>{nickname}</span>}</div>
      </div> 

        {isOpen && (
          <>
            {accessToken ? ( // 액세스 토큰이 있는 경우 , 만료된 토큰에 대해 처리했기 때문에 
              <P.DropMenu>
                <P.CateMenu onClick={onGoProfile}>마이프로필</P.CateMenu>
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
          <Popup text="로그아웃 되었습니다"/>
        )}
        
      </P.ProfileWrap>
      </S.HomeWrap>
    </S.LogoWrap>
  );
};

export default Header;