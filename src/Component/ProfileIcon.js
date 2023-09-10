import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profilelogo from "../Images/pp.png";
import { LoginModal } from "../Modal/LoginModal";
import * as S from "./ProfileWrapStyle";
import { ModalBackdrop } from "../Modal/ModalStyle";

export const ProfileIcon = () => {
  const [isOpen, setIsOpen] = useState(false); // 모달창때문에 있는거 삭제 노
  const accessToken = localStorage.getItem("access_token"); // 로컬 스토리지에서 액세스 토큰 가져오기
  const openModalHandler = () => {
    // 모달창 관련임 자세히 알 필요 X
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  // 자기 프로필 가는거 처리하기 App js 참고
  const onGoProfile = () => {
    navigate("/profile");
  };

  const onNaverLogout = () => {
    //로그아웃 처리 코드
    localStorage.removeItem("access_token");
    //setIsOpen(false); // 로그아웃 후 모달 닫음 --- 의미없음
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
      </S.ProfileWrap>
    </>
  );
};
