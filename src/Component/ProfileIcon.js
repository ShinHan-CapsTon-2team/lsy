import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profilelogo from "../Images/pp.png";
import { LoginModal } from "../Modal/LoginModal";
import * as S from "./ProfileWrapStyle";
import { ModalBackdrop } from "../Modal/ModalStyle";
import { Popup } from "../Modal/Popup";
export const ProfileIcon = () => {
  
  const [userinfo, setUserinfo] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // 모달창때문에 있는거 삭제 노
  
  const accessToken = localStorage.getItem("access_token");
  const [isaccessToken, setIsAccessToken] = useState(null);
  //const [itsLogin,setItsLogin]=useState(false); // 로그인 여부 상태 
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // 로그아웃 성공 여부 
  let emailId;
  const navigate = useNavigate();

  const onGoProfile = () => {
    navigate(`/profile/${emailId}`);
    
  };
  
  
  useEffect(() => {
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
            setUserinfo(data);
            console.log("현재 접속중인 사용자 이메일:", data.email);
            console.log("현재 접속중인 사용자 닉네임:", data.nickname);
      
            // 이메일 아이디 추출
            const emailParts = data.email.split('@');
            emailId = emailParts[0];
    
            
        } else {
            // "email" 필드가 없는 경우
            console.log("이메일 정보가 없습니다.");
            
        }

        })
        .catch((error) => {
            console.error("Error fetching user email:", error);
        });
    }
}, []); // !! accessToken 값이 변경될때마다 렌더링 

  // 자기 프로필 가는거 처리하기 App js 참고  
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const onNaverLogout = () => {
    //로그아웃 처리 코드
    localStorage.removeItem("access_token"); // 토큰 살아있음 
    console.log("removeItem :",accessToken);
    accessToken = null;
    console.log("삭제 후 :",accessToken);
    setShowSuccessMessage(true); // 로그아웃 후 모달 닫음 --- 의미없음

    // 2초 후에 성공 메시지를 숨김
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000); // 2초를 기다립니다 (2000 밀리초)
    setIsOpen(!isOpen);
    console.log("로그아웃 되었습니다.");
  };
  
  return (
    <>
      <S.ProfileWrap>
        <S.ProfileLogo src={profilelogo} onClick={openModalHandler} />
        {isOpen && (
          <>
            {accessToken ? ( // 액세스 토큰이 있는 경우
              <S.DropMenu>
                <S.CateMenu onClick={onGoProfile}>마이프로필</S.CateMenu>
                <S.CateMenu onClick={onNaverLogout}>로그아웃</S.CateMenu>
              </S.DropMenu>
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
        
      </S.ProfileWrap>
    </>
  );
};
