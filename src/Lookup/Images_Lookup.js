import React, {useNavigate,useParams } from 'react-router-dom';
import { useEffect,useState } from 'react'

import logo from '../Images/imagelogo.png'


const Images_Lookup = () => {

    //const postnum = useParams();
    //console.log(postnum); // postnum 확인

    const navigate = useNavigate();
    //홈페이지 이동 
    const handleGohomeClick = () => {
        navigate('/home');
    };

    const params = useParams(); // 1
    const postnum = params.postNum; // 2
    console.log( 'par:',params);
    console.log('postnum:',postnum);

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`/api/postup/${postnum}`) 
        .then((response) => response.json())
        .then((result) => setUser(result.data));
        }, [postnum]); 
    
    const { title,description,imageurl,name,profile } = user;
    /*
    const [detail,setdetail]=useState();
    
    useEffect(async ()=> { 
        fetch('api/detail') // 알아보기
        .then((response)=>response.json())
        .then((result)=> setdetail(result));
    },[]); */

    /*
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageurl, setimageurl] = useState('')
    const [name, setName] = useState('')
    const [profile, setProfile] = useState('')

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/lookup?postnum=${postnum}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // 받아온 데이터를 useState 를 이용하여 선언한다.
                setTitle(data[0].title);
                setDescription(data[0].description);
                setimageurl(data[0].imageurl);
                setName(data[0].name);
                setProfile(data[0].profile);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchData();
    }, [idx]);
    
    */

    return (
        //설명 있는 버전 
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
        
            <div style={{ width: 496, height: 239,textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img style={{width: 496, height: 239, left: 0, top: 0, position: 'absolute'}} src={logo} alt=''  onClick={handleGohomeClick}/>
            </div>


            
            <div style={{ display: 'flex',marginLeft:20,marginRight:20 }}>
                <div style={{ width:'70%' }}>
                    <div style={{  height: 81, opacity: 0.90, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 31, border: '3px #3A76EF solid', marginBottom: 10, display: 'flex', alignItems: 'center' }}>
                        <div style={{ color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', paddingLeft: '20px' }}>{title}</div>
                    </div>

                    <div style={{ height: 'auto', opacity: 0.90, background: 'white', borderRadius: 31, border: '3px #3A76EF solid', marginTop: 20, marginBottom: 10, padding: '20px', wordWrap: 'break-word' }}>
                        {/* 추가된 부분 시작 */}
                        <div style={{  borderRadius: 31 }}>
                            <div style={{ color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', paddingLeft: '20px', paddingRight: '20px' }}>{description}</div>
                        </div>
                        {/* 추가된 부분 끝 */}
                    </div>


                    <div style={{  height: 'auto', opacity: 0.90, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 31, border: '3px #3A76EF solid',padding: '20px' }}>
                        <div >
                            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={imageurl} alt='이미지' />
                        </div>
                    </div>
                </div> 

                <div style={{ marginLeft: 20 }}>
                    <div style={{ width: 491, height: 81, opacity: 0.90, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 31, border: '3px #3A76EF solid', display: 'flex', alignItems: 'center' }}>
                        <div style={{ color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', paddingLeft: '20px' }}>
                            {name}
                        </div>
                    </div>

                    <div style={{ width: 491, height: 521, opacity: 0.90, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 31, border: '3px #3A76EF solid', marginTop: 20 }}>
                        <div style={{ width: 317, color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', textAlign: 'center', marginTop: 10 }}>
                            {profile}
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    );
};

export default Images_Lookup;