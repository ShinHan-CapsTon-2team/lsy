import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 

// 이미지 퀴즈  json 파일 
import quizbody from '../Datajson/bodydata.json';
import quizpet from '../Datajson/petdata.json';
import quizwedding from '../Datajson/weddingdata.json';
import quizfamily from '../Datajson/familydata.json';

import styled from "styled-components";

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


    return (
    <OutWrap>
        {quiz && quiz.map((item) => (
            <Textselect>{item.selectCriteria}</Textselect>
        ))}
        <Ulstyle>
            
            {select && select.map((item, index) => (
            <div key={index}>
                <Textimgselect>#{item.name}</Textimgselect>
                <Img
                src={`${process.env.PUBLIC_URL}/Images/quest/${categoryName}/${item.img}`}
                alt={`Option ${item.name}`}
                onClick={() => handleAnswer(item)}
                style={{ marginRight: index === 1 ? 0 : null }}
                />
            </div>
            ))}
        </Ulstyle>
    </OutWrap>

    );
};

export default QuizTest;


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
color: #798BE6;
font-weight: bold;

${FontStyle};
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

const Textimgselect= styled.div`
color: #798BE6;
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
    border: 9px #798BE6 solid; // ?????
    border-radius: 31px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center; 
    overflow:hidden;

    width: 32vw;
    height: 77vh;
    

    
    /* tablet 규격 */
        @media screen and (max-width: 1023px){
            margin-right: 15px;
        }

        @media screen and (max-width: 900px){
            width: 43vw;
            height: 53vh;
            
        }


        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width: 65vw;
            height: 40vh;
            margin-bottom:10px;
            
            border: 4px #798BE6 solid;
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            margin-right: 50px;
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            margin-right: 80px; 
            
        }
    `;