import React ,{useEffect}from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import GlobalStyles from "./Style/GlobalStyles"; // GlobalStyles 불러오기

import Landing from './pages/Landing';
import QuizSelIndex from './Quiz/Quizstart';
import QuizSelPhoto from './Quiz/Quiztest';
import QuizReult from './Quiz/Quizresult';
import Post from './PostUp/Post.js';
import Home from './Home/homepage.js';
import Reco from './Recommend/Reco'
//import Reco12 from './Recommend/Reco12'
//import Reco11 from './Recommend/Reco11'
import RecoResult from './Recommend/RecoResult';
import Lookup from './Lookup/Image_Lookup' 
import ProfileLook from './Mypage/ProfileLook';
import PostEdit from './PostUp/PostEdit';
import QuizFrist from'./Quiz/Quizfirst';

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
                <Route path ='/home' element={<Home/>}/>

                <Route path ='/post' element={<Post />}/>
                
                <Route path ='/quizindex' element={<QuizSelIndex />}/>

                <Route path ='/quiztest' element={<QuizSelPhoto />}/>
                <Route path ='/quizresult' element={<QuizReult />}/>
                <Route path='/quizfrist' element={<QuizFrist/>}/>
                <Route path ='/reco' element={<Reco/>}/>
                {/* <Route path ='/reco12' element={<Reco12/>}/>
                <Route path ='/reco11' element={<Reco11/>}/> */}
                <Route path='/recoresult' element={<RecoResult/>}/>
                
                <Route path ='/lookup/:id' element={<Lookup/>}/>
                <Route path ='/postedit/:id' element={<PostEdit/>}/>

                <Route path='/profile/:emailId' element={<ProfileLook/>}/> 
            </Routes>
            
        </div>
    </BrowserRouter>


    );
}

export default App;
