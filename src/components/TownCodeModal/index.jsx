import React from 'react';
import { Button } from '../index';
import {
  Container,
  Overlay,
  ModalContent,
  TitleText,
  MessageText,
  TownCodeText,
} from './styled';

const InfoModal = ({ isOpen, townCode, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Container>
        <ModalContent>
          <TitleText>타운이 만들어졌어요!</TitleText>
          <MessageText>아래 코드를 통해 시민들을 초대해주세요.</MessageText>
          <TownCodeText>타운코드 : {townCode}</TownCodeText>
          <Button variant='cancelBtn' onClick={onClose}>
            닫기
          </Button>
        </ModalContent>
      </Container>
    </Overlay>
  );
};

export default InfoModal;
