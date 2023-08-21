import logo from '../Images/imagelogo.png'

import { useNavigate } from 'react-router-dom';

import styled from "styled-components";


function Landing(){

    const navigate = useNavigate();

    //퀴즈 
    const handleFitPhotoClick = () => {
        navigate('/quizindex');
    };

    //홈페이지
    const handleGohomeClick = () => {
        navigate('/home');
    };
    // 사진 등록 추천
    const handleUploadPhotoClick = () => {
        navigate('/reco');
    };
    // 사진 등록
    const handleUpPhotoClick = () => {
        navigate('/post');
    };

    const OutWrap = styled.div`
    //width: 100%;
    //height:100%;
    //height: 97.6vh;
    //position: relative;
    background: white;
    display: flex;
    //flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80%;
    height:100%;

	
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 900px) {
		width: 90%;
	}
	
`;

    const InsideWrap = styled.div`
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width:100%
    `;

    const LogoImg = styled.img`
        margin-top: 50px; 
        margin-bottom: 20px; 

        width: 50%;

        @media screen and (max-width: 540px){
            
            width: 85%;
           
        }
        
    `;

    const ImgWrap = styled.div`
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top:20px
    `;


    const Radius = styled.button`
    //border: 3px #3A76EF solid;
    padding: 20px;
    word-wrap: break-word;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border:none;
    `;

    const Button = styled(Radius)`
    background: #798BE6;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    cursor: pointer;
    color: white;
    font-weight: 500;

    

    width: 44vw;
            height: 9.6vh;; 
            
            font-size: 35px;
    
    margin-bottom:15px;


    /* tablet 규격 */
        @media screen and (max-width: 1023px){
            
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
            width: 88vw;
            height: 9vh;
            font-size: 24px;
            margin-bottom:20px;
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            width: 40vw;
            height: 9vh;
            font-size: 40px;
            
        }
`;


    

    return (

        <OutWrap>
            <InsideWrap>
                
                <LogoImg src={logo} alt=''/>
                
                
                <ImgWrap> {/* 말 줄이기 ... fontsize 높여야함  */}
                    <Button onClick ={handleUploadPhotoClick}>매칭을 통해 추천받기 </Button>
                    <Button onClick={handleFitPhotoClick}> 맞는 사진 추천받기</Button>
                    <Button onClick={handleGohomeClick} > 홈페이지 방문하기</Button>
                    <Button onClick={handleUpPhotoClick} >사진 등록하기 </Button>
                </ImgWrap>
                
            </InsideWrap>
        </OutWrap>
    
    );
}

export default  Landing;