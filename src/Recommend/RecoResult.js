import { React,useEffect,useState } from 'react';
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { Popup } from "../Modal/Popup";
import * as S from './ImgResultStyle'
import Header from "../Header/Header";

const RecoResult = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const topSimilarImages = location.state?.topSimilarImages || [];
    const [showErrorMessage, setShowErrorMessage] = useState(false); // 게시글 조회 실패 
    const [dataFromChild, setDataFromChild] = useState({});
    const handleChildData = (data) => {
        // 자식 컴포넌트로부터 받은 데이터를 처리
        setDataFromChild(data);
    };
    useEffect(() => {
        console.log('topSimilarImages:', topSimilarImages);
      }, [topSimilarImages]); // Add topSimilarImages as a dependency to trigger the log when it changes
    
    const navigate = useNavigate();

    const handleGoHomeClick = () => {
        navigate('/');
    };

    const handleGoUploadClick = () => {
        navigate('/reco');
    };
    
    const handleImageClick = (imagePath) => {
        // 이미지 상대 경로를 서버로 보내고 해당 게시물로 이동하는 로직을 구현
        fetch('http://localhost:4000/api/lookupByImage', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageUrl: imagePath }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            if (data.id !== undefined) {
                console.log("받은 아이디:", data.id);
                navigate(`/lookup/${data.id}`);
            } 
        })
        .catch((error) => {
            console.error('게시물 조회 중 오류:', error);

            // 실패 메시지를 보여줍니다.
            setShowErrorMessage(true);

            // 2초 후에 실패 메시지를 숨깁니다.
            setTimeout(() => {
                setShowErrorMessage(false);
            }, 2000);
        });

    }

    return (
        
            <OutWrap> 
                <S.InsideWrap>
                    <InsidWrap>
                        <Header style={{flex:0}} onData={handleChildData}/>
                    </InsidWrap>

                    <S.TextWrap>
                        <S.Text1> 추천 결과</S.Text1>
                        <S.Text2> 해당 사진과 유사한 색감의 다른 사진을 확인하세요</S.Text2>
                        <S.Text2> 사진을 클릭하면 자세하게 확인할 수 있습니다</S.Text2>
                    </S.TextWrap>

                        
                    
                    <Content >
                        {/* 0916 수정 */}
                    {topSimilarImages.map((image, index) => (
                        
                        <Img 
                        src={image.imagePath} 
                        alt={`Similar Image ${index}`}
                        key={index} onClick={() => handleImageClick(image.imagePath)} 
                        index={index} />
                        
                    ))}
                    </Content>
                    {/* 실패 메시지를 보여주는 부분 */}
                    {showErrorMessage && (
                        <Popup text="해당 게시물 조회를 실패했습니다." />
                    )}
                    
                    <S.ButtonsWrap>
                        <S.ButtonTwo onClick={handleGoHomeClick}>메인화면으로 가기</S.ButtonTwo>
                        <S.ButtonTwo style={{ marginRight: 0 }} onClick={handleGoUploadClick}>다시 매칭해보기</S.ButtonTwo>
                    </S.ButtonsWrap>
                </S.InsideWrap>
                
            </OutWrap>
            
    );

    };

    export default RecoResult;
const InsidWrap = styled.div`
    text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height:100%;

  /* tablet 규격 */
  @media screen and (max-width: 1024px) {
    width: 87%;
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    width: 95%;
  }
  /* s 데스크 */
  @media screen and (min-width: 1025px) {
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    width: 75%;
  }
    `;
    const OutWrap = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* mobile 규격 */
    @media screen and (max-width: 840px) {
        height: calc(var(--vh, 1vh) * 100);
    }
    `;

    

    const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    //flex-wrap: wrap;

    @media screen and (max-width: 600px){
        flex-direction: column;
    }
    `;


    const Img= styled.img`
border: 5px #798BE6 solid;
border-radius: 31px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
display: flex;
align-items: center; 
overflow:hidden;
cursor:pointer;
margin-right: ${({ index }) => (index === 2? '0px' : '20px')};
width:100%;
object-fit:cover;
margin-bottom:20px;

&:hover {
    border: 5px #4E62C5 solid;
}


/* tablet 규격 */
@media screen and (max-width: 1024px){
    max-width: 33vw;
    height: 49vh;
    
    margin-right: ${({ index }) => (index === 3|| index === 2 ? '0px' : '20px')};
    border: 4px #798BE6 solid;
}
@media screen and (max-width: 840px){
    max-width: 40vw;
    height: 45vh;
    margin-right: ${({ index }) => (index === 3 || index === 2 ? '0px' : '20px')};
}
/* mobile 규격 */
@media screen and (max-width: 540px){
    max-width: 83vw;
    height: 58vh;
    
    border: 4px #798BE6 solid;
    
    margin-right: 0px;
}
/* s 데스크 */
@media screen and (min-width: 1025px){
    max-width: 24vw;
    height: 63vh;
}
/* l 데스크 */
@media screen and (min-width: 1700px){
    max-width: 23vw;
    height: 54vh;
    
    border: 6px #798BE6 solid;
    &:hover {
        border: 6px #4E62C5 solid;
        }
    }

`;
    


