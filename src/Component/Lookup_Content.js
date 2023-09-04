
import styled from "styled-components";
import  {useNavigate } from 'react-router-dom';
import profilelogo from '../Images/i2.png'

const Lookup_Content =({ title,name,imageurl,description,year,month,day,id }) => {

    //page 이동 
    const navigate = useNavigate();

    const handleGoProfile = () => {
        navigate(`/profile/${id}`); // 가져온 id(해당 게시글 작성자의 식별번호)
    };

    return (
        <InLayoutOne>  
            <Content>
                <ContentTitle> {/*제목*/}
                    <WrapBasic>
                        <Font> {title || 'none'} </Font>
                    </WrapBasic>

                    <WrapBasic> {/* 날짜 */}
                        <At>{year || 'none'} {month} {day}</At>
                    </WrapBasic>
                </ContentTitle>

                <ContentProfile> {/* 이름 */}
                    <ProfileImgWrap > 
                        <ProfileImg src={profilelogo} onClick={handleGoProfile} />
                    </ProfileImgWrap>
                    <ContentBasic  style={{flex:1}}>{/*이름 */}
                        <WrapBasic>
                            <Font>{name || 'none'}</Font>
                        </WrapBasic>
                    </ContentBasic>
                </ContentProfile>

                <ContentImgDes>{/* 이미지/설명 */}
                    <BoxRadius > {/* 이미지 */}
                        <Img src={imageurl} alt='이미지' />
                    </BoxRadius>
                    
                    <BoxRadius> {/* 설명 */}
                        <Font>{description || 'none'}</Font>
                    </BoxRadius>
                </ContentImgDes>
                
            </Content>  
        </InLayoutOne> 

    );
}; 
export default Lookup_Content;

const DayFontStyle = {
    '@media screen and (max-width: 1024px)':{
    
    fontSize: 18
    },
    
    '@media screen and (max-width: 850px)':{
    fontSize: 17
    
    },
    
    /* mobile 규격 */
    '@media screen and (max-width: 540px)':{
    
    fontSize: 15
    },
    /* tablet 규격 */
    '@media screen and (min-width: 1025px)':{
    
    fontSize: 20
    },
    '@media screen and (min-width: 1700px)': {
    
    fontSize: 33
    }
    };
    const At =styled.text`
    color:gray;
    ${DayFontStyle};
    `;

    const BoxRadius = styled.div`
    border-radius: 31px;
            `;

    const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-bottom: 30px;
    `;

    const InLayoutOne = styled.div`
    text-align:center;
    width:100%;
    margin-bottom:30px;
    
    `;

    const Content = styled.div`
    display: flex;
    flex-direction: column;
    `;

    const ContentRadius = styled.div`
    padding: 20px;
    word-wrap: break-word;
    border-radius: 31px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    margin-top: 20px;

    @media screen and (max-width: 1600px) {
        border: 3px #3A76EF solid;
        };
        
        @media screen and (max-width: 540px) {
        margin-top: 15px;
        border: 2px #3A76EF solid;
        };
        
        @media screen and (min-width: 1601px) {
        border: 4px #3A76EF solid;
        };
    `;

    const ContentBasic = styled(ContentRadius)`
    display: flex;
    align-items: center;
    `;
    
    const ContentTitle =styled(ContentBasic)`
    flex-direction: column;
    `;
    const ContentProfile =styled.div`display: flex;`;


    const ContentImgDes = styled(ContentRadius)`
    position: relative;
    overflow: hidden;
    text-align: center;
    height:auto;
    `;


    const Area = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    //border-radius: 31px;
    overflow: hidden; 
    `;

    const WrapBasic = styled(Area)`
    height: auto;
    `;

    const ProfileImgWrap = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-top: 20px;
    cursor: pointer;
    `;

    const ProfileImg = styled.img`
    width:57px;
    height:57px; //+2
    /* tablet 규격 */
    @media screen and (max-width: 1024px){
        
    }

    /* mobile 규격 */
    @media screen and (max-width: 540px){
        width:43px;
        height:43px;
        
    }
    /* s 데스크 */
    @media screen and (min-width: 1025px){
        
    }
    /* l 데스크 */
    @media screen and (min-width: 1700px){
        width:70px;
        height:70px;
    }
    `;

    const FontStyle = {
        '@media screen and (max-width: 1024px)':{
        
        fontSize: 22
        },
        
        '@media screen and (max-width: 850px)':{
        fontSize: 21
        
        },
        
        /* mobile 규격 */
        '@media screen and (max-width: 540px)':{
        
        fontSize: 19
        },
        /* tablet 규격 */
        '@media screen and (min-width: 1025px)':{
        
        fontSize: 24
        },
        '@media screen and (min-width: 1700px)': {
        
        fontSize: 37
        }
        };
        

    const Font = styled.div`
    ${FontStyle};
    color: black;
    `;