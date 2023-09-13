
import  {useNavigate } from 'react-router-dom';
import profilelogo from '../Images/i2.png'
import * as S from '../Lookup/LookupStyle'
import React, { useState } from 'react';
const Lookup_Content =({ title,nickname,imageurl,description,created_at,id}) => {
    
    const navigate = useNavigate();
    const [otherUser, setOtherUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [Nickname, setNickname] = useState('');

    function DisplayText(text) { // 설명에서 \n 처리  
        const lines = text.split('\n');
        return lines.map((line, index) => (
            <S.Font key={index} style={{marginBottom:5}}>
                {line}
                {index !== lines.length - 1 && <br />}
            </S.Font>
            ));
        }
    //시간 처리하기
    const timestamp = created_at; 
    console.log("timestamp",timestamp);
        // UTC Timestamp를 한국 시간대로 변환
    const dateUTC = new Date(timestamp);
    const offsetInMilliseconds = 9 * 60 * 60 * 1000;
    const dateKST = new Date(dateUTC.getTime() + offsetInMilliseconds);
    console.log("dateKST",dateKST);
    
    const year = dateKST.getFullYear(); // 연도 추출
    const month = dateKST.getMonth() + 1; // 월 추출 (0부터 시작하므로 +1)
    const day = dateKST.getDate(); // 일 추출
    const hour= dateKST.getHours();
    const min = dateKST.getMinutes();
    const postdate= dateKST.getFullYear()+"-"+dateKST.getMonth() + 1+"-"+dateKST.getDate()+"  "+dateKST.getHours()+":"+dateKST.getMinutes();
    console.log("postdate",postdate);

    //console.log(`연도: ${year}, 월: ${month}, 일: ${day}`);
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
                        <S.At>{postdate || 'none'}</S.At>
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
                    <S.BoxRadius style={{padding:30}}> {/* 이미지 */}
                        <S.Img src={imageurl} alt='이미지' />
                    </S.BoxRadius>
                    
                    <S.BoxRadius> {/* 설명 */}
                        {DisplayText(description)}
                    </S.BoxRadius>
                </S.ContentImgDes>
                
            </S.Content>  
        </S.InLayoutOne> 

    );
}; 
export default Lookup_Content;
