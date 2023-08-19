import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 



//import GlobalStyles from "./GlobalStyles"; // GlobalStyles 불러오기
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
// 전역 스타일 설정
const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
   // overflow: hidden;
  }
`;
function App() {
    

    return (
    

    <BrowserRouter>
        <GlobalStyle /> 
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
