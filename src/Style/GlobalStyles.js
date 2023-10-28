import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import ram2 from '../assets/fonts/Ramche.ttf';
import gBold from '../assets/fonts/GmarketSansTTFBold.ttf';
import gLight from '../assets/fonts/GmarketSansTTFLight.ttf';
import gMid from '../assets/fonts/GmarketSansTTFMedium.ttf';

const GlobalStyles = createGlobalStyle`

  @font-face {
	font-family: 'Ramche2';
	src: url(${ram2}) format('truetype');
  }

  @font-face {
    font-family: 'GfontBold';
    src: url(${gBold}) format('truetype');
    }

  @font-face {
    font-family: 'GfontL';
    src: url(${gLight}) format('truetype');
    }
    @font-face {
      font-family: 'GfontMid';
      src: url(${gMid}) format('truetype');
      }
  
${reset}

html, body {
	font-family: 'GfontL';
  font-weight:600;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  button{
	
	&:hover {
		background: #5d6bb4;
	  }
	  cursor: pointer;
	border:none;
  }
`;
export default GlobalStyles;