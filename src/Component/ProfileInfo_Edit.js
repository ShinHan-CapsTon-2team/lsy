import React, { useState, useEffect } from 'react';
import { useNavigate, useParams  } from 'react-router-dom'; 
import naveraddress from '../Images/naverIcon.png'
import instaaddress from '../Images/instaIcon.png'
import * as S from './ProfileInfoStyle'

const ProfileInfo_Edit = ({ onEditComplete}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [career, setCareer] = useState('');
  const [insta,setInsta]= useState('');

  const params = useParams(); // 1
  const emailId = params.emailId; // 2
  //const [editing, setEditing] = useState(false);
  
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
            email,
            //1029
            insta
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
  useEffect(() => { 
    fetch(`http://localhost:4003/api/profile/${emailId}`)
            .then((response) => response.json())
            .then((profileData) => { 
              setEmail(profileData.email);
              setNickname(profileData.nickname);
              setCareer(profileData.career);
              setIntroduction(profileData.introduction);
              //1029
              setInsta(profileData.insta);
              console.log('email: ', profileData.email);
              console.log('insta: ', profileData.insta);
     
            })
            .catch((error) => {
              console.error('Error fetching profile data for other user:', error);
            });
  }, [emailId]); 
  return(
    <> 
                <S.One> {/* 이름 이메일  */}
                    <S.Wrap style={{ marginBottom: 10 }}>
                      <S.NickName>{nickname}</S.NickName>
                    </S.Wrap>

                    <S.AddressWrap>
                            <S.Address style={{marginBottom:15}} >
                                
                              <S.AddressImg src={naveraddress} ></S.AddressImg>
                              <S.AddressSpan >{email ||'stapq@naver.com '}</S.AddressSpan>
                            </S.Address> 

                            <S.Address >
                                <S.AddressImg src={instaaddress} ></S.AddressImg>
                                <S.InstTextarea 
                                  value={insta}
                                  onChange={(e) =>setInsta(e.target.value)}
                                  placeholder="인스타그램" 
                                />
                            </S.Address> {/* 링크 복사하게끔  */}
                        </S.AddressWrap>
 
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
                                            onChange={(e) =>setIntroduction(e.target.value)}
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
                                            onChange={(e) =>setCareer(e.target.value)}
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