

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './ProfileInfoStyle'

const ProfileInfo = () => {
    const [userinfo, setUserinfo] = useState([]);
    const [introduction, setIntroduction] = useState('');
    const [career, setCareer] = useState('');
    const [otherUserNickname, setOtherUserNickname] = useState('');
    const [otherUserEmail, setOtherUserEmail] = useState('');
    const [otherIntrodution, setOtherIntrodution] = useState('');
    const [otherCareer, setOtherCareer] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const params = useParams(); // 1
    const emailId = params.emailId; // 사용자의 email

    const isCurrentUsersProfile = userinfo.nickname === otherUserNickname;
    
    const gotoProfileEdit = () => {
        setIsEditing(true);
      };
   
    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");
      
        if (accessToken) {
          // 현재 사용자 정보 가져오기
          fetch('http://localhost:4001/api/user', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ accessToken }),
          })
          .then((response) => response.json())
          .then((data) => {
            setUserinfo(data);
            console.log("현재 접속중인 사용자 이메일:", data.email);
            console.log("현재 접속중인 사용자 닉네임:", data.nickname);
      
            // 프로필 정보 가져오기
            const fetchProfileData = (email) => {
              fetch(`http://localhost:4002/api/profile?email=${email}`)
                .then((response) => response.json())
                .then((profileData) => {
                  setIntroduction(profileData.introduction);
                  setCareer(profileData.career);
                })
                .catch((error) => {
                  console.error(`Error fetching profile data for ${email}:`, error);
                });
            }
      
            if (data.email !== emailId) {
              // 다른 사용자의 정보를 가져오기
              fetch(`http://localhost:4003/api/profile/${emailId}`)
                .then((response) => response.json())
                .then((profileData) => {
                  setOtherIntrodution(profileData.introduction);
                  setOtherCareer(profileData.career);
                  
      
                  // 다른 사용자의 닉네임과 이메일을 설정합니다.
                  setOtherUserNickname(profileData.nickname);
                  setOtherUserEmail(profileData.email);
      
                  // 현재 사용자의 프로필 정보 가져오기
                  fetchProfileData(data.email);
                })
                .catch((error) => {
                  console.error('Error fetching profile data for other user:', error);
                });
            } else {
              // 현재 사용자의 프로필 정보 가져오기
              fetchProfileData(data.email);
            }
          })
          .catch((error) => {
            console.error('Error fetching user email:', error);
          });
        }
      }, [emailId]);// emailId를 의존성 배열에 추가하여 URL 파라미터가 변경될 때만 실행

      function DisplayText(text) { // 설명에서 \n 처리
        const lines = text.split('\n');
        return lines.map((line, index) => (
            <S.Font style={{textAlign:'left'}} key={index}>
                {line}
                {index !== lines.length - 1 && <br />}
            </S.Font>
            ));
        } 

    

    return(
        <>
                <S.One> {/* 이름 이메일  */}
                   
                        <S.Wrap style={{marginBottom:10}}>
                            <S.NickName>{isCurrentUsersProfile ? userinfo.nickname ||'': (otherUserNickname || '')}</S.NickName>
                        </S.Wrap>
                        
                        <S.Wrap>
                            <S.Email>{isCurrentUsersProfile ? userinfo.email ||' ': (otherUserEmail || ' ')}</S.Email> {/* 링크 복사하게끔  */}
                        </S.Wrap>
                   
                </S.One>
                
                <S.Two>   {/* 소개 커리어  */}

                    <S.InfoWrap >
                        <S.Left >
                            <S.Whatgray> 소개</S.Whatgray>
                        </S.Left>
                        <S.Left style={{marginTop:10,flexDirection:'column'}}>
                        {isCurrentUsersProfile ? DisplayText(introduction) : DisplayText(otherIntrodution)}
                        </S.Left>
                    </S.InfoWrap>
                
                    <S.InfoWrap>
                    
                        <S.Left >
                                <S.Whatgray> 커리어</S.Whatgray>
                        </S.Left>
                        <S.Left style={{marginTop:10,flexDirection:'column'}}>
                            {isCurrentUsersProfile ? DisplayText(career) : DisplayText(otherCareer)} 
                        </S.Left>
                    </S.InfoWrap>
                </S.Two>
        
        </>   
    );
};
export default ProfileInfo;