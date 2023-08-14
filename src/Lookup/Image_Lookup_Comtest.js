

import React, {useParams } from 'react-router-dom';
import { useEffect,useState } from 'react'
import Logo from "../Component/Header"
import styled from "styled-components";
import Lookup_Content from '../Component/Lookup_Content';
const SERVER_URL= 'http://localhost:4000/api/lookup';

//const SERVER_URL= 'http://localhost:4000/api/post';

function Images_Button() {
    
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
            console.log('설명:',data.description)
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
        return <div>Loading...</div>;
    }

    return (  
        
        <OutWrap>
            <InOutWrap>
            
                {/* 홈페이지 로고 같*/}        
                <Logo />

                <Center>
                    {user.map((uu)=>{
                        let imageUrl = uu.image_url; // 이미지 URL 사용
                        console.log("url:", imageUrl);

                        return(
                                <Lookup_Content title={uu.title} name={uu.name} imageurl={imageUrl} description ={uu.description}
                                profile={uu.profile} />
                                )
                            }
                        )} 
                    <InLayoutTwo>
                        <Buttons>
                            <Left>
                                <Two style={{width:'45vh'}}>{/*비밀번호  */}
                                    <TwoWrap>
                                        <InputSmall
                                            type="password"
                                            
                                            placeholder="비밀번호"
                                        />
                                    </TwoWrap>
                                </Two>
                                <ButtonTwo style={{width:'10vw',marginLeft:20}}>
                                    <Menu  >
                                    확인  </Menu>
                                </ButtonTwo>
                                
                            </Left>

                            <Right> 
                                <ButtonTwo>
                                    <Menu  >
                                    수정  </Menu>
                                </ButtonTwo>

                                <ButtonTwo>
                                    <Menu  >
                                    삭제  </Menu>
                                </ButtonTwo> 
                            </Right>
                        </Buttons>

                    </InLayoutTwo>

                                    
                </Center>
                    
            </InOutWrap>
        </OutWrap>
    );
};

export default Images_Button;


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
-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

const InOutWrap = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


const Center = styled.div`
//width: 65vw;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;

`;

const InLayoutOne = styled.div`
text-align:center;
width:65vw;

@media screen and (min-width: 1700px) {
    width: 75vw;
};
`;


const ContentRadius = styled.div`
border: 3px #3A76EF solid;
padding: 20px;
word-wrap: break-word;
opacity: 0.90;
border-radius: 31px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

margin-top: 20px;

@media screen and (min-height: 900px) {
    margin-top: 30px;
    border: 4px #3A76EF solid;
};
`;


// 색깔 탁하게 하는 주범 이 새기임 opacity: 0.90;
const One = styled(ContentRadius)`
display: flex;
align-items: center;
`;

const Two = styled(One)`
`;

const Area = styled.div`
display: flex;
align-items: center;
width: 100%;
border-radius: 31px;
overflow: hidden; 
`;

const InLayoutTwo = styled(InLayoutOne)`
display: flex;
width:65vw;
height:19vh;
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

const Left = styled.div`
width: 75%;
display: flex;
align-items:center;
//justify-content: center; //
`;

const Right = styled.div`
display: flex;
flex-direction: column;
margin-left: auto;
margin-right:10px;
//flex:1
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
  width:18vw;
  height: 7vh; 
  font-size: 33px;

  @media screen and (min-width: 1700px) {
    width:18vw;
    height: 7.5vh; 
  };
 `;

 const Menu = styled.span`
z-index: 2;
color: white;

position: absolute;
font-weight: 500;

font-size: 33px;
over-flow:hidden;

@media screen and (min-height: 950px) {
  
  font-size: 45px;
  
  };
`;


const TwoWrap = styled(Area)`
height: auto;

`;

const inputStyle = {
    color: 'black',
    fontSize: 35,
    fontFamily: 'Inter',
    fontWeight: '400',
    border: 'none',
    outline: 'none',
    width: '100%',
    
        '@media screen and (min-height: 950px)': {
            fontSize: 40,
        },
    };
    
const InputSmall = styled.input`
${inputStyle}
height: 6vh;
`;