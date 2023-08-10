import { useLocation ,useNavigate} from 'react-router-dom';
import{ React,useState} from 'react';
import styled from "styled-components";
import Des from './Des'
import love from '../Images/love.jpg'

const Quizresult  = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const [visible,setVisible] =useState(false);

    const categoryName = params.get('name');
    const res = params.get('res');
    //확인해보기 
    console.log('categoryName :',categoryName);
    console.log('res: ',res);

    const navigate = useNavigate();

    // 홈페이지 이동 수정 
    const handleGoHomeClick = () => {
        navigate('/home');
    };

    // 업로드 이동 수정 
    const handleGoUploadClick = () => {
        navigate('/post');
    };


    /// 퀴즈에 대한 결과 추가해야함 
    
    


    return (
        <OutWrap>
            <InsideWrap>
                <Content>
                    <OneImg src="https://via.placeholder.com/378x482"/>
                    
                    <ButtonTwo style={{ marginTop:20,width:200,height:50,marginBottom:20}}>                         
                        <Menu onClick={() => {setVisible(!visible);}} style={{fontSize:33}} >
                            설명 보기  </Menu>
                    </ButtonTwo>
                    
                    {visible && <Des/>}
                </Content>

                <Content style={{marginLeft:20,marginRight:20}}>
                    <OneImg src="https://via.placeholder.com/378x482"/>
                    
                    <ButtonTwo style={{ marginTop:20,width:200,height:50,marginBottom:20}}>                         
                        <Menu onClick={() => {setVisible(!visible);}} style={{fontSize:33}} >
                            설명 보기  </Menu>
                    </ButtonTwo>
                    
                    {visible && <Des/>}
                </Content>
                <div>
                <OneImg src="https://via.placeholder.com/378x482" />
                </div>
                
            </InsideWrap>

            
            <InsideNextWrap> 
                <ButtonTwo style={{marginRight:30}}>                         
                    <Menu onClick={handleGoHomeClick} >
                    홈페이지 방문하기  </Menu>
                </ButtonTwo>
                <ButtonTwo>                         
                    <Menu onClick={handleGoUploadClick} >
                    테스트 다시 하기  </Menu>
                </ButtonTwo>
            </InsideNextWrap>
        </OutWrap>
    );
};

export default Quizresult;

const OutWrap = styled.div`
    width: 100%;
    height: 97.6vh;

    position: relative;
    background: white;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

    const InsideWrap = styled.div`

        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 50px;
        
        @media screen and (min-width: 1600px) {
            margin-top: 70px; 
            
        }; 
    `;

    const OneImg = styled.img`
        width: 27vw;
        height: 65vh;
        opacity: 0.90;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 31px;
        border: 4px #3A76EF solid;
        
    `;
    //width: 398px;
        //height: 492px;
    //margin-left: ${({ isMargin }) => (isMargin ? '20px' : 0)};
        //margin-right: ${({ isMargin }) => (isMargin ? '20px' : 0)};

    const InsideNextWrap = styled.div`
    
        display: flex;
        justify-content: center;
        margin-top: 20px;

        width:100%;
        position: fixed;
        bottom: 20px;
         right: 20px;
    `;

    const Button = styled.img`
        width: 21vw;
        height: 9vh;
        padding: 25px;

        @media screen and (min-width: 1600px) {
            width: 24vw;
            height: 10vh;
            
        };
    `;

    
    
    
    const Radius = styled.button`
    //border: 3px #3A76EF solid;
    
    padding: 20px;
    word-wrap: break-word;
    border-radius: 40px;
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
  width:25vw;
  height: 7vh; 
  font-size: 33px;

  @media screen and (min-width: 1700px) {
    width:18vw;
    height: 7.5vh; 
  };
 `;

  // span 
const Menu = styled.span`
z-index: 2;
color: white;

position: absolute;
font-weight: 500;

font-size: 30px;
over-flow:hidden;

@media screen and (min-height: 950px) {
  
  font-size: 40px;
  
  };
`;