
import { BsPlusCircleFill } from 'react-icons/bs'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ProfileInfo from '../Component/ProfileInfo';
import ProfileInfo_Edit from '../Component/ProfileInfo_Edit';
import Logo from "../Component/Header"
import styled from "styled-components";

import {ProfileWrap,ButtonShort} from '../Component/ProfileInfoStyle'
const SERVER_URL= 'http://localhost:4000/api/lookup';


function ProfileLook() { 

  const [userinfo, setUserinfo] = useState([]);
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [otherUserNickname, setOtherUserNickname] = useState('');
  const [PostIds, setPostIds] = useState('');
  const [isEditing, setIsEditing] = useState(false);

 
  const navigate = useNavigate();
  const params = useParams(); // 1
  const emailId = params.emailId; // 사용자의 email

  const isCurrentUsersProfile = userinfo.nickname === otherUserNickname;
  
  const handleImageClick = (id) => {
    navigate(`/lookup/${id}`);
};

  const handleImagesClick = (postId) => {
    navigate(`/lookup/${postId}`);
  };

  const goToWorkUpload =()=>{
    navigate('/post');
  };

const gotoProfileEdit = () => {
setIsEditing(true);
};

const handleEditComplete = () => {
setIsEditing(false); // 수정 완료 시 isEditing을 false로 변경하여 ProfileInfo로 전환
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
      console.log("현재 접속중인 사용자 이메일:", data.email);
      console.log("현재 접속중인 사용자 닉네임:", data.nickname);

      if (data.email !== emailId) {
        // 다른 사용자의 정보를 가져오기
        fetch(`http://localhost:4003/api/profile/${emailId}`)
          .then((response) => response.json())
          .then((profileData) => {
            setImages(profileData.images);
            console.log("이미지 URL:", profileData.images); 
            setPostIds(profileData.id);
            console.log("게시글 ID:", profileData.id); 

          })
          .catch((error) => {
            console.error('Error fetching profile data for other user:', error);
          });
      }
    })
    .catch((error) => {
      console.error('Error fetching user email:', error);
    });
  }
}, [emailId]);// emailId를 의존성 배열에 추가하여 URL 파라미터가 변경될 때만 실행


useEffect(() => {
  async function fetchPosts() {
    try {
      const response = await fetch('http://localhost:4000/api/lookup');
      const data = await response.json();

      // 현재 사용자의 이메일과 일치하는 데이터만 필터링
      const filteredData = data.filter(item => item.email === userinfo.email);
      setPosts(filteredData);
      
      console.log("Filtered data:", filteredData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  fetchPosts();
}, [userinfo]);
    
    return (
        <OutWrap>
            <InOutWrap>
            
                {/* 홈페이지 로고 같*/}        
                <Logo />

                <Center>
                <ProfileWrap>

                {isEditing ? (
                          <ProfileInfo_Edit onEditComplete={handleEditComplete}/>
                        ) : (
                          <><ProfileInfo /><ButtonShort onClick={gotoProfileEdit}>프로필 수정</ButtonShort></>
                )}
                </ProfileWrap>
                  <ArticleWrap>
                      <Two >
                        <>
                        {isCurrentUsersProfile ? (
                         // 현재 사용자의 프로필을 보고 있다면 post를 렌더링합니다.
                          <GridWrap>
                            {posts.map((post, index) => (
                              <GridDiv key={index}>
                                <GridImg src={post.image_url} onClick={() => handleImageClick(post.id)} alt="사진"/>
                              </GridDiv>
                            ))}
                        </GridWrap>
                      ) : (
                      // 다른 사용자의 프로필을 보고 있다면 images를 렌더링합니다.
                      <GridWrap>
                        {images.map((image, index) => (
                          <GridDiv key={index}>
                              <GridImg src={image} onClick={() => handleImagesClick(PostIds[index])}  alt="사진" />
                              
                          </GridDiv>
                        ))}
                      </GridWrap>
                      )}
                        </>

                      </Two>

                  </ArticleWrap>
                    
                </Center>
            </InOutWrap>

            {isCurrentUsersProfile && (
              <PostWrap>
                <StyledBsPlusCircleFill onClick={goToWorkUpload} />
              </PostWrap>
            )}
        </OutWrap>

    );
}
export default ProfileLook;



const ArticleWrap = styled.div`
width:75%;
margin-left:10px;
@media screen and (max-width: 1024px){
  width:75%;
}

@media screen and (max-width: 850px){
  //margin-left:10px;
  width:100%;
}
/* mobile 규격 */
@media screen and (max-width: 540px){
  margin-left:0px;
  width:90%;
}

/* s 데스크 */
@media screen and (min-width: 1025px){
  
  width:73%;
}
/* l 데스크 */
@media screen and (min-width: 1700px){
  width:73%;
}
`;
const GridWrap = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 1fr);
gap: 10px;
//width: 75%;
height: auto;
//min-height:80vh;
//padding: 20px;
//margin-top:20px;


/* tablet 규격 */
@media screen and (max-width: 1023px){
  //width: 90%;
}
@media screen and (max-width: 850px){
  //width: 90%;
}
/* mobile 규격 */
@media screen and (max-width: 540px){
  //width: 93%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 5px;
  
}
/* s 데스크 */
@media screen and (min-width: 1024px){
    
}
/* l 데스크 */
@media screen and (min-width: 1700px){
    
}
`;

const GridDiv = styled.div`
  width: 100%;
  height: 36vh;
  border-radius: 10px;
  overflow: hidden;

  /* tablet 규격 */
  @media screen and (max-width: 1023px){
    height: 26vh;
  }
  @media screen and (max-width: 850px){
    height: 24vh;
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px){
    height: 30vh;
  }
  /* s 데스크 */
  @media screen and (min-width: 1024px){
      
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px){
      
  }
`;

const GridImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px; 
  object-fit: cover;
`;


const OutWrap = styled.div`
width: 100%;
height: 100vh;

position: relative;

background: white;

display: flex;
flex-direction: column;
// justify-content: center;
align-items: center;


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

    @media screen and (max-width: 850px){
      //width:90%;
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
flex-direction: row;
//align-items: center; 
width: 100%;
//width: 90%;
//height:100%;
margin-top:20px;
//justify-content: space-between; //고려


/* mobile 규격 */
@media screen and (max-width: 540px){
  flex-direction: column;
  align-items:center;
}
`;

const ContentRadius = styled.div`
word-wrap: break-word;
border-radius: 31px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


padding: 40px;
margin-bottom:20px;
@media screen and (max-width: 850px){
  padding: 20px;
}




@media screen and (max-width: 1600px) {
  border: 3px #3A76EF solid;
  };
  
  @media screen and (max-width: 540px) {
  margin-top: 15px;
  border: 2px #3A76EF solid;
  };
  
  @media screen and (min-width: 1601px) {
  border: 4px #3A76EF solid;
  };
`;



const Two = styled(ContentRadius)`
display: flex;
align-items: center;

//width:75%;

height:auto;
min-height:65vh;
`;


const PostWrap =styled.div`
text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* 수평 정렬을 오른쪽으로 변경 */
    justify-content: flex-end; /* 수직 정렬을 아래쪽으로 변경 */
    position: fixed; /* 위치를 고정 */
    bottom: 100px; /* 아래쪽 여백을 20px로 설정 */
    right: 50px; /* 오른쪽 여백을 20px로 설정 */

    /* tablet 규격 */
    @media screen and (max-width: 1023px){
        
    }

    /* mobile 규격 */
    @media screen and (max-width: 540px){
      bottom: 120px; /* 아래쪽 여백을 20px로 설정 */
      right: 25px; /* 오른쪽 여백을 20px로 설정 */
    }
    /* s 데스크 */
    @media screen and (min-width: 1024px){
      
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){
      bottom: 130px; /* 아래쪽 여백을 20px로 설정 */
      right: 80px;
    }
`;

const StyledBsPlusCircleFill = styled(BsPlusCircleFill)`
    width: 70px;
    height: 70px;
    color:#798BE6;
    cursor:pointer;
    &:hover {
      color:#5D6BB4;
    }

    /* tablet 규격 */
    @media screen and (max-width: 1023px){
        width: 75px;
      height:75px;
    }

    /* mobile 규격 */
    @media screen and (max-width: 540px){
      width: 63px;
      height:63px;
    }
    /* s 데스크 */
    @media screen and (min-width: 1024px){
        
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){
      width: 90px;
      height:90px;
    }
    `;