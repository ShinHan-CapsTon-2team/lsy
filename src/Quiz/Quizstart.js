 //import React, { useState } from 'react';
import text from '../Images/image 21.png'

import styled from "styled-components";

import { useNavigate } from 'react-router-dom';

const Quizstart = () => {
    const navigate = useNavigate();

    const handleCategorySelect = (category) => {
        const queryString = new URLSearchParams({ name: category }).toString();
        navigate(`/quiztest?${queryString}`);
    };

    const OutWrap = styled.div`
    width: 100%;
    height: 100%;

    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    `;


    const InsidWrap = styled.div`
    width: 49%;
    height: 75%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        /* tablet 규격 */
        @media screen and (max-width: 1023px){
            width: 70%;
            height: 75%;
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width: 95%;
            height: 80%;
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            
        }
    `;
    const TextWrap = styled.div`
    width: 100%;
    height: 20%;
    display:flex;
    align-items:flex-start;
    
    `;
    const Text = styled.img`
    width: 100%;
    height: 80%;

        /* tablet 규격 */
            @media screen and (max-width: 1023px){
                
            }

            /* mobile 규격 */
            @media screen and (max-width: 540px){
                //width: 88vw;
                //height: 80px; 
            }
            /* s 데스크 */
            @media screen and (min-width: 1024px){
                //width: 48vw;
                //height: 80px; 
            }
            /* l 데스크 */
            @media screen and (min-width: 1700px){
                //width: 50vw;
                //height: 100px; 
            }
    `;

    const ImgWrap = styled.div`
    width:80%;
    height:80%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    //justify-content: center;  
    `;



    const Radius = styled.button`
    //border: 3px #3A76EF solid;
    padding: 20px;
    word-wrap: break-word;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    //margin-top: 20px;
    border:none;
    `;
    
    const ButtonWrap =styled.div`
    width:100%;
    height:20%;
    //margin-top:20px;`;
    const ButtonTwo = styled(Radius)`
        background: #798BE6;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
        color: white;
        font-weight: 500;

        width: 100%;
        height: 80%;; 
        //margin-top: 20px;
        font-size: 40px;
        
        margin-bottom:5px;
        /* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            //width: 80vw;
            //height: 9vh;; 
            font-size: 30px;
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
           // width: 35vw;
            //height: 9vh;; 
            font-size: 40px;
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            //width: 40vw;
            //height: 9vh;; 
            font-size: 48px;
            
        }
        
        

        

        
    `;



    return (
        <OutWrap>
            <InsidWrap>
                <TextWrap>
                    <Text src={text} alt='' />
                </TextWrap>
                
                
                
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
                        <ButtonTwo  onClick={() => handleCategorySelect('profile')} >
                            증명사진
                        </ButtonTwo>
                    </ButtonWrap>

                    <ButtonWrap>
                        <ButtonTwo onClick={() => handleCategorySelect('family')}>
                            가족사진
                        </ButtonTwo>
                    </ButtonWrap>

                </ImgWrap>
            </InsidWrap>
        </OutWrap>
    );
};

export default Quizstart;

