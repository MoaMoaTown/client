import React from 'react';
import { Button } from '../index';
import {
  Container,
  Overlay,
  ModalContent,
  TitleText,
  ButtonContainer,
} from './styled';

/**
 * 관리자 페이지 확인 모달
 * @author 임원정
 * @since 2024.09.03
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.03  	임원정        최초 생성
 * </pre>
 */

const AdminModal = ({ title, isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Container>
        <ModalContent>
          <TitleText>{title}</TitleText>
          <ButtonContainer>
            <Button variant='confirmBtn2' onClick={onConfirm}>
              확인
            </Button>
            <Button variant='cancelBtn' onClick={onCancel}>
              취소
            </Button>
          </ButtonContainer>
        </ModalContent>
      </Container>
    </Overlay>
  );
};

export default AdminModal;
