import React from "react";
import { PropagateLoader } from "react-spinners";

import styled from "styled-components";

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#E50915",
  textAlign: "center",
  justifyContent: "center",
};
const OutWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0; margin: 0;
  overflow: hidden;
  background: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Tex = styled.text`
color:#798BE6;
margin-bottom:10px;
font-size:20px;
`;


const Loading = ({what}) => {
  return (
    <OutWrap>
      <Tex>{what} </Tex> 
      <PropagateLoader
        color="#798BE6"
        cssOverride={override}
        size={20}
      />
    </OutWrap>
  );
};

export default Loading;