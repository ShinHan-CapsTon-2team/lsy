
import { useNavigate  } from 'react-router-dom';
import styled from 'styled-components';


const ProfileWrap = styled.div`
display:flex;
flex-direction:column;
align-items:center;
//overflow: hidden;
width:25%;


@media screen and (max-width: 1024px){
    width:25%;
}

@media screen and (max-width: 850px){
    width:30%;
}
/* mobile 규격 */
@media screen and (max-width: 540px){
    width:90%;
}

/* s 데스크 */
@media screen and (min-width: 1025px){
    width:30%;
}
/* l 데스크 */
@media screen and (min-width: 1700px){
  width:27%;
}

`;

const ContentRadius = styled.div`

padding: 40px;

word-wrap: break-word;
border-radius: 31px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-bottom:20px;

@media screen and (max-width: 1600px) {
    border: 3px #3A76EF solid;
    }

    @media screen and (max-width: 1024px){
        padding: 20px;
    }
    @media screen and (max-width: 540px) {
    
    border: 2px #3A76EF solid;
    }
    
    @media screen and (min-width: 1601px) {
    border: 3px #3A76EF solid;
    };



@media screen and (max-width: 850px){
    padding: 20px;
}
`;


const One = styled(ContentRadius)`
display: flex;
align-items: center;
height:15vh;
//height:15vh;
//min-height:10vh;
flex-direction: column;
margin-bottom:20px;

justify-content: center;

width:70%;
@media screen and (max-width: 850px){
    width:75%;
}
@media screen and (max-width: 540px){
    width:90%;
}


`;

const Onetwo = styled(ContentRadius)`
display: flex;
align-items: center;
//width:25%;
height:auto;
min-height:30vh;
flex-direction: column;

width:70%;
@media screen and (max-width: 850px){
    width:75%;
}
@media screen and (max-width: 540px){
    width:90%;
}
`;
const Area = styled.div`
display: flex;
align-items: center;
width: 100%;
border-radius: 31px;
//overflow: hidden; 
`;

const SmallWrap = styled(Area)`
//height: auto;
//margin-top:20px;

text-align: center;
  display: flex;
  align-items: center;



`;
const Wrap = styled(Area)`
text-align: center;
  display: flex;
  align-items: center;
`;

const FontStyle = {
    '@media screen and (max-width: 1024px)':{
    
    fontSize: 22
    },
    
    '@media screen and (max-width: 850px)':{
    fontSize: 21
    
    },
    
    /* mobile 규격 */
    '@media screen and (max-width: 540px)':{
    
    fontSize: 19
    },
    /* tablet 규격 */
    '@media screen and (min-width: 1025px)':{
    
    fontSize: 24
    },
    '@media screen and (min-width: 1700px)': {
    
    fontSize: 35
    }
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

const Radius = styled.button`
padding: 20px;
word-wrap: break-word;
border-radius: 40px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
border:none;
background: #798BE6;
position: relative;
cursor: pointer;
color: white;
`;
const ButtonShort =  styled(Radius)`
height: 8.5vh; 
width:80%;
${FontStyle};
margin-bottom:20px;
&:hover {
  background:#5D6BB4;
}

      
/* tablet 규격 */
@media screen and (max-width: 1024px){
 // width:16vw;
  height: 7vh;
}
@media screen and (max-width: 850px){
    width:80%;
}
/* mobile 규격 */
@media screen and (max-width: 540px){
    width:70%;
  //width:30vw;
  height: 7vh;
}
/* s 데스크 */
@media screen and (min-width: 1025px){
    
}
/* l 데스크 */
@media screen and (min-width: 1700px){
   // width:10vw;
    height: 7vh;
}
`;

const GrayFontStyle = {
    '@media screen and (max-width: 1024px)':{
    
    fontSize: 20
    },
    
    '@media screen and (max-width: 850px)':{
    fontSize: 19
    
    },
    
    /* mobile 규격 */
    '@media screen and (max-width: 540px)':{
    
    fontSize: 17
    },
    /* tablet 규격 */
    '@media screen and (min-width: 1025px)':{
    
    fontSize: 22
    },
    '@media screen and (min-width: 1700px)': {
    
    fontSize: 31
    }
    };
const Whatgray = styled.div`
${GrayFontStyle};

color:gray;
//font-weight:bold;
margin-bottom:5px;
`;

const Email  = styled.div`
${FontStyle};
width: 100%;


//overflow-wrap: break-word;
`;

const NickNameFontStyle = {
    '@media screen and (max-width: 1024px)':{
    
    fontSize: 27
    },
    
    '@media screen and (max-width: 850px)':{
    fontSize: 26
    
    },
    
    /* mobile 규격 */
    '@media screen and (max-width: 540px)':{
    
    fontSize: 24
    },
    /* tablet 규격 */
    '@media screen and (min-width: 1025px)':{
    
    fontSize: 29
    },
    '@media screen and (min-width: 1700px)': {
    
    fontSize: 40
    }
    };

const NickName = styled.div`
${NickNameFontStyle};
color:black;
width:100%;
overflow-wrap: break-word;
`;
const ProfileInfo = () => {
    



    return(
        <ProfileWrap>
            
            
                <One> {/* 이름 이메일  */}
                    
                        <SmallWrap style={{marginBottom:10}}>
                            <NickName>김또잉</NickName>
                        </SmallWrap>                       
                        <Wrap>
                            <Email>ddoing@gmail.com</Email> {/* 링크 복사하게끔  */}
                        </Wrap>
                    
                </One>
                
                <Onetwo>  {/* 소개 커리어  */}

                    <div style={{display:'flex',flexDirection:'column',width:'100%',marginBottom:23}}>
                        
                        <Left >
                            <Whatgray> 소개</Whatgray>
                        </Left>
                        <Left style={{marginTop:10}}>
                            <Font  style={{textAlign:'left'}}>안녕 나는 000. 햄버거가 먹고싶다. </Font>
                        </Left>
                    </div>
                
                    <div style={{display:'flex',flexDirection:'column',width:'100%',marginBottom:23}}>
                        
                        <Left >
                            <Whatgray> 커리어</Whatgray>
                        </Left>
                        <Left style={{marginTop:10}}>
                            <Font  style={{textAlign:'left'}}> 4학년이고 하라는 거 다 잘못해요 그니깐 아무것도 시키지마 </Font>
                        </Left>
                    </div>
                </Onetwo>
                
                <ButtonShort>프로필 수정</ButtonShort>
            
            
        </ProfileWrap>

    );
};
export default ProfileInfo;