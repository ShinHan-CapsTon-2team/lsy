
import React  from 'react';
import {  useNavigate } from 'react-router-dom';

import logo from '../Images/imagelogo.png';
import styled from "styled-components";
import homelogo from '../Images/homelogo.png'
import profilelogo from '../Images/profileimg.png'

// 회원 아이콘 추가,,, 누를 시 1) 로그인 한 경우는 프로필 정보 페이지 2)로그인 x 로그인 페이지로 
const Header=() => 
{
    const navigate = useNavigate();
     // page

    // landing page
    const handleGoLandingClick = () => {
        navigate('/');
        };
    
    //홈페이지
    const handleGohomeClick = () => {
        navigate('/home');
    };

    //프로필 페이지 
    const handleGoProfileClick = () => {
        navigate('/profile');
    };
    return (

    <LogoWrap>                
        <LandingWrap> 
            <Logo src={logo} alt='' onClick={handleGoLandingClick}/>
        </LandingWrap> 
        
        <HomeWrap >

            
            <ProfileLogo src={profilelogo} alt='profilelogo' onClick={handleGoProfileClick}/>
            <HomeLogo src={homelogo} alt='homelogo' onClick={handleGohomeClick} />
        </HomeWrap>         
    </LogoWrap>

    );
};

export default Header;

const LogoWrap = styled.div`

width: 100%; 
//height: 23.2vh;
height:20%;
// text-align: center;
display: flex;
//flex-direction: row;
align-items: center;
justify-content: space-between;
//position: relative;

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
width:30%;
height:85%;

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
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            
        }

`;
const HomeWrap = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
  
`;

const HomeLogo =styled.img`
width:50px;
height:50px;
/* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width:35px;
            height:35px;
            
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            width:90px;
            height:90px;
        }
`;

const ProfileLogo = styled.img`
width:55px;
height:55px;
margin-right :20px;
/* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width:35px;
            height:35px;
            
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            width:90px;
            height:90px;
        }

`;
const Logo = styled.img`
width: 100%; 
height: 100%;


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
            
        }
`;

