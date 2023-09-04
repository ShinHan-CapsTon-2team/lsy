import styled from 'styled-components';

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

export const ProandLogout = () => {
    // 자기 프로필 가는거 처리하기 App js 참고  
    const onGoProfile = () => {
        
    };
    // 로그아웃 처리하기 
    const onNaverLogout = () => {
        
    };

    return(
        <DropMenu onClick={(e) => e.stopPropagation()}>
            <CateMenu onClick={onGoProfile} style={{marginBottom:10}}>마이프로필</CateMenu>  
            <CateMenu onClick={onNaverLogout}> 로그아웃 </CateMenu>          
        </DropMenu>
    );
};