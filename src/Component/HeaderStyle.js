import styled from "styled-components";
import {TbMenu2} from 'react-icons/tb'
import { Tooltip } from 'react-tooltip'

export const SmallMenu = styled(TbMenu2)`
display:flex;
  stroke-width:1.5;
  margin-left: 20px;
  width: 41px;
  height: 41px;
  cursor:pointer;
@media screen and (min-width: 891px)
{
  display:none;
}
`;
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

  cursor:pointer;
  /* tablet 규격 */
  @media screen and (max-width: 1024px) {
    width: 190px;
    height: 83px;
  }
  @media screen and (max-width: 850px) {
    width: 170px;
    height: 83px;
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    width: 150px;
    height: 73px;
  }
  /* s 데스크 */
  @media screen and (min-width: 1025px) {
    width: 220px;
    height: 103px;
    //height: 120px;
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    width: 300px;
    height: 153px;
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
    fontSize: 24 ,
  },
  "@media screen and (min-width: 1700px)": {
    fontSize: 37,
  },
};
export const MenuBarWrap = styled.div`
@media screen and (max-width: 891px)
{
  display:none;
}
position:relative;
bottom:-39px;
margin-left:20px;
}



`;
export const MenuBar = styled.span
`${FontStyle};
&:hover {
  color: #5d6bb4;
}
`;

export const Tool = styled(Tooltip)`
  cursor:pointer !important;
  background-color:  #9AA5DE !important;
  font-size: 20px !important; /* 글꼴 크기 변경 */
  color: white; /* 글꼴 색상 변경 */
  width: 30vw !important;
  min-height: 20vh !important;
  height: auto !important;
  padding:40px !important;
  text-align: left !important;
  z-index: 9999 !important;
  margin-left: 30px !important;
  line-height: 125%;
  letter-spacing: 2px;
  border-radius: 3.5% !important;
  opacity:1 !important;


  @media screen and (max-width: 1024px){
    font-size: 20px !important;
    width: 32vw !important;
  }
    
  /* s 데스크 */
  @media screen and (min-width: 1025px){
    font-size: 22px !important;
    width: 30vw !important;
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px){
    font-size: 35px !important;
  }
`;