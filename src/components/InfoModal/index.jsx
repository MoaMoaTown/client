import React from 'react';
import { Button } from '../index';
import {
  Container,
  Overlay,
  ModalContent,
  TitleText,
  MessageText,
  ButtonContainer,
} from './styled';

/**
 * 안내 모달 컴포넌트
 * @author 이주현
 * @since 2024.08.30
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.30  이주현      최초 생성
 * </pre>
 */

const InfoModal = ({ isOpen, title, message, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Container>
        <ModalContent>
          <TitleText>{title}</TitleText>
          <MessageText>{message}</MessageText>
          <Button variant='confirmBtn' onClick={onConfirm}>
            확인
          </Button>
        </ModalContent>
      </Container>
    </Overlay>
  );
};

export default InfoModal;
