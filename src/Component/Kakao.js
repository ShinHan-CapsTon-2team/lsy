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
    
    const imageUrl = `${process.env.PUBLIC_URL}/Images/kakaoshareImg.jpg`;
    console.log(imageUrl);
    const onHandleShareKaKao = () => {
        
        if (!Kakao.isInitialized()) {
            Kakao.init("14d73507d839c77cc5ba6721b9a54ed2");
        }
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
            title: '선호하는 사진 스타일을 확인해보세요!',
            description: ' 테스트를 통해 선호하는 분위기를 확인하고 비슷한 스타일의 멋진 사진들을 만나보세요. ',
            imageUrl:imageUrl,
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