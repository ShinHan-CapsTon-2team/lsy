import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'; 
import Header from '../Component/Header';
import first from '../Datajson/first.json'

const Quizfrist = () => {
    const navigate = useNavigate();
    const [dataFromChild, setDataFromChild] = useState({});
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const categoryName = params.get('name');
    console.log("categoryName",categoryName);

    const handleAnswer = (option) => {

        navigate( `/quiztest?name=${categoryName}&res=${option.type}`);
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

    const cateData = first.find(item => item.questions === categoryName);

    const quizOne = cateData.options[0];
    

    return (
      <OutWrap>
        <InsidWrap>
            <Header style={{flex:0}} onData={handleChildData}/>
            
            <Textselect style={{marginTop:20}}>
              <QCateText>#{category}</QCateText>
              <QText>{quizOne.selectCriteria}</QText>
            </Textselect>
            <Ulstyle>
              {quizOne.select.map((option, index) => (
                <div key={index}>
                    <div style={{textAlign:'left'}}>
                      <Textimgselect>#{option.name}</Textimgselect>
                    </div>

                    <Img
                    key={index} // 이미 key를 올바르게 Img 엘리먼트 내에 추가했습니다.
                    src={`${process.env.PUBLIC_URL}/Images/quest/${categoryName}/${option.img}`}
                    alt={`Option ${option.name}`}
                    onClick={() => handleAnswer(option)}
                    style={{ marginRight: index === quizOne.select.length - 1 ? 0 : null }}
                  />
                  
                </div>
              ))}
            </Ulstyle>
        </InsidWrap>
      </OutWrap>
    );
    

}
export default Quizfrist;

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
  
  fontSize: 40
  }
  };

const Textselect= styled.div`
text-align: center;
display: flex;
flex-direction: row;
align-items: center;
@media screen and (max-width: 640px){
flex-direction: column;
}
`;

const QText = styled.span`
color: black;
font-weight: bold;

${FontStyle};
`;

const QCateText = styled.span
`font-weight: bold;

${FontStyle};
color: #798BE6;
margin-right:10px;
@media screen and (max-width: 640px){
  margin-right:0px;
  margin-bottom:10px;
  }
`;

const FontsmallStyle = {
  '@media screen and (max-width: 1024px)':{
  
  fontSize: 25
  },
  /* mobile 규격 */
  '@media screen and (max-width: 540px)':{
  
  fontSize: 20
  },
  /* tablet 규격 */
  '@media screen and (min-width: 1025px)':{
  
  fontSize: 25
  },
  '@media screen and (min-width: 1700px)': {
  
  fontSize: 35
  }
  };


const Textimgselect= styled.span`
color: black;
font-weight: bold;
margin-bottom:5px;
${FontsmallStyle};
`;

const OutWrap = styled.div`
    width: 100%;
    height: 97.6vh;
    position: relative;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;   
    
  /*
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    */
    flex-direction: column;

    /* mobile 규격 */
        @media screen and (max-width: 840px){
           
            height: calc(var(--vh, 1vh) * 100);
        }

    
`;

    
   

    const Ulstyle = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:40px;
    
        @media screen and (max-width: 650px){
            flex-direction:column;
            margin-top:20px;
        }
        
        /* mobile 규격 */
        @media screen and (max-width: 540px){
            margin-top:30px;
        }
    `;

    
    

    const Img= styled.img`
    border: 5px #798BE6 solid;
    border-radius: 31px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center; 
    overflow:hidden;

    width: 43vw;
    height: 62vh;
    //width: 32vw;
    //height: 77vh;
    
    &:hover {
      border: 5px #4E62C5 solid;
  }
  
    margin-right: 15px;
    
    @media screen and (max-width: 1300px)
    {
      width: 34vw;
      margin-right: 25px;
    }
    /* tablet 규격 */
        @media screen and (max-width: 1023px){
          width: 43vw;
          height: 62vh;
          margin-right: 15px;
      }

      @media screen and (max-width: 900px){
          width: 43vw;
          height: 53vh;
          
      }


      /* mobile 규격 */
      @media screen and (max-width: 650px){
          width: 75vw;
          height: 59vh;
          //height: 40vh;
          margin-bottom:20px;
          margin-right: 0px;
          border: 4px #798BE6 solid;
          &:hover {
            border: 4px #4E62C5 solid;
          }
      }
        @media screen and (max-width: 540px){
          width: 75vw;
          height: 55vh;
          
        }
        /* s 데스크 */
        @media screen and (min-width: 1301px){
          width: 32vw;
          height: 61vh;
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            margin-right: 80px; 
            border: 8px #798BE6 solid;
            &:hover {
                border: 8px #4E62C5 solid;
            }
        }
    `;