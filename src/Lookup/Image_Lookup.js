import React, {useParams ,useNavigate} from 'react-router-dom';
import { useEffect,useState } from 'react'
import Logo from "../Component/Header"
import Lookup_Content from '../Component/Lookup_Content';
import Loading from '../Component/Loading';
import {Popup} from '../Modal/Popup';
import * as S from './LookupStyle'

const SERVER_URL= 'http://localhost:4000/api/lookup';

function Images_Lookup() {
    const navigate = useNavigate();

    const params = useParams(); 
    const id = params.id; 
    //확인용
    //console.log( 'params:',params);
    //console.log('id:',id);


    //삭제 성공/실패 모달창 
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    // API로부터 받아온 데이터를 저장할 상태 변수
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");

    // 서버로 액세스 토큰을 보내서 사용자 이메일 정보를 요청
    if (accessToken) {
        fetch('http://localhost:4001/api/user', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ accessToken }),
        })
          .then((response) => response.json())
          .then((data) => {
            setUserEmail(data.email);
            console.log("현재 접속중인 사용자 이메일:", data.email);
          })
          .catch((error) => {
            console.error("Error fetching user email:", error);
          });
      }
    }, []);
    
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

                } else { 
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
        
        <S.OutWrap>
            <S.InOutWrap>
                    
                <Logo />

                <S.Center>
                    {user.map((uu)=>{
                        let imageUrl = uu.image_url; // 이미지 URL 사용
                        //console.log("url:", imageUrl);
                        
                        return(
                                <Lookup_Content 
                                    key={uu.id} 
                                    title={uu.title} 
                                    nickname={uu.nickname} 
                                    imageurl={imageUrl} 
                                    description ={uu.description}
                                    created_at={uu.created_at} 
                                    id={uu.id} 
                                />    
                                )
                            }
                        )} 

                    {user.length > 0 && userEmail === user[0].email && (
                    <S.InLayoutTwo> {/* 자기 게시글이면 보이게 처리하기  */}
                        <S.Buttons>
                            <S.Right> 
                                <S.EditButton onClick={handelGoEdit}>
                                    수정  
                                </S.EditButton>

                                <S.DelectButton onClick={handleDelete}>
                                    삭제
                                </S.DelectButton>
                                

                                {/* 성공 메시지를 보여주는 부분 */}
                                {showSuccessMessage && <Popup text="게시물이 성공적으로 삭제되었습니다." />}

                                {/* 실패 메시지를 보여주는 부분 */}
                                {showErrorMessage && <Popup text="게시물 삭제에 실패했습니다." />}
                            </S.Right>
                        </S.Buttons>
                    </S.InLayoutTwo>
                    )}

                                    
                </S.Center>
                    
            </S.InOutWrap>
        </S.OutWrap>
    );
};

export default Images_Lookup;



