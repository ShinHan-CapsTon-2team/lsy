
import styled from "styled-components";

const Lookup_Content =({ title,name,imageurl,description,profile }) => {
    const BoxRadius = styled.div`
    border-radius: 31px;
    
        `;

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
margin-bottom: 30px;
`;


//축소하기 !!!!!!
const InLayoutOne = styled.div`
text-align:center;
width:65vw;

@media screen and (min-width: 1700px) {
    width: 55vw;
    //width: 75vw;
};
`;

const Content = styled.div`
//width:65vw;
display: flex;
flex-direction: column;
`;

const ContentRadius = styled.div`
border: 3px #3A76EF solid;
padding: 20px;
word-wrap: break-word;
opacity: 0.90;
border-radius: 31px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

margin-top: 20px;

@media screen and (min-height: 900px) {
    margin-top: 30px;
    border: 4px #3A76EF solid;
};
`;


// 색깔 탁하게 하는 주범 이 새기임 opacity: 0.90;
const One = styled(ContentRadius)`
display: flex;
align-items: center;
`;

const Two = styled(One)`


`;

const Three = styled(ContentRadius)`
height: auto;
`;


//height: 500px;
const Five = styled(ContentRadius)`

position: relative;

overflow: hidden;
text-align: center;
height:auto;
margin-bottom : 3vh;
`;

const Area = styled.div`
display: flex;
align-items: center;
width: 100%;
border-radius: 31px;
overflow: hidden; 
`;

const SmallWrap = styled(Area)`
height: auto;

`;

const Font = styled.div`
color: black;
font-size: 40px;
font-family: Inter;
font-weight: 400;

width: 100%;

@media screen and (max-height: 864px) {
font-size: 35px;
}
`;


const ProfileWrap = styled(Area)`
height:100%;
`;



const inputStyle = {
    color: 'black',
    fontSize: 35,
    fontFamily: 'Inter',
    fontWeight: '400',
    border: 'none',
    outline: 'none',
    width: '100%',
    
        '@media screen and (min-height: 950px)': {
            fontSize: 40,
        },
    };
    
    const InputSmall = styled.input`
    ${inputStyle}
    height: 6vh;
    `;
    return (
        <InLayoutOne>  
            <Content>
                <One> {/*제목*/}
                    <SmallWrap>
                        <Font>{title} </Font>
                    </SmallWrap>
                </One>

                <Two>{/*이름 */}
                    <SmallWrap>
                        <Font>{name || 'None'}</Font>
                    </SmallWrap>
                </Two>

                <Five>{/* 이미지 */}
                    <BoxRadius > {/* 이미지 */}
                        <Img src={imageurl} alt='이미지' />
                    </BoxRadius>
                    
                    <BoxRadius> {/* 설명 */}
                        <Font>{description || 'None'} </Font>
                    </BoxRadius>
                </Five>
                <Three> {/*소개 */}
                    <ProfileWrap>
                        <Font>{profile || 'None'} </Font>
                    </ProfileWrap>
                </Three>

            </Content>  
        </InLayoutOne> 

    );
  };
  
export default Lookup_Content;

