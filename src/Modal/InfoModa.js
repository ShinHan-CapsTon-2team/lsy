

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
                {text==="reco" ?(
                    <TextWrap > 
                        <Text>
                            우리의 색감 매칭 기능을 통해 여러분의 사진과 유사한 색감을 가진 다른 사진을 찾아보세요. <br/>
                            다섯 가지 다양한 카테고리 중 하나의 사진을 올리면, 그와 맞는 카테고리의 사진에서 색감 기반으로 유사한 이미지를 찾아 드립니다.
                        </Text>
                    </TextWrap>
                ):(
                <TextWrap > 
                    <Text>
                        사진 취향을 발견하고 원하는 사진을 찾기 위한 흥미로운 테스트를 시작하세요. <br/>
                        선택한 카테고리에 따라 원하는 스타일과 옵션을 선택하세요.<br/>
                        선택지 기반으로 맞춤형 사진을 찾아 드립니다.
                    </Text>
                </TextWrap>
                )}
                
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
    fontSize: 30
    }
    };


    const CloseButtonStyle = {
    width:35,
    height:35,
    
    /* mobile 규격 */
    '@media screen and (max-width: 750px)':{
        width:30,
        height:30,
    },
    
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
width: 45%;
height:auto;
background-color: #ffffff;
display: flex;
align-items: center;
flex-direction:column;


@media screen and (max-width: 750px){
width: 53%;
}
/* mobile 규격 */
@media screen and (max-width: 600px){
width: 65%;
}


`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width:100%;
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
line-height: 130%;
`;
