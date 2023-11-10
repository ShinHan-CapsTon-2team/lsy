

import * as S from './ProfileInfoStyle'
import naveraddress from '../Images/naverIcon.png'
import instaaddress from '../Images/instaIcon.png'
import React,{useState} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Popup } from '../Modal/Popup';
const ProfileInfo = ({introduction, career, email, nickname,insta}) => {

    const [copied, setCopied] = useState(false);
    const goToInsta =()=>{
        const instagramUrl = `https://www.instagram.com/${insta}`;
        window.open(instagramUrl, '_blank');
    };

    const copyNavermail =()=>{
        setCopied(true);
    
        setTimeout(() => {
            setCopied(false);
        }, 2000); // 2초 후에 '복사되었습니다' 메시지가 사라지도록 설정
    
    };

    function DisplayText(text) { // 설명에서 \n 처리
    if (!text) {
        return null; // text가 없는 경우에 대한 처리
    }

    const lines = text.split('\n');
    return lines.map((line, index) => (
        <S.Font style={{textAlign:'left'}} key={index}>
            {line}
            {index !== lines.length - 1 && <br />}
        </S.Font>
        ));
    } 

  
    return(
        <>
                <S.One> {/* 이름 이메일  */}
                   
                        <S.Wrap style={{marginBottom:40}}>
                            <S.NickName>{nickname || '이름없음'}</S.NickName>
                        </S.Wrap>
                        
                        <S.AddressWrap>
                            <CopyToClipboard text={email} onCopy={copyNavermail}>
                                <S.Address style={{marginBottom:15}} >
                                    
                                        <S.AddressImg src={naveraddress} ></S.AddressImg>
                                        <S.AddressSpan>{email ||'stapq@naver.com '}</S.AddressSpan>
                                        
                                </S.Address>
                            </CopyToClipboard> 
                            {copied && <Popup text="메일 주소가 복사가 완료되었습니다."/>}
                            
                            <S.Address onClick={goToInsta}>
                                <S.AddressImg src={instaaddress} ></S.AddressImg>
                                <S.AddressSpan>{insta ||' yeon125'}</S.AddressSpan>
                            </S.Address> {/* 링크 복사하게끔  */}
                        </S.AddressWrap>
                   
                </S.One>
                
                <S.Two>   {/* 소개 커리어  */}

                    <S.InfoWrap >
                        <S.Left >
                            <S.Whatgray> 소개</S.Whatgray>
                        </S.Left>
                        <S.Left style={{marginTop:10,flexDirection:'column'}}>
                        { DisplayText(introduction) }
                        </S.Left>
                    </S.InfoWrap>
                
                    <S.InfoWrap>
                    
                        <S.Left >
                                <S.Whatgray> 커리어</S.Whatgray>
                        </S.Left>
                        <S.Left style={{marginTop:10,flexDirection:'column'}}>
                            { DisplayText(career)} 
                        </S.Left>
                    </S.InfoWrap>
                </S.Two>
        
        </>   
    );
};
export default ProfileInfo;