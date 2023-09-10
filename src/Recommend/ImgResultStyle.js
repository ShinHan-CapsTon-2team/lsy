import styled from "styled-components";

export const OutWrap = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center; 

    /* mobile 규격 */
    @media screen and (max-width: 840px){
        
        height: calc(var(--vh, 1vh) * 100);
    }
`;

    export const InsideWrap = styled.div`
        width:100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;


    export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `;

    export const Direction = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media screen and (max-width: 500px)
  {
    flex-direction: column; 
    margin-bottom: 0px;
  }
`;
    export const Img= styled.img`
    border: 5px #798BE6 solid;
    border-radius: 31px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center; 
    overflow:hidden;
    cursor:pointer;
    ${({ isnotlast }) => isnotlast && "margin-right: 20px;"}
    
    //width:350px;
    //height:470px;

    width: 24vw;
    height: 63vh;
   
    &:hover {
        border: 5px #4E62C5 solid;
    }
    /* tablet 규격 */
        @media screen and (max-width: 1024px){
            width: 33vw;
            height: 49vh;
            //width:250px;
            //height:370px;
            
            
            border: 4px #798BE6 solid;
        }
        @media screen and (max-width: 840px){
            width: 40vw;
            height: 45vh;
        }
        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width: 83vw;
            height: 58vh;
            margin-right:0px;
            margin-bottom:20px;
            border: 4px #798BE6 solid;
        }
        /* s 데스크 */
        @media screen and (min-width: 1025px){
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            width: 26vw;
            height: 65vh;
            //width:470px;
            //height:590px;
            border: 8px #798BE6 solid;
            &:hover {
                border: 8px #4E62C5 solid;
            }
        }
    
    `;


    export const ButtonsWrap = styled.div`
        display: flex;
        justify-content: center;
        margin-top: 30px;
        width:100%;
        /* mobile 규격 */
        @media screen and (max-width: 540px){
            margin-top: 15px; 
        }   
    `;

    export const Radius = styled.button`
    padding: 20px;
    word-wrap: break-word;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    cursor:pointer;
    border:none;
    background: #798BE6;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    color:white;
    margin-bottom: 20px;
    border-radius: 21px;
    `;
    export const TextWrapStyle = styled.div`
    border: 4px #798BE6 solid;  
    padding: 20px;
    word-wrap: break-word;
    border-radius: 21px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top:20px;
    margin-bottom:25px;
    `;

    export const TextWrap = styled(TextWrapStyle)`
    
    /* tablet 규격 */
    @media screen and (max-width: 1024px) {
        width: 70vw;
        height: 13vh;
    }
    @media screen and (max-width: 840px){
        width: 80vw;
    }
    /* mobile 규격 */
    @media screen and (max-width: 540px) {
        width: 80vw;
        height: 20.5vh;
        margin-bottom: 30px;
    }
    /* s 데스크 */
    @media screen and (min-width: 1025px) {
        width: 58vw;
        height: 15vh;
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px) {
        height: 17vh;
    }
    `;

    export const FontStyle = {
        '@media screen and (max-width: 1024px)': {
            fontSize: 22,
        },
        
        '@media screen and (max-width: 850px)': {
            fontSize: 21,
        },
        
        /* mobile 규격 */
        '@media screen and (max-width: 540px)': {
            fontSize: 19,
        },
        /* tablet 규격 */
        '@media screen and (min-width: 1025px)': {
            fontSize: 24,
        },
        '@media screen and (min-width: 1700px)': {
            fontSize: 37,
        },
        };
        
    export const Text1FontStyle = {
    '@media screen and (max-width: 1024px)': {
        fontSize: 38,
    },

    '@media screen and (max-width: 850px)': {
        fontSize: 37,
    },

    /* mobile 규격 */
    '@media screen and (max-width: 540px)': {
        fontSize: 35,
    },
    /* tablet 규격 */
    '@media screen and (min-width: 1025px)': {
        fontSize: 40,
    },
    '@media screen and (min-width: 1700px)': {
        fontSize: 53,
    },
    };
    
    export const Text1 = styled.text`
    /* font-size: 40px; */
    color: #798BE6;
    font-weight: 600;
    margin-bottom: 13px;
    
    ${Text1FontStyle};
    `;
    
    export const Text2= styled.text`
    ${FontStyle};
    color:  #798BE6;
    margin-bottom: 13px;
    
    `;

    export const Sharewrap =styled(TextWrapStyle)`
    width:25vw;
    height: 18vh;
    @media screen and (max-width: 1024px){

    }
    
    @media screen and (max-width: 850px){
        width:30vw;
        height:11vh; 
    }
    /* mobile 규격 */
    @media screen and (max-width: 540px){
        width:50vw;
        height:14vh; 
        margin-bottom:30px;
    }
    
    /* s 데스크 */
    @media screen and (min-width: 1025px){
    
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){
        height: 14vh;
    }
    
    
    `;
    export const ShareText = styled(Text2)`
    font-weight:600;
    margin-bottom:20;
    `;

    export const ShareButtonWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

    export const ButtonTwo = styled(Radius)`
        ${FontStyle};

    /* tablet 규격 */
        @media screen and (max-width: 1024px){
            width:33vw;
            height: 7vh;
            
            margin-right:10px;
        }
        @media screen and (max-width: 850px){
        }
        /* mobile 규격 */
        @media screen and (max-width: 540px){
            
            width:45.5vw;
            height: 8vh; 
            margin-right:10px;
        }
        /* s 데스크 */
        @media screen and (min-width: 1025px){
            width:25vw;
            height: 8vh;
            margin-right:20px;
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            width:26vw;
            height: 7vh;
        }
    `;

    
export const BtnLink = styled.img`

/* mobile 규격 */
@media screen and (max-width: 540px){
    width:50px;
    height:50px;
}
/* s 데스크 */
@media screen and (min-width: 541px){
    width:60px;
    height:60px;
}
/* l 데스크 */
@media screen and (min-width: 1700px){
    width:70px;
    height:70px;
}`;

