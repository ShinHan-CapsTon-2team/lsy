import React from 'react';
import { styled } from 'styled-components';

import kakaimg from '../Images/btn_kakao.svg'

const { Kakao } = window;

function KaKao({_resulttype}) {
    const Button = styled.button`
    cursor: pointer;
  outline: none;
  background: none;
  border: none;
    `;
    const Img =styled.img`
    width:60px;
    height:60px;

    
	/* tablet 규격 */
    @media screen and (max-width: 1023px){
        
    }

    /* mobile 규격 */
    @media screen and (max-width: 540px){
        width:50px;
        height:50px;
    }
    /* s 데스크 */
    @media screen and (min-width: 1024px){
        
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){
        width:70px;
        height:70px;
    }
    `;
    
    const onHandleShareKaKao = () => {
        
        if (!Kakao.isInitialized()) {
            Kakao.init("14d73507d839c77cc5ba6721b9a54ed2");
        }
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
            title: '딸기 치즈 케익',
            description: '사진 추천 ',
            imageUrl:
                'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
            link: {
                // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com',
                },
            },
            buttons: [
                {
                    title: '결과 보기',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://localhost:3000/quizresult'+_resulttype
                    },
                },
                    {
                    title: '테스트 하기',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://localhost:3000/quizindex',
                    }
                }
            ],
        });
    };

    return (
        <Button value="KaKao" onClick={onHandleShareKaKao} >
            <Img src={kakaimg} />
        </Button>
    );
}

export default KaKao;