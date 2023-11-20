import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'; 
import Header from "../Header/Header";
import first from '../Datajson/first.json'
import * as S from "./QuizStyle";
import * as C from "../Style/CommonStyle";
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
      <C.OutWrap>
        <S.InsideWrap>
            <Header style={{flex:0}} onData={handleChildData}/>
            
            <S.Textselect style={{marginTop:20}}>
              <S.QCateText>#{category}</S.QCateText>
              <S.QText>{quizOne.selectCriteria}</S.QText>
            </S.Textselect>
            <S.Ulstyle>
              {quizOne.select.map((option, index) => (
                <div key={index}>
                    <div style={{textAlign:'left'}}>
                      <S.Textimgselect>#{option.name}</S.Textimgselect>
                    </div>

                    <S.Img
                    key={index} // 이미 key를 올바르게 Img 엘리먼트 내에 추가했습니다.
                    src={`${process.env.PUBLIC_URL}/Images/quest/${categoryName}/${option.img}`}
                    alt={`Option ${option.name}`}
                    onClick={() => handleAnswer(option)}
                    style={{ marginRight: index === quizOne.select.length - 1 ? 0 : null }}
                  />
                  
                </div>
              ))}
            </S.Ulstyle>
        </S.InsideWrap>
      </C.OutWrap>
    );
    

}
export default Quizfrist;

