import styled from 'styled-components';

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

  width: 27vw;
  height: 18vh;
  //height:8.5em;
  background-color: #ffffff;

  display: flex;
  align-items: center;

  justify-content: center;

  @media screen and (max-width: 1024px){
    width: 35vw;
  }
  
  @media screen and (max-width: 850px){
    width: 50vw;
    height: 14vh;
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px){
    width: 70vw;
    height: 19vh;
  }
  
  /* s 데스크 */
  @media screen and (min-width: 1025px){
  
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px){
    width: 35vw;
    height: 21vh;
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
const Text= styled.div`
${FontStyle};
color: black;



`;


export const Success = ({text}) => {

    return (

          <ModalBackdrop >         
              <ModalView onClick={(e) => e.stopPropagation()}>
                  <Text>{text}</Text>
              </ModalView>
            </ModalBackdrop>
    );
  };