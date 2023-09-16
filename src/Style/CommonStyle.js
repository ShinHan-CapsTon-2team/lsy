import styled from "styled-components";
import { BsPlusCircleFill } from "react-icons/bs";

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
    width: 90px;
    height: 90px;
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