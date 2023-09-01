import styled from 'styled-components';

const DropMenu = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: 'dialog',
  }))`
  position: absolute;
  background-color: white;
  border: 3px solid black;
  padding: 10px;
  border-radius: 30px;
  z-index: 9999;

  //text-align: center;
  box-shadow: 7px 7px 5px  rgba(0, 0, 0, 0.25);
  top: 110px;
  right:80px;
  height:15vh;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;

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
const FontStyle = {
fontSize: 24,

'@media screen and (max-width: 1024px)':{
  
  fontSize: 24
},

'@media screen and (max-width: 850px)':{
  fontSize: 24
 
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
            <CateMenu onClick={onGoProfile}>마이프로필</CateMenu>  
            <CateMenu onClick={onNaverLogout}> 로그아웃 </CateMenu>          
        </DropMenu>
    );
};