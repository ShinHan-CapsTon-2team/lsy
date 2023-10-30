import React, { useState } from 'react';
//import styled from "styled-components";
import * as S from "./homeStyle";

const ImageWithHover = ({ imageUrl, alt, nickname, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log('hover', nickname);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} // 클릭 이벤트 추가
      style={{ position: 'relative', width: '100%', height: 'auto', cursor: 'pointer' }}
    >
        <S.GridDiv>
       <S.GridImg
        src={imageUrl}
        alt={alt}
        style={{ width: '100%', 
        height: '100%', 
        borderRadius: '10px',
        objectfit: 'cover' }}
      />
       {isHovered && <S.GradientOverlay />}
      </S.GridDiv>

      {isHovered && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            fontWeight:'bold',
            textAlign: 'center',
            padding: '8px',
            fontSize: '25px',
          }}
        >
          {nickname}
        </div>
      )}
    </div>
  );
};

export default ImageWithHover;