import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
*{
    
	@font-face {
		font-family: 'NanumNormal';
		
		src: url("./AnyConv.com__NanumGothic-Regular.woff") format('opentype');
	}
	@font-face {
		font-family: 'NanumBold';
	
		src: url("./AnyConv.com__NanumGothic-Bold.woff")format('opentype');
	}
	@font-face {
		font-family: 'NanumExtra';
	
		src: url("./AnyConv.com__NanumGothic-ExtraBold.woff")format('opentype');
		}
	@font-face {
		font-family: "GmarketSansTTFBold";
	
		src: url("./GmarketSansTTFBold.ttf") format("truetype");
	}
}

html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
   // overflow: hidden;
   //font-family: "GmarketSansTTFBold";
   
  }

  button{
	&:hover {
		background: #5d6bb4;
	  }
  }
`;
export default GlobalStyles;