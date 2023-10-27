import styled from 'styled-components';

import React, { useEffect,useState } from 'react';


export const ImgModal = ({imgurl,openModalHandler}) => {
  

    const handleCancle =()=>{ // x 버튼 
        openModalHandler();
    };
    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);
    

return (
    <ModalView style={{overflowX:'auto',overflowY:'auto'}} onClick={(e) => e.stopPropagation()}>
      <ModalContent>
        <ModalImageView src={imgurl} alt="이미지" />
      </ModalContent>
        
    </ModalView>
    );
};


const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  //border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //overflow: hidden; /* Hide scrollbars */
  &::-webkit-scrollbar {
    width: 0.1rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const ModalContent = styled.div`
  //max-width: 90%; /* Adjust the maximum width as needed */
  max-height: 95vh; /* Adjust the maximum height as needed */
  //overflow: auto; /* Enable scrolling for content */
  margin-top:5vh;
`;

const ModalImageView = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%; /* Make sure the image doesn't exceed the modal's height */
  margin-bottom:5vh;
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


const CloseButton = styled.button`
position:absolute;
right:10px;
top:10px;
background-color:white !important;

${FontStyle};

&:hover {
    color: #798be6;
    }
`;

const Imgsee = styled.img`
width: 100%;
      height: 100%;
      object-fit: contain;
`;