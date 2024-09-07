import React, { useState, useEffect } from 'react';
import {
  Overlay,
  Container,
  ModalContent,
  TitleText,
  DescriptionText,
  TextArea,
  ButtonContainer,
  PayText,
} from './styled';
import { Button } from '../index';
import moaImage from '../../assets/images/moa.svg';
/**
 * 역할 신청 모달 컴포넌트
 * @author 임재성
 * @since 2024.09.02
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.02  	임재성        최초 생성
 * </pre>
 */
const CommentModal = ({
  isOpen,
  jobName,
  jobDescription,
  jobPay,
  onConfirm,
  onClose,
}) => {
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (isOpen) {
      setComment('');
    }
  }, [isOpen]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleConfirm = () => {
    onConfirm(comment);
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <Container>
        <ModalContent>
          <TitleText>{jobName}</TitleText>
          <DescriptionText>{jobDescription}</DescriptionText>
          <PayText>
            지급 금액: {jobPay}
            <img src={moaImage} alt='Moa' />
          </PayText>{' '}
          <TextArea
            placeholder='간단한 포부를 입력해주세요!'
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
