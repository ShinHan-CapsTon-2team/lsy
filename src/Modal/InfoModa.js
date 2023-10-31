

import styled from 'styled-components';
import { HiOutlineX } from "react-icons/hi";

export const InfoModal = ({text,showInfo}) => {

    const handleCancle =()=>{
        showInfo();
    };

    function DisplayText(text) { // 설명에서 \n 처리
        if (!text) {
            return null; // text가 없는 경우에 대한 처리
        }
    
        const lines = text.split('.');
        return lines.map((line, index) => (
            <Text style={{display:'flex',flexDirection:'row'}}key={index}>
                {line.trim()}
            
                
            </Text>
            ));
        } 
    return (
        
        <ModalView style={{padding:20}}onClick={(e) => e.stopPropagation()}>
            
            <Wrap>
                <CloseButtonWrap>
                    <CloseButton onClick={handleCancle}></CloseButton>
                </CloseButtonWrap>
                
                <TextWrap > 
                { DisplayText(text) }
                </TextWrap>
            </Wrap>
        </ModalView>
        
    );
  };
  export const FontStyle = {
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


    const CloseButtonStyle = {
        '@media screen and (max-width: 1024px)':{
        fontSize: 38
        },
        
        '@media screen and (max-width: 850px)':{
        fontSize: 37
        },
        
        /* mobile 규격 */
        '@media screen and (max-width: 540px)':{
        fontSize: 35
        },
        /* tablet 규격 */
        '@media screen and (min-width: 1025px)':{
        fontSize: 40
        },
        '@media screen and (min-width: 1700px)': {
        fontSize: 53
        }
        };
    const CloseButton = styled(HiOutlineX)`

right:10px;
top:10px;
background-color:transparent !important;

${CloseButtonStyle};

&:hover {
    color: #798be6;
    }
`;


export const ModalBackdrop = styled.div`
width:100%;
height:100%;
z-index: 1; 
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
role: 'dialog',
}))`
border-radius: 20px;
width: 35vw;
min-height: 23vh;
height:auto;
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
@media screen and (max-width: 1024px){
width: 35vw;
}

@media screen and (max-width: 850px){
width: 53vw;
min-height: 19vh;
}
/* mobile 규격 */
@media screen and (max-width: 540px){
width: 77vw;
min-height: 23vh;
}

/* s 데스크 */
@media screen and (min-width: 1025px){

}
/* l 데스크 */
@media screen and (min-width: 1700px){
width: 38vw;
min-height: 25vh;
}
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CloseButtonWrap = styled.div`
  text-align: right;
  margin-bottom:10px;
`;

const TextWrap = styled.div`
padding:20px;
  display: flex;
  height: 100%;
  text-align: left;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.span`
${FontStyle};
line-height: 125%;
`;
