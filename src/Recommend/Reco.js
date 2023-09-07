import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

import upload from '../Images/upload.png';

import styled from "styled-components";

import Logo from '../Component/Header' 

function Reco() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate();

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const maxWidth = 500;
        const maxHeight = 800;

        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const resizedImageSrc = canvas.toDataURL('image/jpeg');

        setSelectedFile(file);
        setImageSrc(resizedImageSrc);
      };

      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  };


  const handleImageUploadAndNavigate = async () => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('http://example.com/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // 이미지 업로드 성공
        console.log('Image upload success!');
        
        // 업로드가 완료된 후 다른 페이지로 이동
        navigate('/other-page');
      } else {
        // 이미지 업로드 실패
        console.error('Image upload failed:', response.status);
      }
    } catch (error) {
      console.error('Image upload error:', error);
    }
  };

  return (
    <OutWrap>
      <InOutWrap>
        {/* 로고 */}        
        <Logo />
        {/* 컨텐츠 */}
        <Center>

          <InLayoutOne>
            <Content>
              <Five> 
                  {selectedFile && (
                      <SelectImg src={imageSrc} alt="upload" />
                      )}{/* 업르드시 보이는 사진 */}
              
                  {!selectedFile && (
                      <EmptyImg src={upload} alt="up" />        
                  )}{/* 빈 이미지 로고 그림인데 업로드 하면 없어진 */}


                  <FindImg onClick={() => document.getElementById('file-upload').click()}>
                    파일 찾기
                  </FindImg>
                  

                  <InputBox
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                  />
                  {/* 위 아래  파일찾기  버튼, 이미지 셀렉 하면 없어진다. */}
              </Five>
              
            </Content>
          </InLayoutOne>

          <InLayoutTwo>
            
            <ButtonTwo  style={{marginRight:10}}onClick={handleImageUploadAndNavigate}>
              
                결과보기 
            </ButtonTwo>
          </InLayoutTwo>
        </Center>
      </InOutWrap>
    </OutWrap>
  );
}

export default Reco;

const OutWrap = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  //position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
 // justify-content: center;

// 가운데로 
 position: absolute;
   // top: 50%;
    //left: 50%;
    //transform: translate(-50%, -50%);
 
  * {
  font-size: 33px;
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px){
  * {
  font-size: 27px;
  }
    
  }
  @media screen and (min-width: 1700px) {
  * {
    font-size: 45px;
  }
`;
const InOutWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 65%;
height:100%;

/* tablet 규격 */
  @media screen and (max-width: 1023px){
    width: 75%;
  }
/* mobile 규격 */
  @media screen and (max-width: 540px){
    width: 90%;
  }
  /* s 데스크 */
  @media screen and (min-width: 1024px){
      
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px){
      
  }
`;


const Center = styled.div`
width: 100%;
height:80%;
display: flex;
flex-direction: column;
align-items: center;
`;
const InLayoutOne = styled.div`
width:100%;
height:85%
`;
const Content = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
`;

  const SelectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  `;

  const EmptyImg = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  /* tablet 규격 */
    @media screen and (max-width: 1023px){
        
    }

    /* mobile 규격 */
    @media screen and (max-width: 540px){
        
    }
    /* s 데스크 */
    @media screen and (min-width: 1024px){
        
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){
      width: 200px;
      height: 200px;
    }
  `;

const InLayoutTwo = styled(InLayoutOne)`
display: flex;
width:100%;
height:15%;
justify-content: flex-end;
align-items: center;

`;

const InputBox = styled.input`
display: none;
`;


const ContentRadius = styled.div`
border: 3px #3A76EF solid;
padding: 20px;
word-wrap: break-word;
border-radius: 31px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


box-sizing:border-box;

@media screen and (max-width: 1600px) {
  border: 3px #3A76EF solid;
  };
  
  @media screen and (max-width: 540px) {
  margin-top: 15px;
  border: 2px #3A76EF solid;
  };
  
  @media screen and (min-width: 1601px) {
  margin-top: 30px;
  border: 4px #3A76EF solid;
`;



const Five = styled(ContentRadius)`
position: relative;
width:100%;
height:100%;
`;
  
const Radius = styled.button`
padding: 20px;
word-wrap: break-word;
border-radius: 40px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border:none;
background: #798BE6;
display: flex;
align-items: center;
justify-content: center;
position: relative;
cursor: pointer;
color: white;
`;

// 버튼투
const ButtonTwo = styled(Radius)`
  width:30%;
  height: 70%; 

  /* tablet 규격 */
  @media screen and (max-width: 1023px){
    width:40%;
    
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px){
    width:55%;
  }

  /* s 데스크 */
  @media screen and (min-width: 1024px){
      
  }
  @media screen and (min-width: 1700px) {
  
  };
 `;
const FindImg = styled(ButtonTwo)` 
  position: absolute;
  bottom: 30px;
  right: 10px;

  width:30%;
  height:12.5%;

  /* tablet 규격 */
  @media screen and (max-width: 1023px){
    width:40%;
    
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px){
    width:55%;
    height: 13%; 
    bottom: 20px;

  }

  /* s 데스크 */
  @media screen and (min-width: 1024px){
      
  }
  @media screen and (min-width: 1700px) {
     
  };

`;
