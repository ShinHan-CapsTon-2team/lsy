import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/imagelogo.png";
import { ProfileIcon } from "./ProfileIcon";
import { LogoWrap, LandingLogo } from "./HeaderStyle";

const Header = () => {
  const navigate = useNavigate();

  const handleGoLandingClick = () => {
    navigate("/");
  };

  return (
    <LogoWrap>
      <LandingLogo src={logo} alt="" onClick={handleGoLandingClick} />
      <ProfileIcon />
    </LogoWrap>
  );
};

export default Header;
