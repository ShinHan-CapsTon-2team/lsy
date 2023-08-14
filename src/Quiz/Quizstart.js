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
    height: 97.6vh;

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
        
    `;

    const Text = styled.img`


        /* tablet 규격 */
            @media screen and (max-width: 1023px){
                
            }

            /* mobile 규격 */
            @media screen and (max-width: 540px){
                width: 88vw;
                height: 80px; 
            }
            /* s 데스크 */
            @media screen and (min-width: 1024px){
                width: 48vw;
                height: 80px; 
            }
            /* l 데스크 */
            @media screen and (min-width: 1700px){
                width: 50vw;
                height: 100px; 
            }
    `;

    const ImgWrap = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:20px;
    //justify-content: center;  
    `;



    const Radius = styled.button`
    //border: 3px #3A76EF solid;
    padding: 20px;
    word-wrap: break-word;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    margin-top: 20px;
    border:none;
    `;

    const ButtonTwo = styled(Radius)`
        background: #798BE6;
        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;
        cursor: pointer;

        color: white;
        font-weight: 500;

        width: 35vw;
        height: 9vh;; 
        font-size: 40px;
        
        margin-bottom:5px;
        /* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width: 80vw;
            height: 9vh;; 
            font-size: 30px;
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            width: 35vw;
            height: 9vh;; 
            font-size: 40px;
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            width: 40vw;
            height: 9vh;; 
            font-size: 48px;
            
        }
        
        

        

        
    `;



    return (
        <OutWrap>
            <InsidWrap style={{width:'100%',}}>
                <div>
                    <Text src={text} alt='' />
                </div>
                
                
                
                <ImgWrap>
                    <div >
                        <ButtonTwo onClick={() => handleCategorySelect('body')}>
                        바디프로필
                        </ButtonTwo>
                    </div>

                    <div>
                        <ButtonTwo onClick={() => handleCategorySelect('pet')}>
                            
                                반려동물
                            
                        </ButtonTwo>
                    </div>

                    <div>
                        <ButtonTwo onClick={() => handleCategorySelect('wedding')}>
                            웨딩사진
                        </ButtonTwo>
                    </div>

                    <div>
                        <ButtonTwo  onClick={() => handleCategorySelect('profile')} >
                            증명사진
                        </ButtonTwo>
                    </div>

                    <div>
                        <ButtonTwo onClick={() => handleCategorySelect('family')}>
                            가족사진
                        </ButtonTwo>
                    </div>

                </ImgWrap>
            </InsidWrap>
        </OutWrap>
    );
};

export default Quizstart;

