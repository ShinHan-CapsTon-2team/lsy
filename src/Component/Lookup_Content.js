
import  {useNavigate } from 'react-router-dom';
import profilelogo from '../Images/i2.png'
import * as S from '../Lookup/LookupStyle'
import React, { useState } from 'react';
import { ModalBackdrop } from "../Modal/ModalStyle";
import { ImgModal } from '../Modal/ImgModal';

import styled from 'styled-components';

const Lookup_Content =({ title,nickname,imageurl,description,created_at,id,writer}) => {
    
    const navigate = useNavigate();
    
    function DisplayText(text) { // 설명에서 \n 처리  
        const lines = text.split('\n');
        return lines.map((line, index) => (
            <S.Font key={index} style={{marginBottom:5}}>
                {line}
                {index !== lines.length - 1 && <br />}
            </S.Font>
            ));
        }
    //시간 처리하기
    const timestamp = created_at; 
        // UTC Timestamp를 한국 시간대로 변환
    const dateUTC = new Date(timestamp);
    const offsetInMilliseconds = 9 * 60 * 60 * 1000;
    const dateKST = new Date(dateUTC.getTime() + offsetInMilliseconds);
    const postdate= dateKST.getFullYear()+"-"+(dateKST.getMonth() + 1)+"-"+dateKST.getDate()+"  "+dateKST.getHours()+":"+dateKST.getMinutes();
    

    const handleGoProfile = () => {
        navigate(`/profile/${writer}`);
      };


    const [isOpen, setIsOpen] = useState(false); // 모달창 외부 여닫기
    const openModalHandler = () => {
    setIsOpen(!isOpen);

      };
    

      

    return (
        <S.InLayoutOne>  
            <S.Content>
                <S.ContentTitle> {/*제목*/}
                    <S.WrapBasic>
                        <S.Font> {title || 'none'} </S.Font>
                    </S.WrapBasic>

                    <S.WrapBasic> {/* 날짜 */}
                        <S.At>{postdate || 'none'}</S.At>
                    </S.WrapBasic>
                </S.ContentTitle>

                <S.ContentProfile> {/* 이름 */}
                    <S.ProfileImgWrap > 
                        <S.ProfileImg src={profilelogo} onClick={handleGoProfile} />
                    </S.ProfileImgWrap>
                    <S.ContentBasic  style={{flex:1}}>{/*이름 */}
                        <S.WrapBasic>
                            <S.Font>{nickname || 'none'}</S.Font>
                        </S.WrapBasic>
                    </S.ContentBasic>
                </S.ContentProfile>

                <S.ContentImgDes>{/* 이미지/설명 */}
                    <S.BoxRadius style={{padding:30}}> {/* 이미지 */}
                        <S.Img src={imageurl} 
                                alt='이미지' 
                                onClick={openModalHandler}
                        />
                    </S.BoxRadius>

                    {isOpen && (
                        <ModalBackdrop style={{overflowY:'initial'}}onClick={openModalHandler}>
                            <CloseButton onClick={openModalHandler}>x</CloseButton>
                            <ImgModal 
                            imgurl={imageurl}openModalHandler={openModalHandler}/>
                        </ModalBackdrop>
                    )}
                    
                    <S.BoxRadius> {/* 설명 */}
                        {DisplayText(description)}
                    </S.BoxRadius>
                </S.ContentImgDes>
                
            </S.Content>  
        </S.InLayoutOne> 

    );
}; 
export default Lookup_Content;



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

    
const CloseButton = styled.button`
position:absolute;
right:10px;
top:10px;
background-color:white !important;

${FontStyle};

&:hover {
    color: #798be6;
    }
`;