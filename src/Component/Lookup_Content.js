
import  {useNavigate } from 'react-router-dom';
import profilelogo from '../Images/i2.png'
import * as S from '../Lookup/LookupStyle'
import React, { useState } from 'react';
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
                        <S.Img src={imageurl} alt='이미지' />
                    </S.BoxRadius>
                    
                    <S.BoxRadius> {/* 설명 */}
                        {DisplayText(description)}
                    </S.BoxRadius>
                </S.ContentImgDes>
                
            </S.Content>  
        </S.InLayoutOne> 

    );
}; 
export default Lookup_Content;
