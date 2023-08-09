import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 


import Landing from './pages/Landing';
import QuizSelIndex from './Quiz/Quizstart'
import QuizSelPhoto from './Quiz/Quiztest'
import QuizReult from './Quiz/Quizresult'
import Post from './PostUp/Post.js'
import Home from './Home/homepage.js'
import Reco from './PostUp/Reco.js'

//import Lookup from './Lookup/Images_Lookup.js' // 조회
import Lookup from './Lookup/Image_Button'

function App() {
    

    return (
        
    <BrowserRouter>
        <div className="App" >
            <Routes>
                <Route path='/' element={<Landing />}/>

                <Route path ='/post' element={<Post />}/>
                
                <Route path ='/quizindex' element={<QuizSelIndex />}/>
                <Route path ='/quiztest' element={<QuizSelPhoto />}/>

                <Route path ='/reco' element={<Reco/>}/>
                <Route path ='/quizresult' element={<QuizReult />}/>

                <Route path ='/home' element={<Home />}/>
                <Route path ='/lookup' element={<Lookup/>}/>


            </Routes>
        </div>
    </BrowserRouter>


    );
}

export default App;
