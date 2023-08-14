import React from "react";
import { PropagateLoader } from "react-spinners";

import styled from "styled-components";
/*
const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#E50915",
  textAlign: "center",
};*/
const OutWrap = styled.div`
width: 100%;
height: 97.6vh;

position: relative;

background: white;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

//overflow: hidden;
`;

const Loading = () => {
  return (
    <OutWrap>
      <PropagateLoader
        color="#798BE6"
        
        //cssOverride={override}
        size={20}
      />
    </OutWrap>
  );
};

export default Loading;