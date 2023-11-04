import styled from "styled-components";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { InfoModal } from '../Modal/InfoModa';
import Header from '../Component/Header';


const Quizstart = () => {
    const [dataFromChild, setDataFromChild] = useState({});
    const navigate = useNavigate();

    const handleCategorySelect = (category) => {
        const queryString = new URLSearchParams({ name: category }).toString();
        navigate(`/quizfrist?${queryString}`);
    };
    const [isOpenInfoTest, setIsOpenInfoTest] = useState(false);  // 테스트 툴팁 모달창 
    const showInfoTest = () => {
        setIsOpenInfoTest(!isOpenInfoTest) 
    };
    const handleChildData = (data) => {
        // 자식 컴포넌트로부터 받은 데이터를 처리
        setDataFromChild(data);
    };
    
    return (
        <OutWrap>
            <InsidWrap>
                <Header style={{flex:0}} onData={handleChildData}/>
            
                <InsideContentWrap style={{flex:1}}>
                    <TextWrap>
                        <Textselect>
                            관심있는 분야 선택하기
                            <InfoButton >
                            <TooImg  onClick={(e) => {
                                e.stopPropagation(); // 이벤트 전파 중단
                                showInfoTest();}}/>
                            </InfoButton>
                            
                        </Textselect>
                    </TextWrap>

                    {isOpenInfoTest ?
                                
                    <ModalBackdrop onClick={showInfoTest}>
                        <InfoModal text="test" showInfo= {showInfoTest}/>
                    </ModalBackdrop>
                    : null}

                    <ImgWrap>
                        <ButtonWrap >
                            <ButtonTwo onClick={() => handleCategorySelect('body')}>
                                바디프로필
                            </ButtonTwo>
                        </ButtonWrap>

                        <ButtonWrap>
                            <ButtonTwo onClick={() => handleCategorySelect('pet')}>
                                반려동물                         
                            </ButtonTwo>
                        </ButtonWrap>

                        <ButtonWrap>
                            <ButtonTwo onClick={() => handleCategorySelect('wedding')}>
                                웨딩사진
                            </ButtonTwo>
                        </ButtonWrap>

                    

                        <ButtonWrap>
                            <ButtonTwo onClick={() => handleCategorySelect('family')}>
                                가족사진
                            </ButtonTwo>
                        </ButtonWrap>

                    </ImgWrap>
                </InsideContentWrap>
            </InsidWrap>
        </OutWrap>
    );
};

export default Quizstart;
const FontMenuStyle = {
    '@media screen and (max-width: 1024px)':{
    
    fontSize: 30
    },
    /* mobile 규격 */
    '@media screen and (max-width: 540px)':{
    
    fontSize: 25
    },
    /* tablet 규격 */
    '@media screen and (min-width: 1025px)':{
    
    fontSize: 30
    },
    '@media screen and (min-width: 1700px)': {
    
    fontSize: 37
    }
    };
export const ModalBackdrop = styled.div`
// Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
width:100vw;
height:100%;

z-index: 1; //위치지정 요소
position: fixed;
display : flex;
justify-content : center;
align-items : center;
background-color: rgba(0,0,0,0.1);
top : 0;
left : 0;
right : 0;
bottom : 0;

`;

const InfoButton = styled.div`

    display: flex;
    align-items: center;
    position: absolute;
    right: 65px;
    background-color: transparent;

    @media screen and (min-width: 891px)
    {
    display:none;
    right: 40px;
    }
    @media screen and (max-width: 840px){
    right: 20px;
    
    }
    @media screen and (max-width: 540px){
        right: 10px;
        
    }
    @media screen and (max-width: 440px){
        right: 5px;
        
        }
`;
const TooImg = styled(AiFillQuestionCircle)`

  width: 50px;
  height: 50px;
  cursor:pointer;
  opacity:1;
  
@media screen and (max-width: 1024px){
           
}

@media screen and (max-width: 850px){
  width:40px;
  height: 40px;
}
/* mobile 규격 */
@media screen and (max-width: 600px){
    width:35px;
    height: 35px;
}

/* s 데스크 */
@media screen and (min-width: 1025px){ 

  
}
/* l 데스크 */
@media screen and (min-width: 1700px){
    width: 55px;
    height: 55px;  
}
  `;

const OutWrap = styled.div`
    width: 100%;
    height: 90vh;
    
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    `;


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
    const InsideContentWrap = styled.div`
    position:relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 75%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    `;

    const TextWrap = styled.div`
    width: 65%;
    height: 23%;
    display:flex;
    align-items:flex-start;

    @media screen and (max-width: 1120px){

        width: 76%;    
    }
    /* tablet 규격 */
    @media screen and (max-width: 1023px){
        width: 80%;
        
    }
    @media screen and (max-width: 840px){
        width: 90%;
    }

    /* mobile 규격 */
    @media screen and (max-width: 540px){
        width: 95%;
       
    }
    @media screen and (max-width: 440px){
        width: 100%;
        }
    `;
    

    const ImgWrap = styled.div`
    //width:80%;
    height:80%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center; 

    width: 49%;
    @media screen and (max-width: 1120px){
        width: 60%;
        height: 75%;
    
    }
    /* tablet 규격 */
    @media screen and (max-width: 1023px){
        width: 70%;
        height: 75%;
    }
    @media screen and (max-width: 840px){
        width: 80%;
        height: 75%;
    }

    /* mobile 규격 */
    @media screen and (max-width: 540px){
        width: 95%;
        height: 80%;
    }
    `;

    const Radius = styled.button`
    padding: 20px;
    word-wrap: break-word;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: white;
    background: #798BE6;
    border-radius: 20px;
    `;
    
    const ButtonWrap =styled.div`
    width:100%;
    height:23%;
    `;
    //다른 FontStyle
    const FontStyle = {
    '@media screen and (max-width: 1024px)':{
    
    fontSize: 30
    },
    /* mobile 규격 */
    '@media screen and (max-width: 540px)':{
    
    fontSize: 25
    },
    /* tablet 규격 */
    '@media screen and (min-width: 1025px)':{
    
    fontSize: 30
    },
    '@media screen and (min-width: 1700px)': {
    
    fontSize: 33
    }
    };

    const Textselect= styled(Radius)`
    color: #798BE6;
    font-weight: bold;
    background:white;
    width: 100%;
    height:80%;
    border: 3px #798BE6 solid;
    ${FontMenuStyle};
    cursor:default;
    &:hover{
        background:white;
    }
    `;

    const ButtonTwo = styled(Radius)`
    width: 100%;
    height: 80%;; 
   
    margin-bottom:5px;
    ${FontStyle};
    `;