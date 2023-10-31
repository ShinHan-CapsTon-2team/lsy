import React, { useState } from 'react';
//import styled from "styled-components";
import * as S from "./homeStyle";
import styled from 'styled-components';

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
        <HoverShow
        >
          {nickname}
        </HoverShow>
      )}
    </div>
  );
};

export default ImageWithHover;

export const FontStyle = {
  "@media screen and (max-width: 1024px)": {
    fontSize: 22,
  },

  "@media screen and (max-width: 850px)": {
    fontSize: 21,
  },

  /* mobile 규격 */
  "@media screen and (max-width: 540px)": {
    fontSize: 16,
  },
  /* tablet 규격 */
  "@media screen and (min-width: 1025px)": {
    fontSize: 24,
  },
  "@media screen and (min-width: 1700px)": {
    fontSize: 37,
  },
};
const HoverShow = styled.div`
${FontStyle};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: bold;
  text-align: center;
  padding: 8px;
`;
