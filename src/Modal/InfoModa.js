
import React, {useParams ,useNavigate} from 'react-router-dom';
import { useState } from 'react'
import styled from 'styled-components';
import {Popup} from '../Modal/Popup';


export const InfoModal = ({openModalHandler}) => {
   

    const handleCancle =()=>{
        openModalHandler();
    };
    return (
        
            <ModalView onClick={(e) => e.stopPropagation()}>
                <Text>게시물을 삭제하겠습니까?</Text>
                <div style={{marginTop:15}}>
                    <span>우리의 색감 매칭 기능을 통해 여러분의 사진과 유사한 색감을 가진 다른 사진을 찾아보세요. <br/>
                                다섯 가지 다양한 카테고리 중 하나의 사진을 올리면, 그와 맞는 카테고리의 사진에서 색감 기반으로 유사한 이미지를 찾아 드립니다.
                                </span>
                    <CancleButton onClick={handleCancle}>취소</CancleButton>
                </div>
                
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
const Button = styled.button`
border:none;
${FontStyle};

background-color:white;
&:hover {
    color: #798be6;
  }
`;

const DeleteButton = styled(Button)`

`;
const CancleButton=styled(Button)`
margin-left:20px;
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
height: 23vh;
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
height: 19vh;
}
/* mobile 규격 */
@media screen and (max-width: 540px){
width: 77vw;
height: 23vh;
}

/* s 데스크 */
@media screen and (min-width: 1025px){

}
/* l 데스크 */
@media screen and (min-width: 1700px){
width: 38vw;
height: 25vh;
}
`;




export const Text= styled.div`
${FontStyle};
color: black;
`;

export const TextWrap= styled.div`
width: 100%;
height: 100%;
padding:30px;
box-sizing:border-box;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`;

export const Text1= styled.div`
${FontStyle};
color: black;
margin-bottom:5%;
`;

export const BtnLoginWrap = styled.div`
width:100%;
`;

export const BtnNaver = styled.img`
width:50%;
height:100%;

@media screen and (max-width: 1024px){
    width:60%;
}

@media screen and (max-width: 850px){
    width:65%;
}
/* mobile 규격 */
@media screen and (max-width: 540px){
    width:70%;
}

/* s 데스크 */
@media screen and (min-width: 1025px){

}
/* l 데스크 */
@media screen and (min-width: 1700px){
    width:49%;
}
`;
