import styled from "styled-components";

export const ProfileWrap = styled.div`
  margin-right: 30px;

  /* tablet 규격 */
  @media screen and (max-width: 1023px) {
    right: 5%;
    top: 5.5%;
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileLogo = styled.img`
  width: 57px;
  height: 57px; 
  /* tablet 규격 */
  @media screen and (max-width: 1024px) {
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    width: 43px;
    height: 43px;
  }
  /* s 데스크 */
  @media screen and (min-width: 1025px) {
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    width: 70px;
    height: 70px;
  }
`;

export const DropMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  background-color: white;
  border: 2px solid black;
  padding: 10px;
  border-radius: 30px;
  z-index: 9999;
  box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.25);
  top: 80px;
  height: 15vh;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 850px) {
    width: 25vw;
    height: 12vh;
    padding: 5px;
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    top: 50px;
    width: 45vw;
    height: 15vh;
    right: -25px;
    border: 1.8px solid black;
  }

  /* s 데스크 */
  @media screen and (min-width: 1025px) {
    width: 15vw;
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    width: 18vw;
    top: 90px;
    height: 17vh;
  }
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

export const CateMenu = styled.div`
  ${FontStyle};
  font-weight: bold;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    color: #5d6bb4;
  }
`;