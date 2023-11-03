import styled from 'styled-components';

export const ModalBackdrop = styled.div`
width:100%;
height:100%;
z-index: 1; 
position: fixed;
display : flex;
justify-content : center;
align-items : center;
background-color: rgba(0,0,0,0.4);
top : 0;
left : 0;
right : 0;
bottom : 0;
`;

export const ModalView = styled.div.attrs((props) => ({
role: 'dialog',
}))`

border-radius: 20px;
min-width: 20vw;
min-height: 16vh;
width:auto;
height:auto;
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
padding:25px;


`;


export const FontStyle = {
'@media screen and (max-width: 1024px)':{
fontSize: 22
},

'@media screen and (max-width: 850px)':{
fontSize: 21
},

/* mobile 규격 */
'@media screen and (max-width: 540px)':{
fontSize: 19
},
/* tablet 규격 */
'@media screen and (min-width: 1025px)':{
fontSize: 24
},
'@media screen and (min-width: 1700px)': {
fontSize: 37
}
};

export const Text= styled.div`
${FontStyle};
color: black;
`;

export const TextWrap= styled.div`
width: 100%;
height: 100%;
padding:30px;
box-sizing:border-box;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`;

export const Text1= styled.div`
${FontStyle};
color: black;
margin-bottom:5%;
`;

export const BtnLoginWrap = styled.div`
margin-top:10px;
`;

export const BtnNaver = styled.img`
width:270px;
//height:100%;


@media screen and (max-width: 850px){
    width:250px;
}
/* mobile 규격 */
@media screen and (max-width: 540px){
    width:200px;
}

/* l 데스크 */
@media screen and (min-width: 1700px){
    width:335px;
}


`;
