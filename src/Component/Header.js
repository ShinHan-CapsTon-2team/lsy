import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/imagelogo.png";
import homelogo from "../Images/hh.png";
import { ProfileIcon } from "./ProfileIcon";
import * as S from "./HeaderStyle";
const Header = () => {
  const navigate = useNavigate();
  // page

  // landing page
  const handleGoLandingClick = () => {
    navigate("/");
  };

  //홈페이지
  const handleGohomeClick = () => {
    navigate("/home");
  };

  return (
    <S.LogoWrap>
      <S.LandingWrap>
        <S.LandingLogo src={logo} alt="" onClick={handleGoLandingClick} />
      </S.LandingWrap>

      <S.HomeWrap>
        <div>
          <S.HomeLogo
            src={homelogo}
            alt="homelogo"
            onClick={handleGohomeClick}
          />
        </div>

        <ProfileIcon />
      </S.HomeWrap>
    </S.LogoWrap>
  );
};

export default Header;
