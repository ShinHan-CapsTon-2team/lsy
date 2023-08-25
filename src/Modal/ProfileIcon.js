import { useState } from 'react';
import styled from 'styled-components';
import profilelogo from '../Images/profileimg.png'
import naverlogin from '../Images/naverlogin.png'
import { LoginModal } from './LoginModal';
const HomeWrap = styled.div`
margin-right:25px;

//position: absolute;
//right:225px;
/* tablet 규격 */
        @media screen and (max-width: 1023px){
          right:5%;
          top:5.5%;

        }
/* mobile 규격 */
        @media screen and (max-width: 540px){
            
            top:65px;
            right:5px;
            margin-left:10px;
        }
  
`;

const HomeLogo =styled.img`
width:50px;
height:50px;
/* tablet 규격 */
        @media screen and (max-width: 1024px){
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width:37px;
            height:37px;
            
        }
        /* s 데스크 */
        @media screen and (min-width: 1025px){
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            width:90px;
            height:90px;
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


export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: 'dialog',
}))`
  // Modal창 CSS를 구현합니다.
  
  border-radius: 20px;
  width: 35%;
  height: 30%;
  //height:8.5em;
  background-color: #ffffff;
    
`;


const DropMenu = styled.div` 
  position: absolute;
  background-color: white;
  //border: 1px solid #ccc;
  padding: 10px;
  border-radius: 30px;
  z-index: 9999;

  //text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  top: 100px;
  right:80px;


  /* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
          width:45vw;
          //top: -147px;
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
          width:15vw;
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
          width:20vw;
          top: 120px;
        }
`;

const CateMenu = styled.div` 
  font-size: 25px;
  margin-top:5px;

  /* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
          
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
          font-size: 30px;
        }
`;


//예시 !!!!!!! 알아보기 쉽게 
export const ProfileIcon = () => {
    const [isOpen, setIsOpen] = useState(false); // 모달창때문에 있는거 삭제 노 

    const [isLogin, setIsLogin] = useState(false); //로그인 유무 따지기 
  
    const openModalHandler = () => { // 모달창 관련임 자세히 알 필요 X 
      setIsOpen(!isOpen) 
    };

  
    return (
      <>
        <HomeWrap>
          <HomeLogo src={profilelogo} onClick={openModalHandler} />
          {isLogin ?  // 로그인 유무 여부 처리를 해야하는 거임 
          ( // 1. 로그인 하기 전 상태라면 
            isOpen ? (
              <ModalBackdrop onClick={openModalHandler}>
                <LoginModal />
              </ModalBackdrop>
            ) : null
          ) : (
            //2. 로그인한 후 상태라면 
            <DropMenu>
              <CateMenu onClick={onGoProfile}>마이프로필</CateMenu>  
              <CateMenu onClick={onNaverLogout}>로그아웃</CateMenu>          
            </DropMenu>
          )}
        </HomeWrap>
      </>
    );
  };