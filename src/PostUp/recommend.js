import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../Images/imagelogo.png';

import file from '../Images/image_6.png';
import result from '../Images/image_5.png';
import upload from '../Images/upload.png';
function Recommend() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate();

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  console.log(`현재 화면 너비: ${screenWidth}px`);
  console.log(`현재 화면 높이: ${screenHeight}px`);
  
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

  const handleFileButtonClick = () => {
    const fileInput = document.getElementById('file-upload');
    fileInput.click();
  };
  //홈페이지
  const handleGohomeClick = () => {
    navigate('/home');
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
    <div style={{width: '100%',height: '100%',background: 'white', position: 'relative',alignItems: 'center'}}>
      <div style={{width: 496, height: 239,textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img style={{width: 354, height: 239, left: 0, top: 0, position: 'absolute'}} src={logo} alt='' onClick={handleGohomeClick}/>
      </div>

      <div style={{  height: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{width:'65%', position:'relative', height:500,textAlign:'center',  opacity: 0.90, background: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 31, border: '3px #3A76EF solid',padding: '20px',overflow: 'hidden' }}>
            
            {selectedFile && (
                  <img className="selected-image" style={{width:'100%',height:'100%',objectFit: 'contain'}} src={imageSrc} alt="upload" />
                )}{/* 업르드시 보이는 사진 */}
        
            {!selectedFile && (
                
                <img className="upload" src={upload} style={{ width: 100, height: 100, position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%,-50%)'}} alt="up" />
                
            )}{/* 빈 이미지 로고 그림인데 업로드 하면 없어진 */}

            <input
                id="file-upload"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileSelect}
            />

            {!selectedFile && (
                <img className="files" src={file} style={{position: 'absolute', bottom: '10px', right: '10px'}} alt="file" onClick={handleFileButtonClick} />
            )}{/* 위 아래  파일찾기  버튼, 이미지 셀렉 하면 없어진다. */}
        </div>
   
      </div>

      <div style={{ marginTop:20}}>
          <Link to="/quizresult">
              <img className="results" style={{float:'right' ,height: 70}}src={result} alt="result" onClick={handleImageUploadAndNavigate} />
          </Link>
        </div>
    </div>
  );
}

export default Recommend;
