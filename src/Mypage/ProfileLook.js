import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import img1 from "../Images/a.png";
import img2 from "../Images/b.jpg";
import img3 from "../Images/c.jpg";
import img4 from "../Images/d.jpg";
import img5 from "../Images/e.png";

import img6 from "../Images/f.png";
import img7 from "../Images/g.jpg";
import img8 from "../Images/h.png";
import img9 from "../Images/i.jpg";
import img10 from "../Images/j.jpg";

import img11 from "../Images/k.png";
import img12 from "../Images/l.jpg";
import img13 from "../Images/m.png";
import img14 from "../Images/n.jpg";
import img15 from "../Images/p.png";

import img16 from "../Images/a1.PNG";
import img17 from "../Images/a2.PNG";
import img18 from "../Images/a3.PNG";
import img19 from "../Images/a4.PNG";
import img20 from "../Images/b1.PNG";



import Logo from "../Component/Header"
import styled from "styled-components";
//import Loading from '../Component/Loading'
const SERVER_URL= 'http://localhost:4000/api/lookup';

function ProfileLook() {

    
    //const navigate = useNavigate();
    

    /* 데이터 value 넣어줄 값 
    const [board, setBoard] = useState({
        idx: 0,
        title: '',
        createdBy: '',
        contents: '',
    });
    */

    
    
    /* 처리해야 할 코드  idx => id
    const getBoard = async () => {
        const resp = await (await axios.get(`//localhost:8080/board/${idx}`)).data;
        setBoard(resp.data);
      };

      //확인 버튼 누를시 
      const updateBoard = async () => {
        await axios.patch(`//localhost:8080/board`, board).then((res) => {
          alert('수정되었습니다.');
          navigate('/board/' + idx);
        });
      };
      // 수정 완료 확인 버튼 누르고 수정한 lookup 페이지로
      const backToDetail = () => {
        navigate('/board/' + idx);
      };
    
      useEffect(() => {
        getBoard();
      }, []);

      */ 
    return (
        <OutWrap>
            <InOutWrap>
            
                {/* 홈페이지 로고 같*/}        
                <Logo />

                <Center>
                    <div style={{width:'25%'}}>

                    
                        <One>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'end',height:'20vh',marginBottom:20}}>
                                <SmallWrap style={{marginBottom:10}}>
                                    <div style={{fontSize:35,color:'black',width:'100%'}}>김또잉</div>

                                </SmallWrap>
                                
                                <Wrap>
                                    <text style={{fontSize:25}}>ddoing@gmail.com</text>

                                </Wrap>
                            </div>


                            <div style={{display:'flex',flexDirection:'column',width:'100%',marginBottom:23}}>
                                <div
                                        style={{
                                            width: "100%",
                                            textAlign: "center",
                                            borderBottom: "2px solid #aaa",
                                            lineHeight: "0.1em",
                                            margin: "10px 0 10px",
                                        }}
                                        />
                                <Left >
                                    <div style={{fontSize:25,color:'gray'}}> 소개</div>
                                </Left>
                                <Left style={{marginTop:10}}>
                                    <Font  style={{textAlign:'left'}}>안녕 나는 000. 햄버거가 먹고싶다. </Font>
                                </Left>
                            </div>





                            <div style={{display:'flex',flexDirection:'column',width:'100%',marginBottom:23}}>
                                <div
                                        style={{
                                            width: "100%",
                                            textAlign: "center",
                                            borderBottom: "2px solid #aaa",
                                            lineHeight: "0.1em",
                                            margin: "10px 0 10px",
                                        }}
                                        />
                                <Left >
                                    <div style={{fontSize:25,color:'gray'}}> 커리어</div>
                                </Left>
                                <Left style={{marginTop:10}}>
                                    <Font  style={{textAlign:'left'}}> 4학년이고 하라는 거 다 잘못해요 그니깐 아무것도 시키지마 </Font>
                                </Left>
                            </div>
                        
                        <ButtonShort>프로필 수정</ButtonShort>






                        </One>
                    </div>

                    <div style={{width:'75%'}}>
                        <Two >
                            <GridWrap>
                                
                                <GridDiv>
                                    <GridImg src={img1} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img2} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img3} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img4} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img5} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img6} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img7} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img8} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img9} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img10} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img11} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img12} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img13} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img14} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img15} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img16} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img17} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img18} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img19} />
                                </GridDiv>
                                <GridDiv>
                                    <GridImg src={img20} />
                                </GridDiv>


                            </GridWrap>

                        </Two>

                    </div>
                    
                </Center>
            </InOutWrap>
        </OutWrap>

    );
}
export default ProfileLook;



const Radius = styled.button`
//border: 3px #3A76EF solid;

padding: 20px;
word-wrap: break-word;
border-radius: 40px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

//margin-top: 20px;
border:none;
`;

  const ButtonShort =  styled(Radius)`
  background: #798BE6;
width:17vw;
height: 8.5vh; 
margin-left:20px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

position: relative;
cursor: pointer;
color: white;

font-size:25px;
margin-top:20px;
&:hover {
  background:#5D6BB4;
}

      
/* tablet 규격 */
@media screen and (max-width: 1023px){
  width:16vw;
  height: 7vh;
}

/* mobile 규격 */
@media screen and (max-width: 540px){
  width:30vw;
  height: 7vh;
}
/* s 데스크 */
@media screen and (min-width: 1024px){
    
}
/* l 데스크 */
@media screen and (min-width: 1700px){
    width:10vw;
    height: 7vh;
}
`;



const GridWrap = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 1fr);
gap: 10px;
//width: 75%;
height: auto;
//min-height:80vh;
//padding: 20px;
//margin-top:20px;


/* tablet 규격 */
@media screen and (max-width: 1023px){
  width: 90%;
}

/* mobile 규격 */
@media screen and (max-width: 540px){
  width: 93%;
  gap: 5px;
  
}
/* s 데스크 */
@media screen and (min-width: 1024px){
    
}
/* l 데스크 */
@media screen and (min-width: 1700px){
    
}
`;

const GridDiv = styled.div`
  width: 100%;
  height: 36vh;
  border-radius: 10px;
  overflow: hidden;

  /* tablet 규격 */
  @media screen and (max-width: 1023px){
    height: 26vh;
  }

  /* mobile 규격 */
  @media screen and (max-width: 540px){
    height: 26vh;
  }
  /* s 데스크 */
  @media screen and (min-width: 1024px){
      
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px){
      
  }
`;

const GridImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px; 
  object-fit: cover;
`;

const PaginationWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;


const OutWrap = styled.div`
width: 100%;
height: 100vh;

position: relative;

background: white;

display: flex;
flex-direction: column;
// justify-content: center;
align-items: center;


`;

const InOutWrap = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width:85%
//height:90%;
`;


const Center = styled.div`
text-align: center;
display: flex;
flex-direction: row;
//align-items: center; 

width:100%;
//height:100%;
justify-content: space-between; //고려

margin-bottom:30px;
`;

const ContentRadius = styled.div`
border: 3px #3A76EF solid;
padding: 40px;
word-wrap: break-word;
border-radius: 31px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;


const One = styled(ContentRadius)`
display: flex;
align-items: center;
//width:25%;
height:auto;
min-height:50vh;
flex-direction: column;

`;
const Two = styled(ContentRadius)`
display: flex;
align-items: center;
margin-left:25px;
//width:75%;

height:auto;
min-height:65vh;
`;

const Area = styled.div`
display: flex;
align-items: center;
width: 100%;
border-radius: 31px;
overflow: hidden; 
`;

const SmallWrap = styled(Area)`
height: auto;
margin-top:20px;

`;
const Wrap = styled(Area)`
height: auto;


`;
const FontStyle= {
    fontSize: 30,

    /* mobile 규격 */
  '@media screen and (max-width: 540px)':
    {
        fontSize: 27,
  },
  '@media screen and (min-width: 1700px)': {
    
        fontSize: 45,
    },
};
   
const Font = styled.div`
${FontStyle};
color: black;


width: 100%;

`;

const Left = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin-right: auto;

  
`;

const Text = styled.text`
color:gray;
font-size:22px;
`;

