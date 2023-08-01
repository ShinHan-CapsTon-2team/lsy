
import React, { useState ,useRef, useCallback} from 'react';
import logo from '../Images/imagelogo.png';

import upload from '../Images/upload.png';
import f_file from '../Images/f-file.png';
import c_upload from '../Images/com_upload.png';

// import hol from '../Images/place.png';


const SERVER_URL= 'http://localhost:4000/api/post';


function Post() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [profile, setProfile] = useState(''); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // 미리보기 이미지 URL 상태


  // 사용자가 게시글을 업로드한 시점의 시간을 가져오는 함수
  const getCurrentTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

  const handleSubmit = () => {
    //window.location.href = '/home';
    // 사용자가 게시글을 업로드한 시점의 시간
    //const currentTime = new Date().toISOString();
    // 서버로 보낼 데이터 객체를 생성
    const data = {
      title,
      description,
      //image_url: previewImage, //미리보기 이미지를 전송
      category,
      name,
      profile,
      //created_at : getCurrentTime(),
    };

// 이미지 파일을 FormData로 감싸서 서버로 전송
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));
    formData.append('image', imageFile);
    
// fetch()를 이용하여 서버로 데이터를 전송
    fetch(SERVER_URL, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json', 
      // },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('서버 응답:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  //   fetch(SERVER_URL, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // 서버의 응답 처리
  //       console.log('서버 응답:', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };




  // const handleImageClick = (image) => {
  //   setSelectedImage(image);
  // };

  const handleMenuToggle = () => { //메뉴열기/닫기
    setIsMenuOpen(!isMenuOpen);
  };


  /*카테고리*/
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  /*로고클릭->홈페이지*/
  const handleLogoClick = () => {
    window.location.href = '/home';
  };

  /*파일업로드*/
  const handleImageFileChange = (e) => {
    const imageFile = e.target.files[0];
    if (
      imageFile &&
      (imageFile.type === 'image/jpeg' ||
        imageFile.type === 'image/png' ||
        imageFile.type === 'image/jpg') &&
      imageFile.size <= 30 * 1024 * 1024
    ) {
      setImageFile(imageFile);
      setPreviewImage(URL.createObjectURL(imageFile));
    } else {
      setImageFile(null);
      setPreviewImage(null);
    }
  };
  // const handleImageFileChange = (e) => {
  //   const image_url = e.target.files[0];
  //   // 파일 유형 및 크기 체크
  //   if (image_url && (image_url.type === 'image/jpeg' || image_url.type === 'image/png'||image_url.type === 'image/jpg') && image_url.size <= 30 * 1024 * 1024) {
  //     setImageFile(image_url);
  //     setPreviewImage(URL.createObjectURL(image_url)); // 파일 미리보기 이미지 설정
  //   } else {
  //     setImageFile(null);
  //     setPreviewImage(null); // 파일이 유효하지 않을 때 미리보기 이미지 초기화
  //   }
  // };
  const textRef = useRef();

  const handleResizeHeight = useCallback(() => {
    const maxHeight = 650;
    const calculatedHeight = textRef.current.scrollHeight;
    const newHeight = calculatedHeight <= maxHeight ? calculatedHeight : maxHeight;
    textRef.current.style.height = newHeight + 'px';
  }, []);

  return (

    
    <div style={{width: '100%', height: '100%', position: 'relative', background: 'white',boxSizing: 'border-box' }}>
        
      <div style={{ width: 496, height: 239,textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img style={{width: 354, height: 239, left: 0, top: 0, position: 'absolute'}} src={logo} alt=''  onClick={handleLogoClick}/>
      </div>


      <div style={{ display: 'flex',marginLeft:20,marginRight:20,flexWrap: 'wrap',height:500}}>
          <div style={{ width:1272 }}>

              <div style={{ height: 'auto', opacity: 0.90, background: 'white', borderRadius: 31, border: '3px #3A76EF solid', padding: '20px', wordWrap: 'break-word'}}> 
              {/*input 박스 수정해야함 */}
                  <div style={{  borderRadius: 31,paddingLeft: '20px', paddingRight: '20px' }}>
                    <input style={{ color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400',border: 'none',outline:'none',width:'100%' }}
                        type="text"
                        className="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="제목"
                      />
                  </div>
              </div>

              <div style={{ height: 'auto', opacity: 0.90, background: 'white', borderRadius: 31, border: '3px #3A76EF solid', marginTop: 20, marginBottom: 20, padding: '20px', wordWrap: 'break-word' }}>
                  {/* 추가된 부분 시작 */}
                  <div style={{  borderRadius: 31 , paddingLeft: '20px', paddingRight: '20px'}}>
                      <textarea style={{ color: 'black',width:'100%', fontSize: 40, fontFamily: 'Inter', fontWeight: '400',border: 'none',outline:'none'  }}
                          value={description}
                          className="description"
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="설명"
                      />
                  </div>
                  {/* 추가된 부분 끝 */}
              </div>


              <div style={{ position:'relative', height:500 , opacity: 0.90, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 31, border: '3px #3A76EF solid',padding: '20px' }}>
                
                {!previewImage && (
                  <img className="upload-img" style={{ width: 100, height: 100, objectFit: 'cover',position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%,-50%)'}} src={upload} alt="upload" />
                )}

                <img style={{ position: 'absolute', bottom: '10px', right: '10px',}}className="f-file" src={f_file} alt="f_file" onClick={() => document.getElementById('fileInput').click()}/>
                <input //이미지를 사용자로부터 받아온다 
                  id="fileInput"
                  type="file"
                  style={{ display: 'none' }}
                  accept="image/jpg, image/png ,image/jpeg"
                  onChange={handleImageFileChange}
                />
                {previewImage && <img style={{width:'100%',height:'100%',objectFit: 'cover'}} className="selected-image" src={previewImage} alt="Preview" />}

                  
                  
              </div>

              <div style={{ width:700,height: 50, opacity: 0.90, background: '#798BE6', borderRadius: 31,marginTop:20, padding: '20px', wordWrap: 'break-word', cursor: 'pointer', display: 'flex',
                    alignItems: 'center', position: 'relative',justifyContent: 'center',left:'50%',transform: 'translate(-50%)' }} onClick={handleMenuToggle}>
                
                {category ? (
                  <span className="category-text" style={{ zIndex: 2, color: 'white', fontSize: '33px', position: 'absolute' }}>{category}</span>
                ) : (
                  <span className="category-text" style={{ zIndex: 2, color: 'white', fontSize: '33px', position: 'absolute' }}>카테고리 선택</span>
                )}
                <div style={{ zIndex: 2, color: 'white', fontSize: '23px',position: 'absolute', }} className="dropdown-menu-container">
                
                  {isMenuOpen && (
                    <div style={{ zIndex: 2, color: 'black', fontSize: '23px' }} className="dropdown-menu">
                      <div style={{ zIndex: 2, color: 'black', fontSize: '23px' }} onClick={() => handleCategorySelect('가족사진')}>가족사진</div>
                      <div onClick={() => handleCategorySelect('증명사진')}>증명사진</div>
                      <div onClick={() => handleCategorySelect('반려동물')}>반려동물</div>
                      <div onClick={() => handleCategorySelect('바디프로필')}>바디프로필</div>
                      <div onClick={() => handleCategorySelect('웨딩사진')}>웨딩사진</div>   
                    </div>

                  )}
                </div>
              </div>

              
          </div> 

          <div style={{ marginLeft: 20 }}>
              <div style={{ width: 491, height: 'auto', opacity: 0.90, background: 'white', borderRadius: 31, border: '3px #3A76EF solid', padding: '20px', wordWrap: 'break-word' }}>
                  <div style={{  borderRadius: 31 }}>
                    <input style={{ color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', paddingLeft: '20px', paddingRight: '20px',border: 'none',outline:'none'  }}
                          type="text"
                          className="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="이름"
                      />
                  </div>
              </div>

              <div style={{ width: 491, height: 670, opacity: 0.90, background: 'white', padding: '20px', wordWrap: 'break-word', borderRadius: 31, border: '3px #3A76EF solid', marginTop: 20 }}>
                  <div style={{  borderRadius: 31 , paddingLeft: '20px', paddingRight: '20px'}}>
                    <textarea style={{ color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400',border: 'none',outline:'none' ,height:'auto', }}
                      className="profile"
                      ref={textRef}
                      onInput={handleResizeHeight}
                      value={profile}
                      onChange={(e) => setProfile(e.target.value)}
                      placeholder="소개 및 커리어"
                    />
                  </div>
              </div>

              <div>
                <img  style={{ marginTop: 20 ,float:'right' }}
                className="c-upload"
                src={c_upload}
                alt=""
                onClick={handleSubmit}
                  />
              </div>
          </div>   
      </div>

      

           
    </div>
  );
}

export default Post;