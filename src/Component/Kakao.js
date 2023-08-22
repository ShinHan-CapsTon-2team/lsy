import React from 'react';
//import styled from 'styled-components';


const { Kakao } = window;

function KaKao() {

    
    const onHandleShareKaKao = () => {
        if (!Kakao.isInitialized()) {
            Kakao.init("14d73507d839c77cc5ba6721b9a54ed2");
        }
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
            title: '딸기 치즈 케익',
            description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
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
                        webUrl: 'https://developers.kakao.com',
                    },
                },
                    {
                    title: '테스트 하기',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com',
                    }
                }
            ],
        });
    };

    return (
        <button value="KaKao" onClick={onHandleShareKaKao} >
            <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png" />
        </button>
    );
}

export default KaKao;