
import React, { useState ,useRef, useCallback} from 'react';
import logo from '../Images/imagelogo.png';
import { useNavigate } from 'react-router-dom';

import upload from '../Images/upload.png';
import f_file from '../Images/f-file.png';
import c_upload from '../Images/com_upload.png';

//import Inputtitle from './InTitle'

import styled from "styled-components";

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

  const navigate = useNavigate();

  //홈페이지
  const handleGohomeClick = () => {
    navigate('/home');
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
    console.log(data.title);
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

  const handleMenuToggle = () => { //메뉴열기/닫기
    setIsMenuOpen(!isMenuOpen);
  };


  /*카테고리*/
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
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
 

  const textRef = useRef();  {}
  
  function handleResizeHeight() {
    const maxHeight = 650;
    const calculatedHeight = textRef.current.scrollHeight;
    const newHeight = calculatedHeight <= maxHeight ? calculatedHeight : maxHeight;
    textRef.current.style.height = newHeight + 'px';
  }
  //width:1252px
  //const OneWrap = styled.div``;
 
// One ,SmallWrap ,InputSmall 등 틀 재활용하기 ! .
  return (
    
    <OutWrap>
      <InOutWrap>
        
        {/* 홈페이지 로고 같*/}        
        <LogoWrap>
          <Logo src={logo} alt='' onClick={handleGohomeClick}/>
        </LogoWrap>
        {/* 로고 아래 */} 
        <Center>
          <Layout>
              <Left> 
                  <One> {/*제목*/}
                      <SmallWrap>
                          <InputSmall
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="제목"
                          />
                      </SmallWrap>
                  </One>

                  <Two>{/* 설명 */}
                      {/* 드래그 방지 추가하기 */}
                      <DescriptionWrap>
                          <DescriptArea
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              placeholder="설명" 
                          />
                      </DescriptionWrap>
                      
                  </Two>

                  <Lthree>{/* 이미지 */}
                      {!previewImage && (
                        <EmptyImg src={upload} alt="upload" />
                      )} {/*빈 이미지로 사진 올리면 없어짐 */}

                      <FindImg  src={f_file} alt="f_file" onClick={() => document.getElementById('fileInput').click()}/>
                      <input 
                        type="file"
                        style={{ display: 'none' }}
                        accept="image/jpg, image/png ,image/jpeg"
                        onChange={handleImageFileChange}
                      />

                      {previewImage && 
                      <SelectImg src={previewImage} alt="Preview" />} 
                      
                  </Lthree>

                  <Lfour onClick={handleMenuToggle}> {/*카테고리 */}
                    
                    {category ? (
                      <Menu>{category}</Menu>
                    ) : (
                      <Menu>카테고리 선택</Menu>
                    )}

                    <DropContainer>
                    
                      {isMenuOpen && (
                        <DropMenu > {/* 스타일 수정 */}
                          <CateMenu onClick={() => handleCategorySelect('가족사진')}>가족사진</CateMenu>
                          <CateMenu onClick={() => handleCategorySelect('증명사진')}>증명사진</CateMenu>
                          <CateMenu onClick={() => handleCategorySelect('반려동물')}>반려동물</CateMenu>
                          <CateMenu onClick={() => handleCategorySelect('바디프로필')}>바디프로필</CateMenu>
                          <CateMenu onClick={() => handleCategorySelect('웨딩사진')}>웨딩사진</CateMenu>   
                        </DropMenu>
                      )}

                    </DropContainer>

                  </Lfour>
              </Left> 

              <Right>
                  <One>
                      <SmallWrap>
                        <InputSmall 
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="이름"
                          />
                      </SmallWrap>
                  </One>

                  <Two>
                      <ProfileWrap>
                        <ProfileArea 
                          ref={textRef}
                          onInput={handleResizeHeight}
                          value={profile}
                          onChange={(e) => setProfile(e.target.value)}
                          placeholder="소개 및 커리어"
                        />
                      </ProfileWrap>
                  </Two>

                  <div>
                    <UploadFinally
                    className="c-upload"
                    src={c_upload}
                    alt=""
                    onClick={handleSubmit} 
                      />
                  </div>
              </Right>   
          </Layout>

        </Center>

      </InOutWrap>
    </OutWrap>
  );
}

export default Post;


const LogoWrap = styled.div`
  width: 496px;
  height: 239px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-height: 864px) {
    width: 456px; height: 199px; 
  };
`;
const Logo = styled.img`
  width: 354px; height: 239px; 

  @media screen and (max-height: 864px) {
    width: 314px; height: 199px; 
  }`;

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

const InOutWrap = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
`;

const Center = styled.div`
width: 85%;

@media screen and (min-width: 1600px) {
  width: 90% 
};
`;

const Layout = styled.div`
width: 100%;
display: flex;
margin: auto;
`;

const Left = styled.div`
width: 65vw;
`;

const Right = styled.div`
margin-left: 20px;
`;
// 겹치는 부분 후에 수정하기 !!!!
const Radius = styled.div`
border: 3px #3A76EF solid;
padding: 20px;
word-wrap: break-word;
opacity: 0.90;
border-radius: 31px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const One = styled(Radius)`
display: flex;
align-items: center;
`;

const Two = styled(Radius)`
height: auto;
margin-top: 20px;
`;

const Lthree = styled(Radius)`
margin-top: 20px;
position: relative;
height: 500px;
overflow: hidden;
text-align: center;
`;


const Lfour = styled(Radius)`
background: #798BE6;
margin-top: 20px;
cursor: pointer;
display: flex;
align-items: center;
position: relative;
justify-content: center;
left: 50%;
transform: translate(-50%);

width: 18vw;
height: 3.3vh;

  @media screen and (max-height: 864px) {
    width: 17.5vw;
    height: 6.8vh;
  }

`;



const Area = styled.div`
display: flex;
align-items: center;
width: 100%;
border-radius: 31px;
`;

const SmallWrap = styled(Area)`
height: 40px;
`;

const DescriptionWrap = styled(Area)`
height: 6vh;
`;


const inputStyle = {
color: 'black',
fontSize: 40,
fontFamily: 'Inter',
fontWeight: '400',
border: 'none',
outline: 'none',
width: '100%',
'@media screen and (max-height: 864px)': {
  fontSize: 35,
},


};
const InputSmall = styled.input`
${inputStyle}
height: 6vh;

`;


const DescriptArea = styled.textarea`
${inputStyle}
height: 6vh;
`;

const ProfileArea = styled.textarea`
${inputStyle}
height: 100%;
`;

const EmptyImg = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  @media screen and (max-height: 865px) {
    width: 150px;
    height: 150px;
     
  };
`;
const FindImg = styled.img`
position: absolute;
bottom: 10px;
right: 10px;

width:17.5vw;
height: 7.4vh; 


@media screen and (max-height: 864px) {
  width:16.5vw;
  height: 7.1vh; 
};

`;
const UploadFinally = styled.img`
  margin-top: 20px;
  float: right;
  width: 18vw;
  height: 7.7vh;

  @media screen and (max-height: 864px) {
    width: 17.5vw;
    height: 7.1vh;
  }
`;

const SelectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  `;

  const Menu = styled.span`
  z-index: 2;
  color: white;
  font-size: 33px;
  position: absolute;
  font-weight: 550;
`;

const DropContainer = styled.div`
  z-index: 2;
  color: white;
  font-size: 23px;
  position: absolute;
  align-items: center;
`;

 {/*드롭메뉴바*/}
const DropMenu = styled.div` 
  position: relative;
  background-color: #798BE6;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 31px;
  z-index: 2;
  color: white;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  top: -157px;


`;

const CateMenu = styled.div` 
  font-size: 29px;
  font-weight: 550;
`;


const ProfileWrap = styled(Area)`
height: 635px;
`;
//const OutWrap = styled(Radius)``;
//const OutWrap = styled.div``;
//const OutWrap = styled.div``;
//const OutWrap = styled.div``;
//const OutWrap = styled.div``;
//const OutWrap = styled.div``;
//const OutWrap = styled.div``;
//const OutWrap = styled.div``;