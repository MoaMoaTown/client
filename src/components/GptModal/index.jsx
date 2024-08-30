import React, { useEffect, useRef } from 'react';
import { Button } from '../index';
import {
  ModalContainer,
  HeaderWrapper,
  ContentWrapper,
  FooterWrapper,
  GptLogoImage,
  ModalTitle,
  ModalContent,
  StyledCard,
} from './styled';
import gptLogo from '../../assets/images/gpt_logo.png';

const GptModal = ({ setModalOpen, word, explanation, setExplanation }) => {
  const modalRef = useRef(null);

  const closeModal = () => {
    setModalOpen(false);
    setExplanation('설명을 불러오는 중입니다.');
  };

  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [modalRef]);

  return (
    <ModalContainer ref={modalRef}>
      <StyledCard>
        <HeaderWrapper>
          <ModalTitle>{word}</ModalTitle>
          <GptLogoImage src={gptLogo} alt="GPT 로고" />
        </HeaderWrapper>
        <ContentWrapper>
          <ModalContent>{explanation}</ModalContent>
        </ContentWrapper>
        <FooterWrapper>
          <Button variant="confirmBtn" onClick={closeModal}>
            확인
          </Button>
        </FooterWrapper>
      </StyledCard>
    </ModalContainer>
  );
};

export default GptModal;
