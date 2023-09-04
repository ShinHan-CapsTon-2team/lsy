import styled from 'styled-components';
import naverlogin from '../Images/naverlogin.png'


export const ModalBackdrop = styled.div`
// Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
width:100%;
height:100%;

z-index: 1; //위치지정 요소
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
// attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
role: 'dialog',
}))`
// Modal창 CSS를 구현합니다.

border-radius: 20px;
width: 35%;
height: 28%;
//height:8.5em;
background-color: #ffffff;

`;
const FontStyle = {
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
const TextWrap= styled.div`
width: 100%;
height: 100%;
padding:30px;
box-sizing:border-box;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`;
const Text= styled.div`
${FontStyle};
color: black;
margin-bottom:5%;
`;

const BtnLoginWrap = styled.div`
width:15vw;
height:8vh;

//height:1.5em;
`;

const BtnNaver = styled.img`
width:100%;
height:100%;
`;
export const LoginModal = () => {

// 네이버 로그인 처리하기 
const onNaverLogin = () => {
    
};


return (
    <ModalView onClick={(e) => e.stopPropagation()}>
    
        <TextWrap>
            <Text>로그인 해주세요</Text>
            <BtnLoginWrap> 
                <BtnNaver src={naverlogin}  onclick={onNaverLogin} alt=''></BtnNaver>
            </BtnLoginWrap>
        </TextWrap>

    </ModalView>
    );
};