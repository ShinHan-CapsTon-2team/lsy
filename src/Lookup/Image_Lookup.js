import React, {useParams ,useNavigate} from 'react-router-dom';
import { useEffect,useState } from 'react'
import Header from '../Component/Header';
import Lookup_Content from '../Component/Lookup_Content';
import * as S from './LookupStyle' 
import { DeleteModal } from '../Modal/DeleteModal';
import ReactPaginate from 'react-paginate';
import styled from "styled-components";
import './Paging.css'

import {HiChevronDoubleLeft} from "react-icons/hi";
import {HiChevronDoubleRight} from "react-icons/hi";
const SERVER_URL= 'http://localhost:4000/api/lookup';

function Images_Lookup() {
    const navigate = useNavigate();
    const params = useParams(); 
    const id = params.id; 
    const [isOpen, setIsOpen] = useState(false); // 모달창때문에 있는거 삭제 노
    const [email, setEmail] = useState([]);
    const [user, setUser] = useState([]);
    const [userEmails, setUserEmails] = useState("");
    const postsPerPage = 4; // 한 페이지에 보여줄 게시물 수
    const emailId = userEmails; // 사용자의 emailId
    const [images, setImages] = useState([]);
    const [PostIds, setPostIds] = useState(''); 
    const [TotalCount, setTotalCount] = useState(''); 
    const [page, setPage] = useState(1);  
    const [dataFromChild, setDataFromChild] = useState({}); 
    const pageCount = Math.ceil(TotalCount / postsPerPage);
    const [nickname,setNickname]=useState([]);
    const handleChildData = (data) => {
        // 자식 컴포넌트로부터 받은 데이터를 처리
        setDataFromChild(data);
    };
    const [isMine,setIsMine]= useState(false); // 현 게시글이 내꺼인지 
    const isMe= dataFromChild.emailid;
    console.log("지금 로그인 한 사람 누구야 :",isMe);
    const openModalHandler = () => {
        // 모달창 관련임 자세히 알 필요 X
        setIsOpen(!isOpen);
    };
    const handleImagesClick = (postId) => {
        navigate(`/lookup/${postId}`);
        // 페이지 상단으로 스크롤
        window.scrollTo(0, 0);
    };

//페이지
const handlePageClick = async ({ selected }) => {
    const newPage = selected + 1;
    setPage(newPage);
  //api/profile/:emailId
    try {
      const response = await fetch(
        `http://localhost:4003/api/profile/${emailId}?page=${newPage}&postsPerPage=${postsPerPage}`
      );
      if (!response.ok) {
        throw new Error("페이지를 불러오는 데 문제가 발생했습니다.");
      }
    } catch (error) {
      console.error("게시물을 불러오는 중 에러 발생:", error);
    }
  
    
  };
//페이지네이션을 위한 서버 
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `http://localhost:4003/api/profile/${emailId}?page=${page}&postsPerPage=${postsPerPage}`
            );
            const profileData = await response.json();
         
            setImages(profileData.images);
            setPostIds(profileData.id); 
            setTotalCount(profileData.totalCount);
          } catch (error) {
            console.error('다른 사용자의 프로필 데이터를 가져오는 중에 오류 발생:', error);
          }
        };
      
        fetchData(); // fetchData 함수를 호출하여 데이터를 가져옵니다.
      }, [emailId, page, postsPerPage]);
      

//이메일 아이디 추출용 
    useEffect(() => {
        const fetchData = async () => {
            try {
                // POST 요청으로 서버에 데이터를 보냅니다.
                const requestBody = { id: id };
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
                setEmail(data.userEmail)
                
                setNickname(data.nickname);
                const userEmailFromServer = data.userEmail; // 서버에서 받은 이메일
                const userNicknameFromServer = data.nickname;

                // 이메일 아이디 추출 (이메일에서 "@" 이후의 부분을 제외)
                const emailId = userEmailFromServer.split('@')[0];
        
                console.log("emailId:",emailId);
                setUserEmails(emailId);
                
                if(isMe === emailId)
                {
                    console.log("내꺼")
                    setIsMine(true);
                }
                else{
                    console.log("내꺼아님")
                    setIsMine(false);
                }
                
            } catch (error) {
                console.error('Error fetching user profile:', error);
                console.log('error');
            }
            };
        
            fetchData(); 
        
        }, [isMe]);

    useEffect(() => {
    function getUserList() {
        let reqOption = {
        method: 'get',
        headers: {
            'Accept': 'application/json',
        },
        };

        fetch(`${SERVER_URL}/${id}`, reqOption)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setUser(data);
            
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            
        });
    }

    getUserList();
    }, [id]);
    


    const handelGoEdit = () => {
        navigate(`/postedit/${id}`); 
    };
  
    console.log("누구야",nickname);
    console.log("userEmail:",userEmails);
    console.log("현재 게시글 주인?:",email);
    console.log("가져온 이미지들 :",images);
    return (  
        
        <S.OutWrap>
            <S.InOutWrap>
                    
                <Header onData={handleChildData}/>

                <S.Center>
                  {user.map((uu)=>{
                      let imageUrl = uu.image_url; // 이미지 URL 사용
                      
                      return(
                              <Lookup_Content 
                                  key={uu.id} 
                                  title={uu.title} 
                                  nickname={uu.nickname} 
                                  imageurl={imageUrl} 
                                  description ={uu.description}
                                  created_at={uu.created_at} 
                                  id={uu.id} 
                                  writer={userEmails}
                              />    
                              )
                          }
                      )} 
 
                  
                  {!isMine ? (
                  <>
                    <ListallWrap> 
                      <ListallText> 모든 게시글 목록 </ListallText>
                    </ListallWrap>

                    <ListPostShowWrap >
                      <GridWrap style={{position:'relative',}}>
                      {images.map((image, index) => (
                          <GridDiv key={index}>
                              <GridImg src={image} onClick={() => handleImagesClick(PostIds[index])}  alt="사진" />
                          </GridDiv>
                        ))}
                      </GridWrap>
                    
                      <PageWrap>
                        <ReactPaginate
                              previousLabel={<PreButton />}
                              nextLabel={<NextButton />}
                              breakLabel={''}
                              pageCount={pageCount}
                              onPageChange={handlePageClick}
                              containerClassName={'paginations'}
                              activeClassName={'actives'}
                              pageRangeDisplayed={0} // 페이지 번호를 숨기는 옵션
                              marginPagesDisplayed={0} // 페이지 번호를 숨기는 옵션
                          />
                        </PageWrap>
                    </ListPostShowWrap>
                    </>
                    
                    ) : null}

                  {isMine|| isMe ===  'zxcva98657'  ? ( //수정된 부분 1017, 관리자 수정, 삭제버튼 보이도록 
                  <S.InLayoutTwo> 
                      <S.Buttons>
                      <S.Right> 
                          <S.EditButton  onClick={handelGoEdit}>
                          수정  
                          </S.EditButton>

                          <S.DelectButton onClick={openModalHandler}>
                          삭제
                          </S.DelectButton>
                          {isOpen ? (<DeleteModal isId={id} openModalHandler={openModalHandler}/>) : null}
                      </S.Right>
                      </S.Buttons>
                  </S.InLayoutTwo>
                  ) : null}


                </S.Center>
                    
            </S.InOutWrap>
            
        </S.OutWrap>
    );
};

export default Images_Lookup;

const GridWrap = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(1, 1fr);
gap: 10px;
height: auto;


/* tablet 규격 */
@media screen and (max-width: 1023px){
  
}
@media screen and (max-width: 850px){
  
}
/* mobile 규격 */
@media screen and (max-width: 540px){
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

export const Radius = styled.button`
padding: 20px;
word-wrap: break-word;
border-radius: 30px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background: #798be6;
border: none;
display: flex;
align-items: center;
justify-content: center;

position: relative;
cursor: pointer;
color: white;
`;

export const FontStyle = {
    "@media screen and (max-width: 1024px)": {
      fontSize: 22,
    },
  
    "@media screen and (max-width: 850px)": {
      fontSize: 21,
    },
  
    /* mobile 규격 */
    "@media screen and (max-width: 540px)": {
      fontSize: 19,
    },
    /* tablet 규격 */
    "@media screen and (min-width: 1025px)": {
      fontSize: 24,
    },
    "@media screen and (min-width: 1700px)": {
      fontSize: 37,
    },
  };
  
  
export const Button = styled(Radius)`
  width: 7vw;
  height: 7vh;
  
  ${FontStyle};
  &:hover {
    background: #5d6bb4;
  }

  /* tablet 규격 */
  @media screen and (max-width: 1023px) {
    width: 16vw;
    height: 7vh;
  }

  @media screen and (max-width: 850px) {
  }
  /* mobile 규격 */
  @media screen and (max-width: 540px) {
    width: 30vw;
    height: 7vh;
  }
  /* s 데스크 */
  @media screen and (min-width: 1024px) {
  }
  /* l 데스크 */
  @media screen and (min-width: 1700px) {
    width: 10vw;
    height: 7vh;
  }
`; 

const ButtonStyle = {
  color: 'black',
  width: 45,
  height: 45,

  '&:hover': {
    color: '#5d6bb4'
  }
};

const PreButton = styled(HiChevronDoubleLeft)`
${ButtonStyle}`;
const NextButton = styled(HiChevronDoubleRight)`${ButtonStyle}`;


const ListallWrap = styled.div`
  width: 100%; 
`;

const ListallText = styled.span`
${FontStyle};
  display: flex; 
  text-align: left; 
  margin-bottom: 1vh; 
`;

const ListPostShowWrap = styled.div`
width: 100%; 
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
`;

const PageWrap = styled.div`
  position: absolute;
 // z-index: 2;
  top: 100px;
  width: 115%;
`;


