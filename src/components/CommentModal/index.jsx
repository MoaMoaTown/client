import React, { useState, useEffect } from 'react';
import {
  Overlay,
  Container,
  ModalContent,
  TitleText,
  DescriptionText,
  TextArea,
  ButtonContainer,
} from './styled';
import { Button } from '../index';

const CommentModal = ({
  isOpen,
  jobName,
  jobDescription,
  onConfirm,
  onClose,
}) => {
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (isOpen) {
      setComment(''); // 모달이 열릴 때마다 코멘트 초기화
    }
  }, [isOpen]);

  const handleCommentChange = (e) => {
    setComment(e.target.value); // 코멘트 입력시 상태 업데이트
  };

  const handleConfirm = () => {
    onConfirm(comment); // 코멘트 제출
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <Container>
        <ModalContent>
          <TitleText>{jobName}</TitleText>
          <DescriptionText>{jobDescription}</DescriptionText>
          <TextArea
            placeholder='간단한 포부를 입력해주세요'
            value={comment}
            onChange={handleCommentChange}
          />
          <ButtonContainer>
            <Button variant='cancelBtn' onClick={onClose}>
              취소
            </Button>
            <Button variant='confirmBtn' onClick={handleConfirm}>
              신청하기
            </Button>
          </ButtonContainer>
        </ModalContent>
      </Container>
    </Overlay>
  );
};

export default CommentModal;
