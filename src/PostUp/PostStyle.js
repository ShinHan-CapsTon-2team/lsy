import styled from "styled-components";

export const OutWrap = styled.div`
  width: 100%;
  height: 97.6vh;
  position: relative;
  background: white;
  display: flex;
  flex-direction: column;
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
export const InOutWrap = styled.div`
  text-align: center; //+
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* 헤더 간격 맞추기 */
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

export const Center = styled.div`
  width: 87%;
  //text-align: center; //+
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InLayoutOne = styled.div`
  width: 100%;
`;

export const InLayoutTwo = styled.div`
  display: flex;
  width: 100%;
  height: 16vh;
  align-items: center;
  //margin-bottom:20px;
  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    height: 19vh;
  }
  @media screen and (min-width: 1700px) {
    height: 13vh;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentRadius = styled.div`
  padding: 20px;
  word-wrap: break-word;
  border-radius: 31px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 20px;

  @media screen and (max-width: 1600px) {
    border: 3px #3a76ef solid;
  }

  @media screen and (max-width: 540px) {
    margin-top: 15px;
    border: 2px #3a76ef solid;
  }

  @media screen and (min-width: 1601px) {
    margin-top: 30px;
    border: 4px #3a76ef solid;
  }
`;

export const One = styled(ContentRadius)`
  display: flex;
  align-items: center;
  height: auto;
`;

export const Two = styled(ContentRadius)`
  height: 25vh;
`;

export const Three = styled(ContentRadius)`
  position: relative;
  overflow: hidden;
  //text-align: center;
  height: 75vh;
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  //margin-left:auto;
  align-items: center;
  width: 70%;
  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  //flex-direction: column;
  //margin-left: auto;
  justify-content: right;
  width: 100%;
  @media screen and (min-width: 681px) {
    width: 30%;
    justify-content: center;
  }
`;

export const Radius = styled.button`
  padding: 20px;
  word-wrap: break-word;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  background: #798be6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  ${FontStyle};
  margin-top: 20px;
  color:white;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* 메뉴 column*/
  @media screen and (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonOne = styled(Radius)`
  width: 90%;
  height: 7vh;
`;

export const ButtonTwo = styled(Radius)`-
  margin-left:auto;
  text-aling:center;
  color:white;
  margin-right:20px;
  width:18vw;
  height: 7vh; 

  /* s 데스크 */
  @media screen and (max-width: 1024px){
      
  }
  @media screen and (max-width: 850px){
    width:21vw;
}
  /* mobile 규격 */
  @media screen and (max-width: 680px){
    width:41vw;
    height: 7vh; 
  }

  
  /* s 데스크 */
  @media screen and (min-width: 1025px){
      
  }
  @media screen and (min-width: 1700px) {
    width:18vw;
    height: 7.5vh; 
  };
`;
//파일 찾기
export const FindImg = styled(ButtonTwo)`
  position: absolute;
  bottom: 30px;
  right: 10px;

  /* tablet 규격 */
  @media screen and (max-width: 1024px) {
    right: 0px;
    bottom: 20px;
  }

  @media screen and (max-width: 850px) {
    right: 0px;
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    right: 0px;
  }
  /* s 데스크 */
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1700px) {
  }
`;
// span
export const Menu = styled.span`
  z-index: 2;
  color: white;
  position: absolute;
`;

export const Area = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

export const WrapAuto = styled(Area)`
  height: auto;
`;
export const WrapPer = styled(Area)`
  height: 100%;
`;

export const inputStyle = {
  color: "black",
  fontFamily: "Inter",
  border: "none",
  outline: "none",
  width: "100%",
};

export const InputBasic = styled.input`
  ${inputStyle}
  ${FontStyle};
  height: 6vh;
`;

export const TextareaBasic = styled.textarea`
  ${inputStyle}
  height: 100%;
  ${FontStyle};
`;

export const EmptyImg = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* tablet 규격 */
  @media screen and (max-width: 1023px) {
    width: 150px;
    height: 150px;
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    width: 120px;
    height: 120px;
  }
  /* s 데스크 */
  @media screen and (min-width: 1024px) {
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
  }
`;

export const FileBox = styled.input`
  display: none;
`;

export const SelectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const DropContainer = styled.div`
  z-index: 2;
  color: white;
  position: absolute;
  align-items: center;
`;

//드롭메뉴바
export const DropMenu = styled.div`
  position: relative;
  background-color: #798be6;
  padding: 10px;
  border-radius: 31px;
  z-index: 2;
  ${FontStyle};
  //text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  top: -167px; // 높 : 860 -167px;

  /* tablet 규격 */
  @media screen and (max-width: 1023px) {
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    width: 45vw;
    top: -157px;
  }
  /* s 데스크 */
  @media screen and (min-width: 1024px) {
    width: 25vw;
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    width: 40vw;
    top: -197px; // 1080
  }
`;

export const CateMenu = styled.div`
  ${FontStyle};
  cusor: pointer;
  margin-top: 5px;
`;

export const ButtonLong = styled(Radius)`
  width: 18vw;
  height: 7vh;
  ${FontStyle};
  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    width: 41vw;
    height: 7vh;
  }

  /* s 데스크 */
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1700px) {
    width: 18vw;
    height: 7.5vh;
  }
`;

export const EditButton = styled(ButtonLong)``;
export const CancelButton = styled(ButtonLong)``;
