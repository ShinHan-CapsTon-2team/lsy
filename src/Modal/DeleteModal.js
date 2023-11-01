
import React, {useParams ,useNavigate} from 'react-router-dom';
import { useState } from 'react'
import styled from 'styled-components';
import {Popup} from '../Modal/Popup';
const SERVER_URL= 'http://localhost:4000/api/lookup';


export const DeleteModal = ({isId,profilego,openModalHandler}) => {
    //삭제 성공/실패 모달창 
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const params = useParams(); 
    //console.log("isId:",isId);
    const navigate = useNavigate();

    const handleDelete = () => {
        const reqOptions = {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
            },
            };
        
            fetch(`${SERVER_URL}/${isId}`, reqOptions)
            .then((res) => {
                if (res.status === 204) {
                // 성공 메시지를 보여줍니다.
                setShowSuccessMessage(true);
        
                // 1초 후에 성공 메시지를 숨깁니다.
                setTimeout(() => {
                    setShowSuccessMessage(false);
                    navigate(`/profile/${profilego}`);
                }, 1000);
                } else {
                // 실패 메시지를 보여줍니다.
                setShowErrorMessage(true);
        
                // 1초 후에 실패 메시지를 숨깁니다.
                setTimeout(() => {
                    setShowErrorMessage(false);
                }, 1000);
                }
            })
            .catch((error) => {
                console.error('Error deleting data:', error);
            });
        };

    const handleCancle =()=>{
        openModalHandler();
    };
    return (
        <>
        <ModalBackdrop>         
            <ModalView onClick={(e) => e.stopPropagation()}>
                <Text>게시물을 삭제하겠습니까?</Text>
                <div style={{marginTop:15}}>
                    <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
                    <CancleButton onClick={handleCancle}>취소</CancleButton>
                </div>
                
            </ModalView>
        </ModalBackdrop>
        
        {showSuccessMessage && <Popup text="게시물이 성공적으로 삭제되었습니다." />}
        
        {/* 실패 메시지를 보여주는 부분 */}
        {showErrorMessage && <Popup text="게시물 삭제에 실패했습니다." />}
        </>
    );
  };
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
const Button = styled.button`
border:none;
${FontStyle};

background-color:white;
&:hover {
    color: #798be6;
  }
`;

const DeleteButton = styled(Button)`

`;
const CancleButton=styled(Button)`
margin-left:20px;
`;

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
width: 35vw;
height: 23vh;
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
@media screen and (max-width: 1024px){
width: 35vw;
}

@media screen and (max-width: 850px){
width: 53vw;
height: 19vh;
}
/* mobile 규격 */
@media screen and (max-width: 540px){
width: 77vw;
height: 23vh;
}

/* s 데스크 */
@media screen and (min-width: 1025px){

}
/* l 데스크 */
@media screen and (min-width: 1700px){
width: 38vw;
height: 25vh;
}
`;




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
width:100%;
`;

export const BtnNaver = styled.img`
width:50%;
height:100%;

@media screen and (max-width: 1024px){
    width:60%;
}

@media screen and (max-width: 850px){
    width:65%;
}
/* mobile 규격 */
@media screen and (max-width: 540px){
    width:70%;
}

/* s 데스크 */
@media screen and (min-width: 1025px){

}
/* l 데스크 */
@media screen and (min-width: 1700px){
    width:49%;
}
`;
