import { useLocation,useNavigate } from 'react-router-dom';
import React,{useState} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AllDataResult from "../Datajson/AllDataResult.json"
import btn_link from '../Images/btn_link.svg'
import { Popup } from '../Modal/Popup';
import KakaoShareBtn from '../Component/Kakao';
import Header from '../Component/Header';
import * as S from '../Recommend/ImgResultStyle';

import styled from "styled-components";
const Quizresult  = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    console.log("location",location);
    const [dataFromChild, setDataFromChild] = useState({});

    //링크 복사 
    const [copied, setCopied] = useState(false);
    const currentUrl = window.location.href;
    
    const categoryName = params.get('name');
    const res = params.get('res');
    //확인해보기 
    console.log('categoryName :',categoryName);
    console.log('res: ',res);

    // 링크 
    const type= '?name='+categoryName+'&res='+res;
    console.log('type:',type);
    //페이지 이동 
    const navigate = useNavigate();

        // 홈페이지 이동 수정 
    const handleGoHomeClick = () => {
        navigate('/');
    };

        // 다시 테스트 
    const handleRetestdClick = () => {
        navigate('/quizindex');
    };
        // 이미지 클릭하면 해당 이미지의 lookup 페이지 이동 
    const handleImageClick = (id) => {
        navigate(`/lookup/${id}`);
    };

    //데이터 가져오기 
        //카테고리 
    const categoryData = AllDataResult.find((data) => data.categoryName === categoryName);
    

        // categoryName에 해당하는 결과 데이터 중에서 res에 해당하는 데이터 찾기
    const typeData = categoryData.results.find((data) => data.type === res);

        // img 파일이름 확인
    const imgPaths = typeData?.answer.map(answer => answer.img);

    console.log("imgPaths:",imgPaths)
    
        // img id 확인
    const imgIds = typeData?.answer.map(answer => answer.id);

    console.log("imgIds:",imgIds)

    const handleCopy = () => {
    setCopied(true);
    
    setTimeout(() => {
        setCopied(false);
    }, 2000); // 2초 후에 '복사되었습니다' 메시지가 사라지도록 설정

      // 복사 후 추가적인 작업을 수행하고 싶다면 여기에 코드를 추가할 수 있습니다.
    };
    const handleChildData = (data) => {
        // 자식 컴포넌트로부터 받은 데이터를 처리
        setDataFromChild(data);
    };
    const categoryMapping = {
        pet: "반려동물",
        wedding: "웨딩사진",
        body: "바디프로필",
        family: "가족사진",
    };
    const category = categoryMapping[categoryName] || "기타"; // 기본값은 "기타"로 설정
    

    return (
        <S.OutWrap>
            <S.InsideWrap>
                <InsidWrap>
                    <Header style={{flex:0}} onData={handleChildData}/>
                </InsidWrap>
                <S.TextWrap>
                    <S.Text1> <S.Text1 style={{color:'#5d6bb4'}}>{category}</S.Text1> 추천 결과</S.Text1>
                    <S.Text2> 선택한 사진과 비슷한 스타일의 다른 사진을 확인하세요</S.Text2>
                    <S.Text2> 사진을 클릭하면 자세한 정보를 확인할 수 있습니다</S.Text2>
                </S.TextWrap>
                
                
                <Content>
                    
                        {typeData.answer && typeData.answer.map((answer, index) => (
                        <Img 
                            key={index}
                            src={`${process.env.PUBLIC_URL}/Images/questresult/${categoryName}/${answer.img}`}
                            alt={`Image ${index + 1}`}
                            onClick={() => handleImageClick(answer.id)}
                            index={index}
                        />
                        ))}
                    
                </Content>           
                

                <S.Sharewrap>
                    <S.ShareText> 결과 공유하기</S.ShareText>
                    <S.ShareButtonWrap>
                        <CopyToClipboard text={currentUrl} onCopy={handleCopy}>
                            <S.BtnLink src = {btn_link}></S.BtnLink>
                        </CopyToClipboard>
                        {copied && <Popup text="링크 복사가 완료되었습니다."/>}
                        
                    
                        <KakaoShareBtn _resulttype={type}/>
                    </S.ShareButtonWrap>
                </S.Sharewrap>
                


                <S.ButtonsWrap> 
                    <S.ButtonTwo onClick={handleGoHomeClick}>                                        
                        메인화면 가기
                    </S.ButtonTwo>

                    <S.ButtonTwo style={{marginRight:0}} onClick={handleRetestdClick}>                         
                        테스트 다시하기  
                    </S.ButtonTwo>

                </S.ButtonsWrap>
                    
            </S.InsideWrap>   
        </S.OutWrap>
    );
};

export default Quizresult;


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
    
    margin-right: ${({ index }) => (index === 1 || index === 2 ? '0px' : '20px')};
    border: 4px #798BE6 solid;
}
@media screen and (max-width: 840px){
    max-width: 40vw;
    height: 45vh;
    margin-right: ${({ index }) => (index === 1 || index === 2 ? '0px' : '20px')};
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
    max-width: 26vw;
    height: 65vh;
    
    border: 8px #798BE6 solid;
    &:hover {
        border: 8px #4E62C5 solid;
        }
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