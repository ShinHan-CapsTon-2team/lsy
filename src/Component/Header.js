
import React  from 'react';
import {  useNavigate } from 'react-router-dom';

import logo from '../Images/imagelogo.png';
import styled from "styled-components";
import homelogo from '../Images/hh.png'
import { ProfileIcon } from './ProfileIcon';

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
            <LandingLogo src={logo} alt='' onClick={handleGoLandingClick}/>
        </LandingWrap> 
        
        <HomeWrap >
            <div>
                <HomeLogo src={homelogo} alt='homelogo' onClick={handleGohomeClick} />
            </div>
                
            
            <ProfileIcon/>
        </HomeWrap>         
    </LogoWrap>

    );
};

export default Header;

const LogoWrap = styled.div`

width: 100%; 
display: flex;
align-items: center;
justify-content: space-between;
margin-top:20px;
`;


const LandingWrap = styled.div`


`;
const HomeWrap = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
  
`;

const HomeLogo =styled.img`
width:55px;
height:55px;
margin-right:30px;
/* tablet 규격 */
@media screen and (max-width: 1024px){
    
}

/* mobile 규격 */
@media screen and (max-width: 540px){
    margin-right:10px;
    width:41px;
    height:41px;
    
}
/* s 데스크 */
@media screen and (min-width: 1025px){
    
}
/* l 데스크 */
@media screen and (min-width: 1700px){
    width:70px;
    height:70px;
}
`;

const LandingLogo = styled.img`
width: 170px; 
height: 100px; 

/* tablet 규격 */
@media screen and (max-width: 1024px){
    width: 190px; 
    height: 100px; 
}
@media screen and (max-width: 850px){
    width: 170px; 
    height: 100px; 
}

/* mobile 규격 */
@media screen and (max-width: 540px){
    width: 150px; 
    height: 90px; 
}
/* s 데스크 */
@media screen and (min-width: 1025px){
    width: 220px; 
    height: 120px;
}
/* l 데스크 */
@media screen and (min-width: 1700px){
    width: 300px; 
    height: 170px;
}
`;


