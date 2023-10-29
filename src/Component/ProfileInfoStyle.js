import styled from "styled-components";

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;

  @media screen and (max-width: 1024px) {
    width: 25%;
  }

  @media screen and (max-width: 850px) {
    width: 30%;
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    width: 90%;
  }

  /* s 데스크 */
  @media screen and (min-width: 1025px) {
    width: 30%;
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    width: 27%;
  }
`;

export const ContentRadius = styled.div`
  padding: 40px;

  word-wrap: break-word;
  border-radius: 31px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;

  @media screen and (max-width: 1600px) {
    border: 3px #3a76ef solid;
  }

  @media screen and (max-width: 1024px) {
    padding: 20px;
  }
  @media screen and (max-width: 540px) {
    border: 2px #3a76ef solid;
  }

  @media screen and (min-width: 1601px) {
    border: 4px #3a76ef solid;
  }

  @media screen and (max-width: 850px) {
    padding: 20px;
  }
`;

export const One = styled(ContentRadius)`
  display: flex;
  align-items: center;
  height: 15vh;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;

  width: 70%;
  @media screen and (max-width: 850px) {
    width: 75%;
  }
  @media screen and (max-width: 540px) {
    width: 90%;
  }
`;
export const Two = styled(ContentRadius)`
  display: flex;
  align-items: center;
  height: auto;
  min-height: 30vh;
  flex-direction: column;

  width: 70%;
  @media screen and (max-width: 850px) {
    width: 75%;
  }
  @media screen and (max-width: 540px) {
    width: 90%;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 23px;
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
    fontSize: 35,
  },
};

export const Area = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Wrap = styled(Area)`
  text-align: center;
  border-radius: 31px;
`;
export const Font = styled.span`
  ${FontStyle};
  color: black;
  width: 100%;
`;
export const Left = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const AreaInput = styled(Area)`
  overflow: hidden;
`;

export const WrapPer = styled(AreaInput)`
  height: 100%;
`;

export const inputStyle = {
  color: "black",
  fontFamily: "Inter",
  border: "none",
  outline: "none",
  width: "100%",
};

export const TextareaBasic = styled.textarea`
  ${inputStyle};
  ${FontStyle};
  min-height: 25vh;
  height: auto;
`;
export const Radius = styled.button`
  padding: 20px;
  word-wrap: break-word;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  //cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #798be6;
  position: relative;
 // cursor: pointer;
  color: white;
`;
export const ButtonShort = styled(Radius)`
  height: 8.5vh;
  width: 80%;
  ${FontStyle};
  margin-bottom: 20px;
  &:hover {
    background: #5d6bb4;
  }

  /* tablet 규격 */
  @media screen and (max-width: 1024px) {
    // width:16vw;
    height: 7vh;
  }
  @media screen and (max-width: 850px) {
    width: 80%;
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    width: 70%;
    //width:30vw;
    height: 7vh;
  }
  /* s 데스크 */
  @media screen and (min-width: 1025px) {
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    // width:10vw;
    height: 7vh;
  }
`;

export const Email = styled.div`
  ${FontStyle};
  width: 100%;
`;

export const GrayFontStyle = {
  "@media screen and (max-width: 1024px)": {
    fontSize: 20,
  },

  "@media screen and (max-width: 850px)": {
    fontSize: 19,
  },

  /* mobile 규격 */
  "@media screen and (max-width: 540px)": {
    fontSize: 17,
  },
  /* tablet 규격 */
  "@media screen and (min-width: 1025px)": {
    fontSize: 22,
  },
  "@media screen and (min-width: 1700px)": {
    fontSize: 31,
  },
};
export const Whatgray = styled.div`
  ${GrayFontStyle};

  color: gray;
  margin-bottom: 5px;
`;

export const NickNameFontStyle = {
  "@media screen and (max-width: 1024px)": {
    fontSize: 27,
  },

  "@media screen and (max-width: 850px)": {
    fontSize: 26,
  },

  /* mobile 규격 */
  "@media screen and (max-width: 540px)": {
    fontSize: 24,
  },
  /* tablet 규격 */
  "@media screen and (min-width: 1025px)": {
    fontSize: 29,
  },
  "@media screen and (min-width: 1700px)": {
    fontSize: 40,
  },
};

export const NickName = styled.div`
  ${NickNameFontStyle};
  color: black;
  width: 100%;
  overflow-wrap: break-word;
`;
