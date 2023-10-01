import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/imagelogo.png";
import { ProfileIcon } from "./ProfileIcon";
import { LogoWrap, LandingLogo } from "./HeaderStyle";

const Header = () => {
  const navigate = useNavigate();

  const handleGoLandingClick = () => {
    navigate("/");
  };

  const [dataFromChild, setDataFromChild] = useState(""); // 자식 컴포넌트로부터 받은 데이터 상태

  // 자식 컴포넌트에서 받은 데이터를 처리하는 함수
  const handleDataFromChild = (data) => {
    setDataFromChild(data); // 데이터를 상태에 저장
  };

  
  return (
    <LogoWrap>
      <LandingLogo src={logo} alt="" onClick={handleGoLandingClick} />
      <ProfileIcon onDataReceived={handleDataFromChild}/>
    </LogoWrap>
  );
};

export default Header;
