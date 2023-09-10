import styled from "styled-components";

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  width: 100%;
  height: 100%;

  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const OutWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FontStyle = {
  "@media screen and (max-width: 1024px)": {
    fontSize: 22,
  },

  "@media screen and (max-width: 850px)": {
    fontSize: 21,
  },

  /* mobile 규격 */
  "@media screen and (max-width: 540px)": {
    fontSize: 19,
  },
  /* tablet 규격 */
  "@media screen and (min-width: 1025px)": {
    fontSize: 24,
  },
  "@media screen and (min-width: 1700px)": {
    fontSize: 37,
  },
};
export const InsideWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  /* tablet 규격 */
  @media screen and (max-width: 1024px) {
    width: 87%;
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    width: 95%;
  }
  /* s 데스크 */
  @media screen and (min-width: 1025px) {
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    width: 75%;
  }
`;

export const CategoryWrap = styled.div`
  display: flex;
  flex-wrap: wrap; /* 줄바꿈을 허용하여 가로 공간에 맞게 정렬될 수 있도록 설정 */
  justify-content: center; /* 공간을 균등하게 분배하여 가로로 정렬 */
  align-items: center; /* 수직 가운데 정렬 (선택 사항) */
  margin-top: 20px;

  width: 100%;
`;

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 15px;
  width: 90%;
  height: auto;
  min-height: 600vh;
  padding: 20px;
  margin-top: 20px;

  /* tablet 규격 */
  @media screen and (max-width: 1023px) {
    width: 90%;
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    width: 93%;
    gap: 5px;
  }
  /* s 데스크 */
  @media screen and (min-width: 1024px) {
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
  }
`;

export const GridDiv = styled.div`
  width: 100%;
  height: 37vh;
  border-radius: 10px;
  overflow: hidden;

  cursor: pointer;
  /* tablet 규격 */
  @media screen and (max-width: 1023px) {
    height: 26vh;
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    height: 26vh;
  }
  /* s 데스크 */
  @media screen and (min-width: 1024px) {
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
  }
`;

export const GridImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export const PaginationWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

export const Radius = styled.button`
  padding: 20px;
  word-wrap: break-word;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #798be6;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  cursor: pointer;
  color: white;
`;

export const ButtonShort = styled(Radius)`
  width: 10vw;
  height: 7vh;
  margin-left: 20px;
  ${FontStyle};
  &:hover {
    background: #5d6bb4;
  }

  /* tablet 규격 */
  @media screen and (max-width: 1023px) {
    width: 16vw;
    height: 7vh;
  }

  @media screen and (max-width: 850px) {
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    width: 30vw;
    height: 7vh;
  }
  /* s 데스크 */
  @media screen and (min-width: 1024px) {
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    width: 10vw;
    height: 7vh;
  }
`;

export const CategoryMenu = styled(Radius)`
  ${FontStyle};
  background: ${({ isselected }) =>
    isselected === "true" ? "#5D6BB4" : "#798BE6"};
  width:18.5%;
  margin-right:15px;
  
  &:nth-child(1){
    width:19.5%;
  }
  
  /* tablet 규격 */
  @media screen and (max-width: 1024px){
    width:19%;
    height: 7vh; 
    margin-right:5px;
  }

  @media screen and (max-width: 850px){
    width:19%;
    height: 7vh; 

    &:nth-child(1){
      width:21%;
    }
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px){
    width:32%;
    height: 7vh; 

    &:nth-child(1){
      width:33%;
    }
    &:nth-child(5){
      margin-right: 0;
    }

    margin-right:3px;
    margin-bottom:10px;
  }

  /* ss 데스크 */
  @media screen and (min-width: 1025px){
  
  }
  /* s 데스크 */
  @media screen and (min-width: 1210px){
    height: 7.3vh; 
      
  }
  @media screen and (min-width: 1700px) {
    height: 7vh; 
  }
    
  };
`;

export const PostWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* 수평 정렬을 오른쪽으로 변경 */
  justify-content: flex-end; /* 수직 정렬을 아래쪽으로 변경 */
  position: fixed; /* 위치를 고정 */
  bottom: 100px; /* 아래쪽 여백을 20px로 설정 */
  right: 50px; /* 오른쪽 여백을 20px로 설정 */

  /* tablet 규격 */
  @media screen and (max-width: 1023px) {
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    bottom: 120px; /* 아래쪽 여백을 20px로 설정 */
    right: 25px; /* 오른쪽 여백을 20px로 설정 */
  }
  /* s 데스크 */
  @media screen and (min-width: 1024px) {
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    bottom: 130px; /* 아래쪽 여백을 20px로 설정 */
    right: 80px;
  }
`;
