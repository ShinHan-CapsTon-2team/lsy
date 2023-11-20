import React from "react";
import { BeatLoader } from "react-spinners";
import {FontStyle} from '../Style/CommonStyle'
import styled from "styled-components";

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#E50915",
  textAlign: "center",
  justifyContent: "center",
  margin:100
};
const OutWrap = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`;


const Tex = styled.span`
color:#798BE6;
margin-bottom:15px;
${FontStyle};
`;


const Loading = ({what}) => {
  return (
    <OutWrap>
      <Tex>{what} </Tex> 
      <BeatLoader
        color="#798BE6"
        //cssOverride={override}
        size={40}
        margin={10}
        speedMultiplier={0.8}
      />
    </OutWrap>
  );
};

export default Loading;