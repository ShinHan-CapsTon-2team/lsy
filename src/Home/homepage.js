import { useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import HeaderHome from "../Component/HeaderHome";
import { LoginModal } from "../Modal/LoginModal";
import * as S from "./homeStyle";
import * as C from "../Style/CommonStyle";

const categoriesData = [
  { name: "바디프로필" },
  { name: "반려동물" },
  { name: "가족사진" },
  { name: "증명사진" },
  { name: "웨딩사진" },
];

const Homepage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("가족사진");
  const accessToken = localStorage.getItem("access_token"); // 로컬 스토리지에서 액세스 토큰 가져오기
  const [selectCategory, setSelectCategory] = useState("가족사진");
  const [pageNumber, setPageNumber] = useState(1);
  const limit = 20; // 한 페이지당 이미지 수 설정
  const [offset, setOffset] = useState(0); //offset 초기값

  const [isOpen, setIsOpen] = useState(false); // 모달창때문에 있는거 삭제 노
  const openModalHandler = () => {
    // 모달창 관련임 자세히 알 필요 X
    setIsOpen(!isOpen);
  };

  //버튼
  const selectCate = (categoryName) => {
    setSelectCategory(categoryName);
  };

  const handleCategorySelect = useCallback(
    (category, limit, offset) => {
      //const queryString = new URLSearchParams({ category }).toString();
      const queryString = new URLSearchParams({
        category,
        limit,
        offset,
      }).toString();

      console.log("Category value:", category);

      fetch(`http://localhost:4000/api/home/${category}?${queryString}`) // 요청
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json(); // 반환
        })
        .then((data) => {
          setUsers(data); // 데이터 저장
          console.log(data); // 받아온 데이터를 콘솔에 출력하거나 원하는 로직으로 처리합니다.
          navigate(`/home?${queryString}`);
          setSelectedCategory(category);
        })
        .catch((error) => {
          // 오류 처리
          console.error(error);
        });
    },
    [navigate]
  );

  useEffect(() => {
    //컴포넌트가 마운트될 때 '가족사진' 데이터를 불러옵니다
    handleCategorySelect(selectedCategory, limit, offset);
  }, [selectedCategory, offset, handleCategorySelect]);

  // page

  // lookup page
  const handleClick = (id) => {
    console.log("Clicked with id:", id); // 확인용
    if (id !== undefined) {
      navigate(`/lookup/${id}`);
    } else {
      console.error("Invalid id:", id);
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
      const newOffset = (newPageNumber - 1) * limit;
      setPageNumber(newPageNumber);
      setOffset(newOffset);
      handleCategorySelect(selectedCategory, limit, newOffset);
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
    if (accessToken) {
      openModalHandler(); // accessToken이 true인 경우 모달 열기
    } else {
      navigate("/post"); // accessToken이 false인 경우 /post로 이동
    }
  };

  return (
    <S.OutWrap>
      <S.InsideWrap>
        {/* 로고 */}
        <HeaderHome />

        <S.CategoryWrap>
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
              //console.log("url:", imageUrl);
              return (
                <S.GridDiv key={user.id}>
                  <S.GridImg
                    src={imageUrl}
                    onClick={() => handleClick(user.id)}
                    alt="사진"
                  />
                </S.GridDiv>
              );
            })}
        </S.GridWrap>

        <S.PaginationWrap>
          <S.ButtonShort
            onClick={handleGoToPreviousPage}
            disabled={pageNumber === 1}
          >
            이전
          </S.ButtonShort>
          <S.ButtonShort
            onClick={() => movePage(pageNumber + 1)}
            disabled={!users || users.length < limit}
          >
            다음
          </S.ButtonShort>
        </S.PaginationWrap>
      </S.InsideWrap>

      <S.PostWrap>
        <C.StyledBsPlusCircleFill onClick={goToWorkUpload} />
        {isOpen ? (
          <S.ModalBackdrop onClick={openModalHandler}>
            <LoginModal />
          </S.ModalBackdrop>
        ) : null}
      </S.PostWrap>
    </S.OutWrap>
  );
};

export default Homepage;
