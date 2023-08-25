import { useState } from 'react';
import styled from 'styled-components';
import profilelogo from '../Images/profileimg.png'
import naverlogin from '../Images/naverlogin.png'
import { LoginModal } from './LoginModal';
const HomeWrap = styled.div`
margin-right:25px;

position: absolute;
right:225px;
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

const TextWrap= styled.div`
width: 100%;
  height: 100%;
padding:30px;
box-sizing:border-box;
display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Text= styled.div`
font-size: 20px;
color: black;
margin-bottom:5%;
`;

const BtnLoginWrap = styled.div`
width:55%;
height:30%;

//height:1.5em;
`;

const BtnNaver = styled.img`
width:100%;
height:100%;
`;



export const ProfileIcon_login= () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const openModalHandler = () => {
      // isOpen의 상태를 변경하는 메소드를 구현
      // !false -> !true -> !false
      setIsOpen(!isOpen) 
    };

    // 네이버 로그인 처리하기 
    const onNaverLogin = () => {
       
    };
  
  
    return (
      <>
        <HomeWrap>
          <HomeLogo src={profilelogo} onClick={openModalHandler}
          // 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다. 
          /> 
            {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현 */}
          
          {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현 */}
          {isOpen ? 
          <ModalBackdrop onClick={openModalHandler}>
              {/* 로그인 안할시  */}
              <LoginModal onNaverLogin={onNaverLogin} />
            </ModalBackdrop>
            : null
          }
        </HomeWrap>
      </>
    );
  };