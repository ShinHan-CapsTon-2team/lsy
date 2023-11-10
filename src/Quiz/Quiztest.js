import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 
import Header from "../Header/Header";
// 이미지 퀴즈  json 파일 
import quizbody from '../Datajson/bodydata.json';
import quizpet from '../Datajson/petdata.json';
import quizwedding from '../Datajson/weddingdata.json';
import quizfamily from '../Datajson/familydata.json';

import styled from "styled-components";
import * as S from "./QuizStyle";
const getQuizbody = () => {
    return quizbody;
};

const getQuizpet = () => {
    return quizpet;
};

const getQuizwedding = () => {
    return quizwedding;
};

const getQuizfamily = () => {
    return quizfamily;
};

const QuizTest = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const categoryName = params.get('name');

    //console.log("cate:",categoryName);

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();


    let questions = [];
    if (categoryName === 'body') {
        questions = getQuizbody();
    } else if (categoryName === 'pet') {
        questions = getQuizpet();
    }else if (categoryName === 'wedding') {
        questions = getQuizwedding();
    }else if (categoryName === 'family') {
        questions = getQuizfamily();
    }
    


    const [answers, setAnswers] = useState([]);
    const [content, setContent] = useState(null);
    const [quiz, setQuiz] = useState(null);
    const  [selects,setSelects] = useState(null);
    const  [select,setSelect] = useState(null);
    useEffect(() => {
        setAnswers(searchParams.get("res")?.split('') ?? []);

        const  selects = params.get('res');
        console.log("selects",selects);
        setSelects(selects);

        const content= questions.find((item) =>

        item.options.find((option) => option.beforeselec === selects));

        if(!content)
        {
            navigate("/quizresult?" + searchParams.toString());

        }
        const quiz = content?.options.find((option) => option.beforeselec === selects)?.quiz; // 이거다 
        console.log("quiz",quiz);

        const select = quiz && quiz[0]?.select;
        console.log("select", select);
        
        setContent(content);
        setQuiz(quiz);
        setSelect(select);
    }, [selects,searchParams, navigate]);


    const handleAnswer = (option) => {
        console.log("option.type",option.type);
        const a = [...answers, option.type];
        setAnswers(a);
        searchParams.set("res",  a.join(''));
        setSearchParams(searchParams);
    };

    const [dataFromChild, setDataFromChild] = useState({});
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
        <S.InsidWrap>
            <Header style={{flex:0}} onData={handleChildData}/>
            {quiz && quiz.map((item) => (

                <S.Textselect style={{marginTop:20}}>
                    <S.QCateText>{category}</S.QCateText>
                    <S.QText>{item.selectCriteria}</S.QText>
                </S.Textselect>
            ))}
            <S.Ulstyle>
                
                {select && select.map((item, index) => (
                <div key={index} style={{display:'flex',flexDirection:'column'}}>
                    <div style={{textAlign:'left' }}>
                        <S.Textimgselect>{item.name  || " "}</S.Textimgselect>
                    </div>
                    
                    <S.Img 
                    
                    src={`${process.env.PUBLIC_URL}/Images/quest/${categoryName}/${item.img}`}
                    alt={`Option ${item.name}`}
                    onClick={() => handleAnswer(item)}
                    style={{ marginRight: index === 1 ? 0 : null}}
                    />
                </div>
                ))}
            </S.Ulstyle>
        </S.InsidWrap>
    </S.OutWrap>

    );
};

export default QuizTest;

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
        
        fontSize: 30
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
    

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
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
            margin-top:15px;
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