import React from 'react';

import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: rgba(0,0,0,0.4);
  border-radius: 10px;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

export const ModalView = styled.div.attrs((props) => ({
    // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
    role: 'dialog',
  }))`
    // Modal창 CSS를 구현합니다.
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    width: 500px;
    heigth: 200px;
    background-color: #ffffff;
      >div.desc {
        margin: 50px;
        font-size: 20px;
        color: black;
      }
  `;
const Success = ({ isOpen, onClose }) => {
  return (
    <ModalBackdrop isOpen={isOpen} onClose={onClose}>
      <ModalView   onClick={(e) => e.stopPropagation()} >
        <div className='desc'>게시물이 성공적으로 업로드되었습니다.</div>
      </ModalView>
    </ModalBackdrop>
  );
};

export default Success;