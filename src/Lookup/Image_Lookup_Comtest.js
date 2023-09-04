import React, {useParams ,useNavigate} from 'react-router-dom';
import { useEffect,useState } from 'react'
import Logo from "../Component/Header"
import styled from "styled-components";
import Lookup_Content from '../Component/Lookup_Content';
import Loading from '../Component/Loading';
import { Success } from '../Modal/Success';
const SERVER_URL= 'http://localhost:4000/api/lookup';

//const SERVER_URL= 'http://localhost:4000/api/post';

function Images_Lookup_Comtest() {
    const navigate = useNavigate();

    const params = useParams(); 
    const id = params.id; 
    //확인용
    console.log( 'params:',params);
    console.log('id:',id);


    //삭제 성공/실패 모달창 
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

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
        <Loading
        what="Loading"/>;
    }

    const handelGoEdit = () => {
        navigate(`/postedit/${id}`); 
    };

    const handleDelete = () => {
        const confirmed = window.confirm('게시물을 삭제하시겠습니까?');
        
            if (confirmed) {
            const reqOptions = {
                method: 'delete',
                headers: {
                'Accept': 'application/json',
                },
            };
        
            fetch(`${SERVER_URL}/${id}`, reqOptions)
                .then((res) => {
                if (res.status === 204) {
                    // 성공 메시지를 보여줍니다.
                    setShowSuccessMessage(true);

                    // 1초 후에 성공 메시지를 숨깁니다.
                    setTimeout(() => {
                    setShowSuccessMessage(false);
                    navigate('/home');
                    }, 1000);
                    navigate('/home');

                } else { //여기가 맞나?
                    // 실패 메시지를 보여줍니다.
                    setShowErrorMessage(true);

                    // 1초 후에 실패 메시지를 숨깁니다.
                    setTimeout(() => {
                    setShowErrorMessage(false);
                    }, 1000);
                }
                })
                .catch((error) => {
                console.error('Error deleting data:', error);
                });
            }
        };

    
    return (  
        
        <OutWrap>
            <InOutWrap>
                    
                <Logo />

                <Center>
                    {user.map((uu)=>{
                        let imageUrl = uu.image_url; // 이미지 URL 사용
                        console.log("url:", imageUrl);

                        

                        {/*  id={uu.id}  작성자 식별할 수 있는 걸로 고쳐야함 */}
                        return(
                                <Lookup_Content 
                                    title={uu.title} 
                                    name={uu.name} 
                                    imageurl={imageUrl} 
                                    description ={uu.description}정
                                    created_at={uu.created_at} 
                                    //year={uu.year}
                                    //month={uu.month}
                                    //day={uu.day}
                                    id={uu.id} 
                                />    
                                )
                            }
                        )} 

                    <InLayoutTwo> {/* 자기 게시글이면 보이게 처리하기  */}
                        <Buttons>
                            <Right> 
                                <EditButton onClick={handelGoEdit}>
                                    수정  
                                </EditButton>

                                <DelectButton onClick={handleDelete}>
                                    삭제
                                </DelectButton>

                                {/* 성공 메시지를 보여주는 부분 */}
                                {showSuccessMessage && <Success text="게시물이 성공적으로 삭제되었습니다." />}

                                {/* 실패 메시지를 보여주는 부분 */}
                                {showErrorMessage && <Success text="게시물 삭제에 실패했습니다." />}
                            </Right>
                        </Buttons>
                    </InLayoutTwo>

                                    
                </Center>
                    
            </InOutWrap>
        </OutWrap>
    );
};

export default Images_Lookup_Comtest;



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

width:80%;
/* tablet 규격 */
@media screen and (max-width: 1024px){
  width:87%;
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
flex-direction: column;
align-items: center;

width: 87%;

`;


const InLayoutTwo = styled.div`
display: flex;

//height:19vh;
align-items: center;
//justify-content: center;

text-align:center;
width:100%;
margin-bottom:30px;
@media screen and (min-width: 1700px) {
    
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
    
    fontSize: 37
    }
    };
   


const ButtonLong = styled(Radius)`
    
    width:18vw;
    height: 7vh; 
    ${FontStyle};

    
    /* s 데스크 */
    @media screen and (max-width: 1024px){
        
    }
    @media screen and (max-width: 850px){
        width:21vw;
    }
    /* mobile 규격 */
    @media screen and (max-width: 680px){
        width:41vw;
        height: 7vh; 
    }

    
    /* s 데스크 */
    @media screen and (min-width: 1025px){
        
    }
    @media screen and (min-width: 1700px) {
        width:18vw;
        height: 7.5vh; 
    };
    `;

const EditButton =styled(ButtonLong)``;
const DelectButton=styled(ButtonLong)`
margin-left:20px;`;


