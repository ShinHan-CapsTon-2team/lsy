import styled from "styled-components";

export const ProfileWrap = styled.div`

  height:100%;

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
  cursor:pointer;
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
  padding: 20px;
  border-radius: 30px;
  z-index: 9999;
  box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.25);
  top: 85px;
  //height: 15vh;
  min-height: 15vh;
  height:auto;
  @media screen and (max-width: 1024px) {
    width: 15vw;
  }

  @media screen and (max-width: 890px) {
    width: 22vw;
    height: 17vh;
    padding: 5px;
  }
  @media screen and (max-width: 890px) {
    width: 25vw;
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    top: 70px;
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
    top: 115px;
    height: 17vh;
  }
`;

export const DropMenuBar = styled(DropMenu)`
  left:22%;
  top:7%;
  @media screen and (max-width: 690px)
  {
    left:25%;
  }
  @media screen and (max-width: 600px)
  {
    left:30%;
  }
  @media screen and (max-width: 540px)
  {
    left:15%;
  }
  /*
  min-width:18vw;
  @media screen and (max-width: 730px) {
    left:25%;
  }*/

 
  
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

export const ProfileShow = styled.div`

  height:100%;

  display: flex;
  margin-top: 24px;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 850px) {
    margin-top: 20px;
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    margin-top: 15px;
  }

  /* s 데스크 */
  @media screen and (min-width: 1025px) {
    
    margin-top: 20px;
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    margin-top: 35px;
  }
`;

export const Profilename= styled.span`
position: relative;
${FontStyle};
  top:5px;
// margin-top: 10px;
  //bottom:-8px;
`;


