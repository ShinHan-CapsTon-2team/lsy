
import React,{useRef,useEffect,useState} from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import { Popup } from "../../Modal/Popup";
import * as S from "../HeaderStyle";
import * as P from "../ProfileWrapStyle";
import loginlogo from "../../Images/loginBefor.png";
import profilelogo from "../../Images/loginFin.jpg";
import { LoginModal } from "../../Modal/LoginModal";
import { ModalBackdrop } from "../../Modal/ModalStyle";
const User = ({nickname,emailId}) => {
    const accessToken = localStorage.getItem("access_token");
    const dropMenuRef = useRef(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const openModalHandler = () => {
        setIsOpen(!isOpen);
        setIsMenuOpen(false);
      };

    const onGoProfile = () => { 
    navigate(`/profile/${emailId}`);  
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


    return(
        <>
        <S.HomeWrap>
            <P.ProfileWrap>
                <P.ProfileShow style={accessToken ? {}:{marginTop:0}}>
                <   P.ProfileLogo src={accessToken ? profilelogo : loginlogo} onClick={openModalHandler} ref={dropMenuRef} />
                        {accessToken && <P.Profilename >{nickname}</P.Profilename>} 
                </P.ProfileShow> 
                {isOpen && (
                <>
                    {accessToken ? ( // 액세스 토큰이 있는 경우 , 만료된 토큰에 대해 처리했기 때문에 
                    
                    <P.DropMenu className={`element ${isOpen ? 'open' : 'hidden'}`}  >
                        <P.CateMenu style={{marginBottom:'1vh'}} onClick={onGoProfile}>마이프로필</P.CateMenu>
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
        </>
    );
};

export default User;
