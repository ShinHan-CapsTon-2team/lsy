
import React, {useNavigate,useParams } from 'react-router-dom';
import { useEffect,useState } from 'react'

import styled from "styled-components";

import aa from "../Images/aa.jpg"
import Logo from "../Component/Header"
import Loading from '../Component/Loading';
import profilelogo from '../Images/profileimg.png'
const SERVER_URL= 'http://localhost:4000/api/lookup';


function Images_Lookup_test() {
    const navigate = useNavigate();
    

    const params = useParams(); // 1
    const id = params.id; // 2
    console.log( 'params:',params);
    console.log('id:',id);

    // API로부터 받아온 데이터를 저장할 상태 변수
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    function getUserList() {
        let reqOption = {
        method: 'get',
        headers: {
            //'content-type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
        },
        };

        fetch(`${SERVER_URL}/${id}`, reqOption)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setUser(data);
            console.log('설명',data.description)
            setLoading(false); // 데이터를 가져왔으므로 로딩 상태를 false로 설정
            
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            setLoading(false); 
        });
    }

    getUserList();
    }, [id]);
    if (loading) {
        return <Loading
                what="Loading"/>;
    }

    return (  
        
        <OutWrap>
            <InOutWrap>      
                {/* 홈페이지 로고 같*/}        
                <Logo />

                <Center >

                    <InLayoutOne>  
                        <Content>
                            <ContentTitle> {/*제목*/}
                                <WrapBasic>
                                    <Font>바디프로필입니다. </Font>
                                </WrapBasic>

                                <WrapBasic> {/* 날짜 */}
                                    <At>2023-09-01</At>
                                </WrapBasic>
                            </ContentTitle>

                            <ContentProfile> {/* 이름 */}
                                <ProfileImgWrap > 
                                    <ProfileImg src={profilelogo} />
                                </ProfileImgWrap>
                                <ContentBasic  style={{flex:1}}>{/*이름 */}
                                    <WrapBasic>
                                        <Font>곽두팔</Font>
                                    </WrapBasic>
                                </ContentBasic>
                            </ContentProfile>

                            <ContentImgDes>{/* 이미지/설명 */}
                                <BoxRadius > {/* 이미지 */}
                                    <Img src={aa} alt='이미지' />
                                </BoxRadius>
                                
                                <BoxRadius> {/* 설명 */}
                                    <Font>설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명</Font>
                                </BoxRadius>
                            </ContentImgDes>
                            
                        </Content>  
                    </InLayoutOne>  

                    <InLayoutTwo> {/* 자기 게시글이면 보이게 처리하기  */}
                        <Buttons>
                            <Right> 
                                <EditButton>
                                    수정  
                                </EditButton>

                                <DelectButton>
                                    삭제  
                                </DelectButton> 
                            </Right>
                        </Buttons>
                    </InLayoutTwo>

                            
                </Center>
                    
            </InOutWrap>
        </OutWrap>
    );
};

export default Images_Lookup_test  ;

const At =styled.text`
color:gray;
font-size:20px;`
const BoxRadius = styled.div`
    border-radius: 31px;
    
        `;

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
margin-bottom: 30px;
`;

const OutWrap = styled.div`
width: 100%;
height: 97.6vh;

position: relative;

background: white;

display: flex;
flex-direction: column;
// justify-content: center;
align-items: center;

//overflow: hidden;


`;

const InOutWrap = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Center = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;

`;

const InLayoutOne = styled.div`
text-align:center;
width:65vw;
margin-bottom:30px;
/* tablet 규격 */
@media screen and (max-width: 1023px){
    
}

/* mobile 규격 */
@media screen and (max-width: 540px){
    
}
/* s 데스크 */
@media screen and (min-width: 1024px){
    
}
/* l 데스크 */
@media screen and (min-width: 1700px){
    width: 75vw;
}

`;

const Content = styled.div`
display: flex;
flex-direction: column;
`;

const ContentRadius = styled.div`
border: 3px #3A76EF solid;
padding: 20px;
word-wrap: break-word;
//opacity: 0.90;
border-radius: 31px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

margin-top: 20px;

@media screen and (min-height: 900px) {
    margin-top: 30px;
    border: 4px #3A76EF solid;
};
`;

const ContentBasic = styled(ContentRadius)`
display: flex;
align-items: center;
`;
 
const ContentTitle =styled(ContentBasic)`
flex-direction: column;
`;
const ContentProfile =styled.div`display: flex;`;


const ContentImgDes = styled(ContentRadius)`
position: relative;
overflow: hidden;
text-align: center;
height:auto;
`;


const Area = styled.div`
display: flex;
align-items: center;
width: 100%;
//border-radius: 31px;
overflow: hidden; 
`;

const WrapBasic = styled(Area)`
height: auto;
`;

const ProfileImgWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-top: 20px;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 95px;
  height: 95px;
`;

const FontStyle= {
    fontSize: 33,

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
//width: 100%;

`;




const InLayoutTwo = styled(InLayoutOne)`
display: flex;
width:65vw;
//height:19vh;
align-items: center;
//justify-content: center;

margin-bottom:30px;
@media screen and (min-width: 1700px) {
    width: 75vw;
    height:21vh;
};
`;

const Buttons = styled.div`
  text-align: center;
  display: flex;
  
  flex-direction: row;
  width: 100%;
`;


const Right = styled.div`
display: flex;
flex-direction: row;
margin-left: auto;
margin-right:10px;
//flex:1
`;


const Radius = styled.button`
padding: 20px;
word-wrap: break-word;
border-radius: 40px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-top: 20px;
border:none;
background: #798BE6;
display: flex;
align-items: center;
justify-content: center;

position: relative;
cursor: pointer;
color: white;

`;






const ButtonLong = styled(Radius)`
  
  width:18vw;
  height: 7vh; 
  ${FontStyle};

  /* mobile 규격 */
  @media screen and (max-width: 540px){
    width:41vw;
    height: 7vh; 

  }

  /* s 데스크 */
  @media screen and (min-width: 1024px){
      
  }
  @media screen and (min-width: 1700px) {
    width:18vw;
    height: 7.5vh; 
  };
 `;

const EditButton =styled(ButtonLong)``;
const DelectButton=styled(ButtonLong)`
margin-left:20px;`;



