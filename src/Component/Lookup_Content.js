
import  {useNavigate } from 'react-router-dom';
import profilelogo from '../Images/i2.png'
import * as S from '../Lookup/LookupStyle'

const Lookup_Content =({ title,name,imageurl,description,year,month,day,id }) => {

    //page 이동 
    const navigate = useNavigate();

    const handleGoProfile = () => {
        navigate(`/profile/${id}`); // 가져온 id(해당 게시글 작성자의 식별번호)
    };

    return (
        <S.InLayoutOne>  
            <S.Content>
                <S.ContentTitle> {/*제목*/}
                    <S.WrapBasic>
                        <S.Font> {title || 'none'} </S.Font>
                    </S.WrapBasic>

                    <S.WrapBasic> {/* 날짜 */}
                        <S.At>{year || 'none'} {month} {day}</S.At>
                    </S.WrapBasic>
                </S.ContentTitle>

                <S.ContentProfile> {/* 이름 */}
                    <S.ProfileImgWrap > 
                        <S.ProfileImg src={profilelogo} onClick={handleGoProfile} />
                    </S.ProfileImgWrap>
                    <S.ContentBasic  style={{flex:1}}>{/*이름 */}
                        <S.WrapBasic>
                            <S.Font>{name || 'none'}</S.Font>
                        </S.WrapBasic>
                    </S.ContentBasic>
                </S.ContentProfile>

                <S.ContentImgDes>{/* 이미지/설명 */}
                    <S.BoxRadius > {/* 이미지 */}
                        <S.Img src={imageurl} alt='이미지' />
                    </S.BoxRadius>
                    
                    <S.BoxRadius> {/* 설명 */}
                        <S.Font>{description || 'none'}</S.Font>
                    </S.BoxRadius>
                </S.ContentImgDes>
                
            </S.Content>  
        </S.InLayoutOne> 

    );
}; 
export default Lookup_Content;
