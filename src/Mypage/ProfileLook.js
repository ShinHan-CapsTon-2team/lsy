
import { useNavigate, useParams } from 'react-router-dom';
import { BsPlusCircleFill } from 'react-icons/bs'

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

import ProfileInfo from '../Component/ProfileInfo';
import ProfileInfo_Edit from '../Component/ProfileInfo_Edit';
import Logo from "../Component/Header"
import styled from "styled-components";
//import Loading from '../Component/Loading'
const SERVER_URL= 'http://localhost:4000/api/lookup';


function ProfileLook() { 

    const navigate = useNavigate();
    const goToWorkUpload = () => {
        navigate('/post');
    };
    
    return (
        <OutWrap>
            <InOutWrap>
            
                {/* 홈페이지 로고 같*/}        
                <Logo />

                <Center>


                  <ProfileInfo/>

                  <ArticleWrap>
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

                  </ArticleWrap>
                    
                </Center>
            </InOutWrap>

            <PostWrap>
            
                <StyledBsPlusCircleFill onClick={goToWorkUpload}/>
                
            </PostWrap>
        </OutWrap>

    );
}
export default ProfileLook;



const ArticleWrap = styled.div`
width:75%;
margin-left:10px;
@media screen and (max-width: 1024px){
  width:75%;
}

@media screen and (max-width: 850px){
  //margin-left:10px;
  width:100%;
}
/* mobile 규격 */
@media screen and (max-width: 540px){
  margin-left:0px;
  width:90%;
}

/* s 데스크 */
@media screen and (min-width: 1025px){
  
  width:73%;
}
/* l 데스크 */
@media screen and (min-width: 1700px){
  width:73%;
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
  //width: 90%;
}
@media screen and (max-width: 850px){
  //width: 90%;
}
/* mobile 규격 */
@media screen and (max-width: 540px){
  //width: 93%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(10, 1fr);
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
  @media screen and (max-width: 850px){
    height: 24vh;
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px){
    height: 30vh;
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

width:80%;

      /* tablet 규격 */
    @media screen and (max-width: 1024px){
      width:87%;
    }

    @media screen and (max-width: 850px){
      //width:90%;
    }
    
    /* mobile 규격 */
    @media screen and (max-width: 540px){
      width:95%;
      
    }
    /* s 데스크 */
    @media screen and (min-width: 1025px){
        
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){
      width:75%;
    }
`;


const Center = styled.div`
text-align: center;
display: flex;
flex-direction: row;
//align-items: center; 
width: 100%;
//width: 90%;
//height:100%;
margin-top:20px;
//justify-content: space-between; //고려


/* mobile 규격 */
@media screen and (max-width: 540px){
  flex-direction: column;
  align-items:center;
}
`;

const ContentRadius = styled.div`
word-wrap: break-word;
border-radius: 31px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


padding: 40px;
margin-bottom:20px;
@media screen and (max-width: 850px){
  padding: 20px;
}




@media screen and (max-width: 1600px) {
  border: 3px #3A76EF solid;
  };
  
  @media screen and (max-width: 540px) {
  margin-top: 15px;
  border: 2px #3A76EF solid;
  };
  
  @media screen and (min-width: 1601px) {
  border: 4px #3A76EF solid;
  };
`;



const Two = styled(ContentRadius)`
display: flex;
align-items: center;

//width:75%;

height:auto;
min-height:65vh;
`;


const PostWrap =styled.div`
text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* 수평 정렬을 오른쪽으로 변경 */
    justify-content: flex-end; /* 수직 정렬을 아래쪽으로 변경 */
    position: fixed; /* 위치를 고정 */
    bottom: 100px; /* 아래쪽 여백을 20px로 설정 */
    right: 50px; /* 오른쪽 여백을 20px로 설정 */

    /* tablet 규격 */
    @media screen and (max-width: 1023px){
        
    }

    /* mobile 규격 */
    @media screen and (max-width: 540px){
      bottom: 120px; /* 아래쪽 여백을 20px로 설정 */
      right: 25px; /* 오른쪽 여백을 20px로 설정 */
    }
    /* s 데스크 */
    @media screen and (min-width: 1024px){
      
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){
      bottom: 130px; /* 아래쪽 여백을 20px로 설정 */
      right: 80px;
    }
`;

const StyledBsPlusCircleFill = styled(BsPlusCircleFill)`
    width: 70px;
    height: 70px;
    color:#798BE6;
    cursor:pointer;
    &:hover {
      color:#5D6BB4;
    }

    /* tablet 규격 */
    @media screen and (max-width: 1023px){
        width: 75px;
      height:75px;
    }

    /* mobile 규격 */
    @media screen and (max-width: 540px){
      width: 63px;
      height:63px;
    }
    /* s 데스크 */
    @media screen and (min-width: 1024px){
        
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){
      width: 90px;
      height:90px;
    }
    `;