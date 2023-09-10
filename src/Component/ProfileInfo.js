
import * as S from './ProfileInfoStyle'

const ProfileInfo = () => {


    return(
        <>
            
            
            <S.One> {/* 이름 이메일  */}
                
                    <S.Wrap style={{marginBottom:10}}>
                        <S.NickName>김또잉</S.NickName>
                    </S.Wrap>                       
                    <S.Wrap>
                        <S.Email>ddoing@gmail.com</S.Email> {/* 링크 복사하게끔  */}
                    </S.Wrap>
                
            </S.One>
            
            <S.Two>  {/* 소개 커리어  */}

                <S.InfoWrap>
                    
                    <S.Left >
                        <S.Whatgray> 소개</S.Whatgray>
                    </S.Left>
                    <S.Left style={{marginTop:10}}>
                        <S.Font  style={{textAlign:'left'}}>안녕 나는 000. 햄버거가 먹고싶다. </S.Font>
                    </S.Left>
                </S.InfoWrap>
            
                <S.InfoWrap>
                    
                    <S.Left >
                        <S.Whatgray> 커리어</S.Whatgray>
                    </S.Left>
                    <S.Left style={{marginTop:10}}>
                        <S.Font  style={{textAlign:'left'}}> 4학년이고 하라는 거 다 잘못해요 그니깐 아무것도 시키지마 </S.Font>
                    </S.Left>
                </S.InfoWrap>
            </S.Two>
            
            
        </>

    );
};
export default ProfileInfo;