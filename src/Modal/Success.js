import styled from 'styled-components';
import * as S from './ModalStyle'

export const Success = ({text}) => {

    return (

          <S.ModalBackdrop >         
              <S.ModalView onClick={(e) => e.stopPropagation()}>
                  <S.Text>{text}</S.Text>
              </S.ModalView>
            </S.ModalBackdrop>
    );
  };