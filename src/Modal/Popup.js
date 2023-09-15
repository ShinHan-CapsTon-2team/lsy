
import * as S from './ModalStyle'

export const Popup = ({text}) => {

    return (

          <S.ModalBackdrop >         
              <S.ModalView onClick={(e) => e.stopPropagation()}>
                  <S.Text>{text}</S.Text>
              </S.ModalView>
            </S.ModalBackdrop>
    );
  };