import styled from "styled-components";
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 

import first from '../Datajson/first.json'
const Quizfrist = () => {
    const navigate = useNavigate();
    
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const categoryName = params.get('name');
    console.log("categoryName",categoryName);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleAnswer = (option) => {

        navigate( `/quiztest?name=${categoryName}&res=${option.type}`);
    };

    
    const cateData = first.find(item => item.questions === categoryName);

    const quizOne = cateData.options[0];
    

    return (
      <OutWrap>
        <Textselect>{quizOne.selectCriteria}</Textselect>
        <Ulstyle>
          {quizOne.select.map((option, index) => (
            <div key={index}>
              <Textimgselect>#{option.name}</Textimgselect>
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
      </OutWrap>
    );
    

}
export default Quizfrist;

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