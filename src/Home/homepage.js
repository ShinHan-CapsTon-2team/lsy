//import React, { useState, useEffect } from 'react';
//import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import logo from '../Images/imagelogo.png';
import family from '../Images/image 13.png';
import pet from '../Images/image 10.png';
import profile from '../Images/image 12.png';
import wedding from '../Images/image 11.png';
import body from '../Images/image 9.png';
import styled from "styled-components";

const OutWrap = styled.div`
      width: 100%;
      height: 100%;
      position: relative;
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  `;
  
  const InsideWrap = styled.div`
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
  `;
  
  const Logo = styled.img`
      width: 55%;
      height: 174px;
      margin-top: 20px;
      margin-bottom: 20px;
      object-fit: contain;
  `;
  
  const CategoryWrap = styled.div``;

  const CategoryImg = styled.img`
      width: 228.43px;
      height: 58px;
      margin-right: 30px;
  `;

  const GridWrap = styled.div`
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 10px;
      width: 100%;
      height: 100vh;
      padding: 20px;
  `;
  
  const GridDiv = styled.div`
      width: 100%;
      height: 100%;
      border-radius: 10px;
      overflow: hidden;
  `;
  
  const GridImg = styled.img`
      width: 100%;
      height: 100%;
      object-fit: cover;
  `;

const Homepage = () => {
  const navigate = useNavigate();

  const handleGohomeClick = () => {
    navigate('/home');
};

  
  const handleCategorySelect = (category) => {
    const queryString = new URLSearchParams({ name: category }).toString();
    navigate(`/home?${queryString}`);
};

    const handleGridImageClick = (id) => {
    const queryString = new URLSearchParams({ id }).toString();
    navigate(`/lookup?${queryString}`);
};

  const [searchParams, setSearchParams] = useSearchParams();
  
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const [posts, setPosts] = useState([]);

    useEffect(() => {
    //  fetch(`http://localhost:4000/home?_limit=${limit}&_start=${offset}`, { method : "GET" })
    //    .then((response) => response.json())
    //    .then((result) => setPosts(result))
    //    .catch((error) => console.error('Error fetching image posts:', error));

    fetch(`http://localhost:4000/home?_limit=${limit}&_start=${offset}`, { method: "GET" })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((result) => setPosts(result))
    .catch((error) => console.error('Error fetching image posts:', error));

    }, [offset, limit]);
   
    const movePage = (pageNumber) => {
      // 1
      searchParams.set('offset', (pageNumber - 1) * 10);
      setSearchParams(searchParams);
    };
  

  return (
    <OutWrap>
      <InsideWrap>
        <Logo src={logo} alt='' onClick={handleGohomeClick}/>
        <CategoryWrap>
          <CategoryImg src={family} alt='' onClick={() => handleCategorySelect('family')} />
        <CategoryImg src={pet} alt='' onClick={() => handleCategorySelect('pet')} /> 
        <CategoryImg src={profile} alt='' onClick={() => handleCategorySelect('profile')} />
        <CategoryImg src={wedding} alt='' onClick={() => handleCategorySelect('wedding')} />
        <CategoryImg src={body} alt='' onClick={() => handleCategorySelect('body')} />
        </CategoryWrap>

        <GridWrap>
        {posts.map(({ id, imageUrl }) => (
          <GridDiv key={id} onClick={() => handleGridImageClick(id)}>
            <GridImg src={imageUrl} alt='' />
          </GridDiv>
        ))}
      </GridWrap>

      <div>
        <button onClick={() => movePage(1)}>1</button>
        <button onClick={() => movePage(2)}>2</button> 
        <button onClick={() => movePage(3)}>3</button> 
      </div>
                
      </InsideWrap>
    </OutWrap>
  );
};

export default Homepage;
