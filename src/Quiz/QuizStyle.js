import styled from "styled-components";
import { InsideWrap as BaseInsideWrap } from '../Style/CommonStyle';

export const InsideWrap = styled(BaseInsideWrap)` height:100%;`;

export const FontStyle = {
  '@media screen and (max-width: 1024px)':{
  
  fontSize: 30
  },
  /* mobile 규격 */
  '@media screen and (max-width: 540px)':{
  
  fontSize: 25
  },
  /* tablet 규격 */
  '@media screen and (min-width: 1025px)':{
  
  fontSize: 30
  },
  '@media screen and (min-width: 1700px)': {
  
  fontSize: 33
  }
  };

  export const Textselect= styled.div`
text-align: center;
display: flex;
flex-direction: row;
align-items: center;
@media screen and (max-width: 640px){
flex-direction: column;
}
`;
export const FontMenuStyle = {
    '@media screen and (max-width: 1024px)':{
    
    fontSize: 30
    },
    /* mobile 규격 */
    '@media screen and (max-width: 540px)':{
    
    fontSize: 25
    },
    /* tablet 규격 */
    '@media screen and (min-width: 1025px)':{
    
    fontSize: 30
    },
    '@media screen and (min-width: 1700px)': {
    
    fontSize: 37
    }
    };
export const QText = styled.span`
color: black;
font-weight: bold;

${FontMenuStyle};
`;

export const QCateText = styled.span
`font-weight: bold;

${FontStyle};
color: #798BE6;
margin-right:10px;
@media screen and (max-width: 640px){
  margin-right:0px;
  margin-bottom:10px;
  }
`;

export const FontsmallStyle = {
  '@media screen and (max-width: 1024px)':{
  
  fontSize: 25
  },
  /* mobile 규격 */
  '@media screen and (max-width: 540px)':{
  
  fontSize: 20
  },
  /* tablet 규격 */
  '@media screen and (min-width: 1025px)':{
  
  fontSize: 25
  },
  '@media screen and (min-width: 1700px)': {
  
  fontSize: 28
  }
  };


  export const Textimgselect= styled.span`
color: black;
font-weight: bold;
margin-bottom:5px;
${FontsmallStyle};
`;



/*
export const OutWrap = styled.div`
    width: 100%;
    position: relative;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-direction: column;



    height: 97.6vh;
    
        @media screen and (max-width: 840px){
           
            height: calc(var(--vh, 1vh) * 100);
        }

    
`;
*/

    
   

export const Ulstyle = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:40px;
    
        @media screen and (max-width: 650px){
            flex-direction:column;
            margin-top:20px;
        }
        
        /* mobile 규격 */
        @media screen and (max-width: 540px){
            margin-top:30px;
        }
    `;

    
    

export const Img= styled.img`
    border: 5px #798BE6 solid;
    border-radius: 31px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center; 
    overflow:hidden;
    object-fit:cover;
    width: 43vw;
    height: 62vh;
    //width: 32vw;
    //height: 77vh;
    
    &:hover {
      border: 5px #4E62C5 solid;
  }
  
    margin-right: 15px;
    
    @media screen and (max-width: 1300px)
    {
      width: 34vw;
      margin-right: 25px;
    }
    /* tablet 규격 */
        @media screen and (max-width: 1023px){
          width: 43vw;
          height: 62vh;
          margin-right: 15px;
      }

      @media screen and (max-width: 900px){
          width: 43vw;
          height: 53vh;
          
      }


      /* mobile 규격 */
      @media screen and (max-width: 650px){
          width: 75vw;
          height: 59vh;
          //height: 40vh;
          margin-bottom:20px;
          margin-right: 0px;
          border: 4px #798BE6 solid;
          &:hover {
            border: 4px #4E62C5 solid;
          }
      }
        @media screen and (max-width: 540px){
          width: 75vw;
          height: 55vh;
          
        }
        /* s 데스크 */
        @media screen and (min-width: 1301px){
          width: 32vw;
          height: 62vh;
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            width: 28vw;
            height: 63vh;
          //width: 34vw;
          //height: 67vh;
            margin-right: 30px; 
            border: 8px #798BE6 solid;
            &:hover {
                border: 8px #4E62C5 solid;
            }
        }
    `;