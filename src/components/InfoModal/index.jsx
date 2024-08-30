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

const InfoModal = ({ isOpen, title, message, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Container>
        <ModalContent>
          <TitleText>{title}</TitleText>
          <MessageText>{message}</MessageText>
          <Button variant="confirmBtn" onClick={onConfirm}>
            확인
          </Button>
        </ModalContent>
      </Container>
    </Overlay>
  );
};

export default InfoModal;
