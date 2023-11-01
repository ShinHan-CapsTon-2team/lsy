import styled from "styled-components";

export const LogoWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const LandingWrap = styled.div``;

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HomeLogo = styled.img`
  width: 55px;
  height: 55px;
  margin-right: 30px;
  cursor:pointer;
  /* tablet 규격 */
  @media screen and (max-width: 1024px) {
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    margin-right: 10px;
    width: 41px;
    height: 41px;
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

export const LandingLogo = styled.img`
  width: 170px;
  height: 100px;
  cursor:pointer;
  /* tablet 규격 */
  @media screen and (max-width: 1024px) {
    width: 190px;
    height: 100px;
  }
  @media screen and (max-width: 850px) {
    width: 170px;
    height: 100px;
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    width: 150px;
    height: 90px;
  }
  /* s 데스크 */
  @media screen and (min-width: 1025px) {
    width: 220px;
    height: 120px;
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    width: 300px;
    height: 170px;
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
export const MenuBarWrap = styled.div``;
export const MenuBar = styled.span
`${FontStyle};
&:hover {
  color: #5d6bb4;
}
`;