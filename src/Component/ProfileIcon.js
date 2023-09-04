import { useState } from 'react';
import styled from 'styled-components';
import profilelogo from '../Images/pp.png'
import { LoginModal } from '../Modal/LoginModal';
import { ProandLogout } from '../Modal/ProandLogout';
const HomeWrap = styled.div`
margin-right:30px;

//position: absolute;
//right:225px;
/* tablet 규격 */
        @media screen and (max-width: 1023px){
          right:5%;
          top:5.5%;

        }
/* mobile 규격 */
        @media screen and (max-width: 540px){
            
            //top:55px;
            //right:5px;
            margin-left:10px;
            margin-right:10px;
        }
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
`;

const HomeLogo =styled.img`
width:57px;
height:57px; //+2
/* tablet 규격 */
@media screen and (max-width: 1024px){
    
}

/* mobile 규격 */
@media screen and (max-width: 540px){
    width:43px;
    height:43px;
    
}
/* s 데스크 */
@media screen and (min-width: 1025px){
    
}
/* l 데스크 */
@media screen and (min-width: 1700px){
    width:70px;
    height:70px;
}

`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  width:100%;
  height:100%;

  z-index: 1; //위치지정 요소
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: rgba(0,0,0,0.4);
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


export const ProfileIcon = () => {
    const [isOpen, setIsOpen] = useState(false); // 모달창때문에 있는거 삭제 노 

    const [isLogin, setIsLogin] = useState(false); //로그인 유무 따지기 
  
    const openModalHandler = () => { // 모달창 관련임 자세히 알 필요 X 
      setIsOpen(!isOpen) 
    };

    // 자기 프로필 가는거 처리하기 App js 참고  
    const onGoProfile = () => {
        
    };
    // 로그아웃 처리하기 
    const onNaverLogout = () => {
        
    };
  
    return (
      <>
        <HomeWrap>
          <HomeLogo src={profilelogo} onClick={openModalHandler} />

          {isOpen && (
            isLogin ? (
              // 1. 로그인한  상태
              <ProandLogout/>
              
            ) : (
              // 2. 로그인 안한 상태
              <ModalBackdrop onClick={openModalHandler}>
                <LoginModal />
              </ModalBackdrop>
              
              // <ProandLogout/>
              
            )
          )}
        </HomeWrap>

      </>
    );
  };