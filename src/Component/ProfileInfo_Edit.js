import React, { useState, useEffect } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';

import * as S from './ProfileInfoStyle'

const ProfileInfo_Edit = ({ onEditComplete  }) => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [career, setCareer] = useState('');
  const [user, setUser] = useState({
    nickname: '',
    introduction: '',
    career: '',
  });
  const params = useParams(); // 1
  const emailId = params.emailId; // 2
  //const [editing, setEditing] = useState(false);

  //const gotoProfileEdit = () => {
  //  setEditing(true); // 수정 모드로 전환
  //};

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
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
          setUser(data);
          console.log("현재 접속중인 사용자 이메일:", data.email);
          console.log("현재 접속중인 사용자 닉네임:", data.nickname);
          // 서버로 이메일 정보를 보내어 프로필 정보를 가져옵니다.
          fetch(`http://localhost:4002/api/profile?email=${data.email}`)
            .then((response) => response.json())
            .then((profileData) => {
              setIntroduction(profileData.introduction);
              setCareer(profileData.career);
            })
            .catch((error) => {
              console.error('Error fetching profile:', error);
            });
        })
        .catch((error) => {
          console.error('Error fetching user email:', error);
        });
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // 프로필 정보를 서버에 보내는 로직 
    try {
      const response = await fetch(
        'http://localhost:4002/api/profileEdit',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            introduction,
            career,
            email: user.email,
          }),
        },
      );
      if (response.ok) {
        // 서버 응답이 정상인 경우 처리
        console.log('프로필 정보 업데이트 성공');
        
         // 수정 완료 시 부모 컴포넌트에 알림!!!!!
        onEditComplete();
      } else {
        // 서버 응답이 실패한 경우 처리
        console.error('프로필 정보 업데이트 실패');
      }
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

    return(
     <>

                <S.One> {/* 이름 이메일  */}
                            <S.Wrap style={{ marginBottom: 10 }}>
                            <S.NickName>{user.nickname}</S.NickName>
                            </S.Wrap>

                        <S.Wrap>
                            <S.Email>{user.email}</S.Email>
                        </S.Wrap>
                  

                </S.One>
                
                <S.Two>  {/* 소개 커리어  */}

                    <S.InfoWrap>
                        
                        <S.Left >
                             <S.Whatgray> 소개 </S.Whatgray>
                        </S.Left>

                        <S.Left style={{marginTop:10 ,width:'100%'}}>
                                <S.WrapPer>
                                        <S.TextareaBasic
                                            value={introduction}
                                            onChange={(e) => setIntroduction(e.target.value)}
                                            placeholder="소개" 
                                        />
                                </S.WrapPer>
                        </S.Left>
                    </S.InfoWrap>
                
                    <S.InfoWrap>
                        
                        <S.Left >
                            <S.Whatgray> 커리어 </S.Whatgray>
                        </S.Left>

                        <S.Left style={{marginTop:10,width:'100%'}}>
                            <S.WrapPer>
                                        <S.TextareaBasic
                                            value={career}
                                            onChange={(e) => setCareer(e.target.value)}
                                            placeholder="커리어" 
                                        />
                            </S.WrapPer>
                        </S.Left>
                    </S.InfoWrap>
                </S.Two>

            
            
            <S.ButtonShort onClick={handleSubmit}>프로필 수정 완료 </S.ButtonShort>
      </>
    );
};
export default ProfileInfo_Edit;