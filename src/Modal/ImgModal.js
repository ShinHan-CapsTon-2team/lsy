import styled from 'styled-components';

import React, { useEffect } from 'react';


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
      <div style={{display:'flex',width:'100%',height:'17vh'}}>
      <CloseButton onClick={handleCancle}>x</CloseButton>
      </div>
      <ModalContent>
        <ModalImageView src={imgurl} alt="이미지" />
      </ModalContent>
        
    </ModalView>
    );
};


const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`

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
  max-height: 100vh; /* Adjust the maximum height as needed */
 
  //overflow: auto; /* Enable scrolling for content */
  //margin-top:8vh;
`;

const ModalImageView = styled.img`
  width: 100%;
  height: auto;
  
  max-height: 100%; /* Make sure the image doesn't exceed the modal's height */
  margin-bottom:15vh;
`;







const FontStyle = {
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

const Imgsee = styled.img`
width: 100%;
      height: 100%;
      object-fit: contain;
`;


const CloseButton = styled.button`
position:absolute;
right:10px;
top:10px;
background-color:transparent !important;

${FontStyle};

&:hover {
    color: #798be6;
    }
`;