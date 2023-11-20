import { useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header"
import { LoginModal } from "../Modal/LoginModal";
import * as S from "./homeStyle";
import * as C from "../Style/CommonStyle";

import ImageWithHover from './ImageWithHover';

const categoriesData = [
  { name: '바디프로필'},
  { name: '반려동물' },
  { name: '가족사진' },
  { name: '증명사진' },
  { name: '웨딩사진' },
];

const categoryLabels  = {
    '바디프로필': 'body',
    '반려동물': 'dog',
    '가족사진': 'family',
    '증명사진': 'profile',
    '웨딩사진': 'wedding',
};

const Homepage = () => {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  //데이터 불러오는 
  const [selectedCategory, setSelectedCategory] = useState('family');
  // 버튼
  const [selectCategory, setSelectCategory] = useState('가족사진');
  const [isOpen, setIsOpen] = useState(false); // 모달창때문에 있는거 삭제 노 
  const [pageNumber, setPageNumber] = useState(1);
  const limit = 20; // 한 페이지당 이미지 수 설정
  const [offset, setOffset] = useState(0); //offset 초기값
  const [dataFromChild, setDataFromChild] = useState({}); //!!!

  
  const handleChildData = (data) => {
    // 자식 컴포넌트로부터 받은 데이터를 처리
    setDataFromChild(data);
  };
  const access = dataFromChild.accesstoken; 
  
  const openModalHandler = () => { // 모달창 관련임 자세히 알 필요 X 
    setIsOpen(!isOpen) 
  };

    //버튼 
  const selectCate = (categoryName) => {
    setSelectCategory(categoryName);
  };


    

  const handleCategorySelect = useCallback((category, limit, offset) => {
    // 영어 카테고리를 한글로 변환
    const koreanCategory = categoryLabels[category] || category;
    
    const queryString = new URLSearchParams({
      category: koreanCategory,
      limit,
      offset,
    }).toString();

    console.log('Category value:', koreanCategory); // 한글 카테고리

    fetch(`http://localhost:4000/api/home/${koreanCategory}?${queryString}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        
        navigate(`/?${queryString}`);
        setSelectedCategory(koreanCategory);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [navigate]);
  console.log('name',  users.nickname);

  function scrollToTop() {
    const currentY = window.scrollY;
    if (currentY > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentY - 60); // 20은 스크롤 속도를 조절하는 값입니다.
    }
  }

  useEffect(() => {
   //컴포넌트가 마운트될 때 '가족사진' 데이터를 불러옵니다
  handleCategorySelect(selectedCategory, limit, offset);

  scrollToTop();
  }, [selectedCategory, offset, handleCategorySelect]); 


  // lookup page
  const handleClick = (id) => {
    console.log('Clicked with id:', id); // 확인용
    if (id !== undefined) {
      
      navigate(`/lookup/${id}`);
    } else {
      console.error('Invalid id:', id);
    }
  };

  // 다음페이지
  const movePage = (newPageNumber) => {
    //const newPageNumber = Math.max(1, pageNumber);
    
    const newOffset = (newPageNumber - 1) * limit;
    setPageNumber(newPageNumber);
    setOffset(newOffset);
  };

    // 이전페이지
    const handleGoToPreviousPage = () => {
      const newPageNumber = pageNumber - 1;
      if (newPageNumber >= 1) {
        const newOffset  = (newPageNumber - 1) * limit;
        setPageNumber(newPageNumber);
        setOffset(newOffset);
        handleCategorySelect(selectedCategory, limit, newOffset );
      }
    };

      // 카테고리 클릭할 때마다 초기화
      const handleCategoryClick = (newCategory) => {
        const newOffset = 0; // 카테고리 클릭 시 offset 초기화
        
        setSelectedCategory(newCategory);
        setOffset(newOffset);
        movePage(1); // 첫 페이지로 이동
      };

      
  const goToWorkUpload = () => {
      navigate("/post"); // accessToken이 false인 경우 /post로 이동
    
  };


  return (
    <C.OutWrap style={{height:'100%'}}>
      <C.InsideWrap>
        <Header onData={handleChildData}/>
        
        <S.CategoryWrap >
          
          {categoriesData &&
            categoriesData.map((category, index) => (
              <S.CategoryMenu 
                key={index}
                isselected={selectCategory === category.name ? "true" : "false"}
                onClick={() => {
                  handleCategoryClick(category.name);
                  selectCate(category.name);
                }}
                style={{
                  marginRight: index === categoriesData.length - 1 ? "0px" : "",
                }}
              >
                {category.name}
              </S.CategoryMenu>
            ))}
            
        </S.CategoryWrap>
        
        <S.GridWrap>
          {users &&
            users.map((user) => {
              const imageUrl = user.image; // 이미지 URL 사용
              console.log("users.length < limit ", users.length);
              //console.log("url:", imageUrl);
              return (
                <S.GridDiv key={user.id}>
                  
                    <ImageWithHover
                      imageUrl={imageUrl}
                      onClick={() => handleClick(user.id)}
                      alt="사진"
                      nickname={user.nickname}/>
                </S.GridDiv>
              );
            })}
        </S.GridWrap>

        <S.PaginationWrap>
          {!(users.length < limit && pageNumber === 1) &&  (
            <>
            {!(pageNumber === 1) &&
              <S.ButtonShort
                onClick={handleGoToPreviousPage}
                disabled={pageNumber === 1}
              >
                이전
              </S.ButtonShort>
              }     
              <S.ButtonShort
                onClick={() => {
                  movePage(pageNumber + 1);
                }}
                disabled={!users || users.length < limit} >
                다음
              </S.ButtonShort>
            </>
          )}
        </S.PaginationWrap>

      </C.InsideWrap>

      <S.PostWrap>{/* 컴포넌트 */}
        <C.StyledBsPlusCircleFill onClick={access ? goToWorkUpload : openModalHandler} />

        {isOpen && (
          access ? ( // 액세스 토큰이 있는 경우
            <>

            </>
          ) : (
            // 액세스 토큰이 없는 경우
            <S.ModalBackdrop onClick={openModalHandler}>
              <LoginModal />
            </S.ModalBackdrop>
          )
        )}

      </S.PostWrap>
    </C.OutWrap>
  );
};

export default Homepage;