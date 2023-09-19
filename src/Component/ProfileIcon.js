import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profilelogo from "../Images/pp.png";
import { LoginModal } from "../Modal/LoginModal";
import * as S from "./ProfileWrapStyle";
import { ModalBackdrop } from "../Modal/ModalStyle";
import { Popup } from "../Modal/Popup";
export const ProfileIcon = () => {
  const [userinfo, setUserinfo] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // 모달창때문에 있는거 삭제 노
  let currentEmail; //현재 접속중인지
  let isLogin // 로그인되어있는지
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // 로그아웃 성공 여부 
  const accessToken = localStorage.getItem("access_token"); // 로컬 스토리지에서 액세스 토큰 가져오기
  
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  
  const navigate = useNavigate();

  
  // 자기 프로필 가는거 처리하기 App js 참고  
  const onGoProfile = () => {
    // 서버로 액세스 토큰을 보내서 사용자 이메일 정보를 요청
    const accessToken = localStorage.getItem("access_token");
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
            currentEmail=data.email;
            // 이메일 아이디 추출
            const emailParts = data.email.split('@');
            const emailId = emailParts[0];
    
            // 이메일 아이디를 가지고 프로필 페이지로 이동
            navigate(`/profile/${emailId}`);
        } else {
            // "email" 필드가 없는 경우
            console.log("이메일 정보가 없습니다.");
            currentEmail=false;
        }

        let token =accessToken !== null;
        console.log("accessToken !== null :",token);
        
        console.log("currentEmail :",currentEmail);
        isLogin = token && currentEmail;
        
        
        if (isLogin) {
        console.log('사용자는 로그인되었습니다.');
        } else {
        console.log('사용자는 로그인되지 않았습니다.');
        }
          
        }
        )
        
        .catch((error) => {
          console.error('Error fetching user email:', error);
        });
    }
  };

  const onNaverLogout = () => {
    //로그아웃 처리 코드
    localStorage.removeItem("access_token");
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
            {isLogin ? ( // 액세스 토큰이 있는 경우
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
