import React ,{useEffect}from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import "./Font/Font.css"

import GlobalStyles from "./GlobalStyles"; // GlobalStyles 불러오기
import Landing from './pages/Landing';
import QuizSelIndex from './Quiz/Quizstart'
import QuizSelPhoto from './Quiz/Quiztest'
import QuizReult from './Quiz/Quizresult'
import Post from './PostUp/Post.js'
import Home from './Home/homepage.js'
import Reco from './PostUp/Reco.js'
import Lookup from './Lookup/Image_Lookup_Comtest'
import  { createGlobalStyle } from "styled-components";  
import ProfileLook from './Mypage/ProfileLook';
import PostEdit from './PostUp/PostEdit';


const GlobalStyle = createGlobalStyle`


  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
   // overflow: hidden;
   //font-family: "GmarketSansTTFBold";
   
  }
  

  
  
`;
function App() {
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }
      useEffect(() => {
        setScreenSize();
      });

    return (
    

    <BrowserRouter>
        <GlobalStyles /> 
        <div className="App" >
            
            <Routes>
                
                <Route path='/' element={<Landing />}/>

                <Route path ='/post' element={<Post />}/>
                
                <Route path ='/quizindex' element={<QuizSelIndex />}/>
                <Route path ='/quiztest' element={<QuizSelPhoto />}/>

                <Route path ='/reco' element={<Reco/>}/>
                <Route path ='/quizresult' element={<QuizReult />}/>

                <Route path ='/home' element={<Home />}/>
                <Route path ='/lookup/:id' element={<Lookup/>}/>
                <Route path ='/postedit/:id' element={<PostEdit/>}/>

                <Route path='/profile' element={<ProfileLook/>}/> {/* 후에 useparams 사용해야 */}
            </Routes>
            
        </div>
    </BrowserRouter>


    );
}

export default App;
