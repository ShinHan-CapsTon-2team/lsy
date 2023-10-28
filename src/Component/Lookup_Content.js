
import  {useNavigate } from 'react-router-dom';
import profilelogo from '../Images/i2.png'
import * as S from '../Lookup/LookupStyle'
import React, { useState } from 'react';
import { ModalBackdrop } from "../Modal/ModalStyle";
import { ImgModal } from '../Modal/ImgModal';
import {PiUserCircleThin} from 'react-icons/pi'
import styled from 'styled-components';

import { StyledPiUserCircleThin } from '../Style/CommonStyle';
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
                
                <S.ContentImgDes style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>{/* 이미지/설명 */}
                    <div style={{marginTop:'3vh',marginBottom:'3vh'}}>
                        
                            <S.TitleFont> {title || 'none'} </S.TitleFont>   
                    </div>

                    <div style={{display:'flex',flexDirection:'row',marginTop:10,width:'100%'}}>
                    
                        <S.ProfileImgWrap style={{marginTop:0}} > 
                            <S.ProfileImg src={profilelogo} onClick={handleGoProfile} />
                        </S.ProfileImgWrap>

                        <S.WrapBasic style={{width:'auto'}}>
                            <S.NameFont onClick={handleGoProfile}>{nickname || 'none'}</S.NameFont>
                        </S.WrapBasic>

                        <S.WrapBasic style={{width:'auto',marginLeft:10}}> {/* 날짜 */}
                            <S.At>{postdate || 'none'}</S.At>
                        </S.WrapBasic>
                    
                    </div>

                    <hr style={{width:'100%'}}/>



                    <S.BoxRadius style={{padding:30,maxWidth:'70%',maxHeight:'60%'}}> {/* 이미지 */}
                        <S.Img src={imageurl} 
                                alt='이미지' 
                                onClick={openModalHandler}
                        />
                    </S.BoxRadius>

                    {isOpen && (
                        <ModalBackdrop style={{overflowY:'initial'}}onClick={openModalHandler}>
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




    
