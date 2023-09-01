import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 

// 이미지 퀴즈  json 파일 
import quizbody from '../Datajson/bodydata.json';
import quizpet from '../Datajson/petdata.json';
import quizwedding from '../Datajson/weddingdata.json';
import quizfamily from '../Datajson/familydata.json';
import quizprofile from '../Datajson/profiledata.json';

import styled from "styled-components";

import ProgressBar from './ProgressBar';

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
const getQuizprofile = () => {
    return quizprofile;
};

const QuizTest = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const categoryName = params.get('name');

    console.log("cate:",categoryName);
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
    }else if (categoryName === 'profile') {
        questions = getQuizprofile();
    }
    
    const [answers, setAnswers] = useState([]);
    const [num, setNum] = useState(searchParams.get("res")?.length ?? 0);



    useEffect(() => {
        const len = searchParams.get("res")?.length ?? 0;
        setAnswers(searchParams.get("res")?.split('') ?? []);

        if (len >= 4) {
            navigate("/quizresult?" + searchParams.toString());
        }

    }, [searchParams, navigate]);

    const handleAnswer = (option) => {
        const a = [...answers, option.type];
        setAnswers(a);
        searchParams.set("res", a.join(''));
        setSearchParams(searchParams);
        setNum(a.length);
    };

    if (questions.length === 0) {
        return <div>선택한 카테고리에 대한 질문이 없습니다.</div>;
        }
        
    if (num >= questions.length) {
        return <div>모든 질문에 답변하셨습니다.</div>;
        }
        
    return (
        <OutWrap>
            
                    <div>
                        <ProgressBar total={questions.length} current={num + 1} />
                    </div>
                    
                    
                
                    <Ulstyle> 
                    
                    {questions[num].options.map((option, index) => (
                        

                        
                            <Img
                                key={index}
                                src={`${process.env.PUBLIC_URL}/Images/quest/${categoryName}/${option.img}`}
                                alt={`Option ${index + 1}`}
                                onClick={() => handleAnswer(option)}
                                style={{ marginRight: index === 1 ? 0 : null }}
                            />
                        
                        
                    ))}
                    </Ulstyle>
            
        </OutWrap>
    );
};

export default QuizTest;


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
    //width:50%;
    //height:75%;
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
    border: 9px #798BE6 solid;
    border-radius: 31px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center; 
    overflow:hidden;

    width: 32vw;
    height: 77vh;
    

    
    /* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }

        @media screen and (max-width: 900px){
            width: 43vw;
            height: 53vh;
            margin-right: 15px;
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