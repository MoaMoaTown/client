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

/**
 * 타운 코드 표시 모달
 * @author 임원정
 * @since 2024.09.03
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.03 	임원정        최초 생성
 * </pre>
 */

const TownCodeModal = ({ isOpen, townCode, onClose }) => {
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

export default TownCodeModal;
