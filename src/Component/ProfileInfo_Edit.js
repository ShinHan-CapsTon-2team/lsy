import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import styled from 'styled-components';
const SERVER_URL= 'http://localhost:4002/api/profileEdit';

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
    border: 4px #3A76EF solid;
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

width:65%;
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

width:65%;
@media screen and (max-width: 850px){
    width:75%;
}
@media screen and (max-width: 540px){
    width:90%;
}
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

const AreaInput = styled.div`
display: flex;
align-items: center;
width: 100%;
overflow: hidden; 
`;

const WrapAuto = styled(AreaInput)`
height: auto;

`;
const WrapPer = styled(AreaInput)`
height: 100%;
`;

const inputStyle = {
color: 'black',
fontFamily: 'Inter',
border: 'none',
outline: 'none',
width: '100%'
};

const InputBasic = styled.input`
${inputStyle};
${FontStyle};
height: 6vh;
`;

const TextareaBasic = styled.textarea`
${inputStyle};
${FontStyle};
min-height: 25vh;
height:auto;
`;
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
//width:17vw;
height: 8.5vh; 
//margin-left:20px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

width:80%;

position: relative;
cursor: pointer;
color: white;
${FontStyle};
//margin-top:20px;
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

const Email  = styled.div`
${FontStyle};
width: 100%;


//overflow-wrap: break-word;
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



//1. 프로필 정보 가져오기
// 2/ 프로필 수정 완료 처리하기  
const ProfileInfo_Edit = () => {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [introduction, setintroduction] = useState('');
    const [career, setCareer] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    const accessToken = localStorage.getItem("access_token");
    // 프로필 정보를 서버에 보내는 로직
    try {
        const response = await fetch(SERVER_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`, // 액세스 토큰을 헤더에 포함
          },
          body: JSON.stringify({
            nickname,
            introduction,
            career,
            // 필요한 다른 프로필 정보들 추가
          }),
        });
  
        if (response.ok) {
          // 서버 응답이 정상인 경우 처리
          console.log('프로필 정보 업데이트 성공');
          navigate('/profile');

        } else {
          // 서버 응답이 실패한 경우 처리
          console.error('프로필 정보 업데이트 실패');
        }
      } catch (error) {
        console.error('에러 발생:', error);
      }
    };
  

    return(
        <ProfileWrap>
            
                <One> {/* 이름 이메일  */}
                    
                        <WrapAuto style={{marginBottom:10}}>
                            <InputBasic
                                type="text"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                placeholder="닉네임 "
                            />
                        </WrapAuto>
                        
                        <Wrap>
                            <Email>ddoing@gmail.com</Email> {/* 링크 복사하게끔  */}

                        </Wrap>
                    

                </One>
                
                <Onetwo >  {/* 소개 커리어  */}

                    <div style={{display:'flex',flexDirection:'column',width:'100%',marginBottom:23}}>
                        
                        <Left >
                            <Whatgray> 소개</Whatgray>
                        </Left>
                        <Left style={{marginTop:10 ,width:'100%'}}>
                                <WrapPer>
                                        <TextareaBasic
                                            value={introduction}
                                            onChange={(e) => setintroduction(e.target.value)}
                                            placeholder="소개" 
                                        />
                                </WrapPer>
                        </Left>
                    </div>
                
                    <div style={{display:'flex',flexDirection:'column',width:'100%',marginBottom:23}}>
                        
                        <Left >
                            <div style={{fontSize:25,color:'gray'}}> 커리어</div>
                        </Left>
                        <Left style={{marginTop:10,width:'100%'}}>
                            <WrapPer>
                                        <TextareaBasic
                                            value={career}
                                            onChange={(e) => setCareer(e.target.value)}
                                            placeholder="커리어" 
                                        />
                            </WrapPer>
                        </Left>
                    </div>
                </Onetwo>

            
            
            <ButtonShort onClick={handleSubmit}>프로필 수정 완료 </ButtonShort>
        </ProfileWrap>

    );
};
export default ProfileInfo_Edit;