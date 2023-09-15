import { useLocation,useNavigate } from 'react-router-dom';
import React,{useState} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AllDataResult from "../Datajson/AllDataResult.json"
import btn_link from '../Images/btn_link.svg'
import { Popup } from '../Modal/Popup';
import KakaoShareBtn from '../Component/Kakao';
import * as S from '../Recommend/ImgResultStyle';

const Quizresult  = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    console.log("location",location);

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
        navigate('/home');
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
    }, 1000); // 2초 후에 '복사되었습니다' 메시지가 사라지도록 설정

      // 복사 후 추가적인 작업을 수행하고 싶다면 여기에 코드를 추가할 수 있습니다.
    };
    

    return (
        <S.OutWrap>
            <S.InsideWrap>
                <S.TextWrap>
                    <S.Text1> 추천 결과</S.Text1>
                    <S.Text2> 선택한 사진과 비슷한 스타일의 다른 사진을 확인하세요</S.Text2>
                    <S.Text2> 사진을 클릭하면 자세한 정보를 확인할 수 있습니다</S.Text2>
                </S.TextWrap>
                
                
                <S.Content>
                    <S.Direction>
                        {typeData.answer && typeData.answer.slice(0, 2).map((answer, index) => (
                        <S.Img 
                            key={index}
                            src={`${process.env.PUBLIC_URL}/Images/questresult/${categoryName}/${answer.img}`}
                            alt={`Image ${index + 1}`}
                            onClick={() => handleImageClick(answer.id)}
                            isnotlast={index !== 1}
                        />
                        ))}
                    </S.Direction>
                    <S.Direction>
                        {typeData.answer && typeData.answer.slice(2, 4).map((answer, index) => (
                        <S.Img 
                            key={index + 2}
                            src={`${process.env.PUBLIC_URL}/Images/questresult/${categoryName}/${answer.img}`}
                            alt={`Image ${index + 3}`}
                            onClick={() => handleImageClick(answer.id)}
                            isnotlast={index !== 1}
                        />
                        ))}
                    </S.Direction>
                </S.Content>           
                

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
                        홈페이지 방문하기 
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