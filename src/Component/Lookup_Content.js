
import  {useNavigate } from 'react-router-dom';
import profilelogo from '../Images/i2.png'
import * as S from '../Lookup/LookupStyle'
import React, { useState } from 'react';
const Lookup_Content =({ title,nickname,imageurl,description,created_at,id}) => {
    //page 이동 
    const navigate = useNavigate();
    //const { id } = useParams();
    const [otherUser, setOtherUser] = useState({});
    const [loading, setLoading] = useState(true);
    //const params = useParams(); // 1
   // const id = params.id; // 2
    const [Nickname, setNickname] = useState('');

    function displayText(text) {
        // 개행 문자 (\n)를 <br> 태그로 변환
        const lines = text.split('\n');
        return lines.map((line, index) => (
            <S.Font key={index} style={{marginBottom:5}}>
                {line}
                {index !== lines.length - 1 && <br />}
            </S.Font>
            ));
        }

    const handleGoProfile = async () => {
        try {
            setLoading(true);
        
            // POST 요청으로 서버에 데이터를 보냅니다.
            const requestBody = { id: id }; // 수정해야 할 게시글 ID
            const response = await fetch(`http://localhost:4003/api/profiles/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
            });
        
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
        
            const data = await response.json();
            const userEmailFromServer = data.userEmail; // 서버에서 받은 이메일
            const userNinameServer=data.nickname;
            setOtherUser(data);
            setLoading(false);
            console.log(userEmailFromServer);
            console.log(userNinameServer);

            // 이메일 아이디 추출 (이메일에서 "@" 이후의 부분을 제외)
            const emailId = userEmailFromServer.split('@')[0];
            setNickname(userNinameServer); // 작성자의 닉네임을 설정
            
            // 여기서 navigate 함수 호출
            navigate(`/profile/${emailId}`);
            

        } catch (error) {
            console.error('Error fetching user profile:', error);
            console.log('error');
            setLoading(false);
        }
        };

    return (
        <S.InLayoutOne>  
            <S.Content>
                <S.ContentTitle> {/*제목*/}
                    <S.WrapBasic>
                        <S.Font> {title || 'none'} </S.Font>
                    </S.WrapBasic>

                    <S.WrapBasic> {/* 날짜 */}
                        <S.At>{created_at || 'none'}</S.At>
                    </S.WrapBasic>
                </S.ContentTitle>

                <S.ContentProfile> {/* 이름 */}
                    <S.ProfileImgWrap > 
                        <S.ProfileImg src={profilelogo} onClick={handleGoProfile} />
                    </S.ProfileImgWrap>
                    <S.ContentBasic  style={{flex:1}}>{/*이름 */}
                        <S.WrapBasic>
                            <S.Font>{nickname || 'none'}</S.Font>
                        </S.WrapBasic>
                    </S.ContentBasic>
                </S.ContentProfile>

                <S.ContentImgDes>{/* 이미지/설명 */}
                    <S.BoxRadius > {/* 이미지 */}
                        <S.Img src={imageurl} alt='이미지' />
                    </S.BoxRadius>
                    
                    <S.BoxRadius> {/* 설명 */}
                        {displayText(description)}
                    </S.BoxRadius>
                </S.ContentImgDes>
                
            </S.Content>  
        </S.InLayoutOne> 

    );
}; 
export default Lookup_Content;
