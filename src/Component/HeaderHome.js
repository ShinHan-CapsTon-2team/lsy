
import React  from 'react';
import {  useNavigate } from 'react-router-dom';

import logo from '../Images/imagelogo.png';
import styled from "styled-components";
import { ProfileIcon } from './ProfileIcon';


const Header=() => 
{
    const navigate = useNavigate();

    const handleGoLandingClick = () => {
        navigate('/');
        };
    
    return (
    <LogoWrap>                
        <LandingLogo src={logo} alt='' onClick={handleGoLandingClick}/>
        <ProfileIcon/>                
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

