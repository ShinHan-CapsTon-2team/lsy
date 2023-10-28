import styled from 'styled-components';
import naverlogin from '../Images/naverlogin.png'
import * as S from './ModalStyle'
import React, { useState } from 'react';
import naverloginHover from '../Images/naverloinghover.png';

export const LoginModal = () => {


    

  // 네이버 로그인 처리하기 
  const onNaverLogin = async () => {
    try {
        const response = await fetch('http://localhost:4001/api/naver-login', {
        method: 'POST', 
        });
        const data = await response.json();
        console.log(data); // 네이버 로그인 페이지로 리다이렉트.
        // 네이버 로그인 페이지로 리다이렉트
        window.location.href = data.naverLoginUrl;
    } catch (error) {
        console.error('Error during Naver login:', error);
    }
    };


return (
    <S.ModalView onClick={(e) => e.stopPropagation()}>
        <S.TextWrap>
            <S.Text1>로그인 또는 회원가입 해주세요</S.Text1>
            <S.BtnLoginWrap> 
                <S.BtnNaver src={naverlogin}  onClick={onNaverLogin} alt=''
                ></S.BtnNaver>
            </S.BtnLoginWrap>
        </S.TextWrap>

    </S.ModalView>
    );
};