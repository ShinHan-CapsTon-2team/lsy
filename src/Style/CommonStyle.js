import styled from "styled-components";
import { BsPlusCircleFill } from "react-icons/bs";


import {PiUserCircleThin} from 'react-icons/pi'


export const OutWrap = styled.div`
  width: 100%;
  height: 97.6vh;
  position: relative;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;  

export const StyledPiUserCircleThin = styled(PiUserCircleThin)`
width:65px;
height:65px; //+2

stroke-width: 2;
/* tablet 규격 */
@media screen and (max-width: 1024px){
    
}

/* mobile 규격 */
@media screen and (max-width: 540px){
    width:43px;
    height:43px;
    
}
/* s 데스크 */
@media screen and (min-width: 1025px){
    
}
/* l 데스크 */
@media screen and (min-width: 1700px){
    width:70px;
    height:70px;
}
&:hover {
  color: #5d6bb4;
}

`;

export const StyledBsPlusCircleFill = styled(BsPlusCircleFill)`
  color: #798be6;
  cursor: pointer;

  &:hover {
    color: #5d6bb4;
  }

  @media screen and (max-width: 1023px) {
    width: 75px;
    height: 75px;
  }

  @media screen and (max-width: 540px) {
    width: 63px;
    height: 63px;
  }

  @media screen and (min-width: 1024px) {
    width: 70px;
    height: 70px;
  }
  @media screen and (min-width: 1700px) {
    width: 75px;
    height: 75px;
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
    fontSize: 30,
  },
};