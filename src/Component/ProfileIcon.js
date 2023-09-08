import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import profilelogo from '../Images/pp.png'
import { LoginModal } from '../Modal/LoginModal';


const HomeWrap = styled.div`
margin-right:30px;

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

const DropMenu = styled.div`
  position: absolute;
  background-color: white;
  border: 2px solid black;
  padding: 10px;
  border-radius: 30px;
  z-index: 9999;

  //text-align: center;
  box-shadow: 7px 7px 5px  rgba(0, 0, 0, 0.25);
  //top: 110px;
  top:70px;
  //right:80px;
  height:15vh;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;


      @media screen and (max-width: 1024px){

      }
      
      @media screen and (max-width: 850px){
        width:25vw;
        height:12vh;
        padding: 5px;
      }
      /* mobile 규격 */
      @media screen and (max-width: 540px){
        top:50px;
        width:45vw;
        height:15vh;
        right:-25px;
        border: 1.8px solid black;
      }
      
      /* s 데스크 */
      @media screen and (min-width: 1025px){
        width:15vw;
      }
      /* l 데스크 */
      @media screen and (min-width: 1700px){
        width:18vw;
        top: 90px;
        height:17vh;
        //right:0px;
      }
`;
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


const CateMenu = styled.div` 
  ${FontStyle};
 font-weight:bold;
  cursor:pointer;
  margin-top:5px;
  
  &:hover {
    color:#5D6BB4;
  }

`;

export const ProfileIcon = () => {
  const [isOpen, setIsOpen] = useState(false); // 모달창때문에 있는거 삭제 노 
  const accessToken = localStorage.getItem('access_token'); // 로컬 스토리지에서 액세스 토큰 가져오기
  const openModalHandler = () => { // 모달창 관련임 자세히 알 필요 X 
    setIsOpen(!isOpen) 
  };
  const navigate = useNavigate();

  // 자기 프로필 가는거 처리하기 App js 참고  
  const onGoProfile = () => {
    navigate('/profile');
  };
  
  const onNaverLogout = () => {
      //로그아웃 처리 코드
      localStorage.removeItem('access_token');
      setIsOpen(false); // 로그아웃 후 모달 닫음
      console.log("로그아웃 되었습니다.");
  };
  return (
    <>
      <HomeWrap>
        <HomeLogo src={profilelogo} onClick={openModalHandler} />
        {isOpen && (
          <>
            {accessToken ? ( // 액세스 토큰이 있는 경우
              <DropMenu>
                <CateMenu onClick={onGoProfile}>마이프로필</CateMenu>
                <CateMenu onClick={onNaverLogout}>로그아웃</CateMenu>
              </DropMenu>
            ) : (
              // 액세스 토큰이 없는 경우
              <ModalBackdrop onClick={openModalHandler}>
                <LoginModal />
              </ModalBackdrop>
            )}
          </>
        )}
      </HomeWrap>
    </>
  );
  
  };