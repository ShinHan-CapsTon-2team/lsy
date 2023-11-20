

import React,{useRef,useEffect,useState} from 'react';
import * as S from "../HeaderStyle";
import { useNavigate,useLocation } from "react-router-dom";
import "../DropMenu.css";


import * as P from "../ProfileWrapStyle";
import logo from "../../Images/imagelogo.png";
const MenuTool = ({isMenuOpen, openMenuHandler }) => {

    const location = useLocation();
    const navigate = useNavigate();

    const recoRoute =["/reco","/recoresult"];
    const testRoutes = ["/quizindex", "/quizfrist", "/quiztest", "/quizresult"];
    const isTestRoute = testRoutes.includes(location.pathname);
    const isRecoRoute =recoRoute.includes(location.pathname);

    const handleGoTestClick = () => {
        navigate("/quizindex");
      };

    const handleGoRecoClick = () => {
    navigate("/reco");
    };




    const handleGoLandingClick = () => {
        navigate("/");
      };
      const MenuHandler = () => {
        openMenuHandler();
      };

      const smallmenuRef = useRef(null);

      console.log("smallmenuRef",smallmenuRef.current);

      useEffect(() => {
        const handleOutsideClick = (e) => {
          console.log('Outside Click Event', e.target);
          
          if (smallmenuRef.current && !smallmenuRef.current.contains(e.target)) {
            openMenuHandler();
          }
        };
      
        if (isMenuOpen) {
          window.addEventListener('click', handleOutsideClick);
        }
      
        return () => {
          window.removeEventListener('click', handleOutsideClick);
        };
      }, [isMenuOpen, openMenuHandler]);
    return(
        <>
            <S.LandingWrap  style={{display:'flex',alignItems:'center'}}>
                <S.LandingLogo src={logo} alt="" onClick={handleGoLandingClick}  />

                <S.SmallMenu  onClick={MenuHandler} ref={smallmenuRef}  />
            
                {isMenuOpen &&(
                    <P.DropMenuBar  className={`element ${isMenuOpen ? 'open' : 'hidden'}`} >
                      <P.CateMenu style={{marginBottom:'1vh'}}onClick={handleGoRecoClick}>#색감 매칭</P.CateMenu>
                      <P.CateMenu onClick={handleGoTestClick}>#취향 테스트</P.CateMenu>
                    </P.DropMenuBar>
                )}
            
                <S.MenuBarWrap style={{marginLeft:20}} onClick={handleGoRecoClick} > 
                    <S.MenuBar style={{ color: isRecoRoute ? '#5d6bb4' : ''}}  data-tooltip-id="colormatching-tooltip" >#색감 매칭</S.MenuBar>
                </S.MenuBarWrap>

                <S.Tool 
                    id="colormatching-tooltip" 
                    place="bottom" >
                    우리의 색감 매칭 기능을 통해 여러분의 사진과 비슷한 색감을 가진 다른 사진을 찾아보세요. <br/>
                    여러분이 원하는 카테고리 중 하나의 사진을 업로드하면, 그와 비슷한 색감을 가진 다른 사진을 찾아드립니다.

                </S.Tool> 


                <S.MenuBarWrap onClick={handleGoTestClick}>
                    <S.MenuBar  style={{ color: isTestRoute ? '#5d6bb4' : ''}}  data-tooltip-id="testmatching-tooltip"> #취향 테스트</S.MenuBar>
                </S.MenuBarWrap>
                
                <S.Tool  
                    id="testmatching-tooltip" 
                    place="bottom" >
                    사진 취향을 발견하고 원하는 사진을 찾기 위한 흥미로운 테스트를 시작하세요.<br/>
                    선택한 카테고리에 따라 원하는 스타일과 옵션을 선택하세요.<br/>
                    선택지 기반으로 맞춤형 사진을 찾아 드립니다.
                </S.Tool>
            </S.LandingWrap>
        </>
    );
};
export default MenuTool;