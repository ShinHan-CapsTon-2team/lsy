
import React  from 'react';
import {  useNavigate } from 'react-router-dom';

import logo from '../Images/imagelogo.png';
import styled from "styled-components";
import homelogo from '../Images/homelogo.png'
import { ProfileIcon } from '../Modal/ProfileIcon';

// 회원 아이콘 추가,,, 누를 시 1) 로그인 한 경우는 프로필 정보 페이지 2)로그인 x 로그인 페이지로 
const Header=() => 
{
    const navigate = useNavigate();
     // page

    // landing page
    const handleGoLandingClick = () => {
        navigate('/');
        };
    
    return (

    <LogoWrap>                
        <LandingWrap> 
            <Logo src={logo} alt='' onClick={handleGoLandingClick}/>
        </LandingWrap> 
        
        
            <ProfileIcon/>
                
    </LogoWrap>

    );
};

export default Header;



const LogoWrap = styled.div`

width: 100%; 
//height: 23.2vh;
height:10%;
// text-align: center;
display: flex;
//flex-direction: row;
align-items: center;
justify-content: space-between;
//position: relative;

margin-top:20px;
/* tablet 규격 *
        @media screen and (max-width: 1024px){
            //height:20%;
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            height:17%;
        }
        /* s 데스크 */
        @media screen and (min-width: 1025px){
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            
        }
`;


const LandingWrap = styled.div`
//width:30%;
//height:85%;

/* tablet 규격 */
        @media screen and (max-width: 1023px){
            width:45%;
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width:50%;
            //height:90%
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
           // width:15%;
            //height:55%;
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            
        }

`;

const Logo = styled.img`
width: 220px; 
height: 120px;


/* tablet 규격 */
        @media screen and (max-width: 1023px){
            //width: 37vw; 
            //height: 13vh; 
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            //width: 60vw; 
            //height: 20vh; 
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            //width: 21vw; 
            //height: 19vh; 
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            width: 290px; 
            height: 170px;
        }
`;

