import styled from 'styled-components';

import React, { useEffect } from 'react';

import { HiOutlineX } from "react-icons/hi";
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







const CloseButtonStyle = {
    '@media screen and (max-width: 1024px)':{
      width:40,
      height:40,
    },
    
    '@media screen and (max-width: 870px)':{
      width:35,
      height:35,
    },
    
    /* mobile 규격 */
    '@media screen and (max-width: 750px)':{
      width:30,
      height:30,
    },
    /* tablet 규격 */
    '@media screen and (min-width: 1025px)':{
      width:45,
      height:45,
    },
    '@media screen and (min-width: 1700px)': {
      width:65,
      height:65,
    }
    };


const CloseButton = styled(HiOutlineX)`
position:absolute;
right:10px;
top:10px;
background-color:transparent !important;

${CloseButtonStyle};

&:hover {
    color: #798be6;
    }
`;