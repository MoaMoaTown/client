import React from 'react';
import { Button } from '../index';
import {
  Container,
  Overlay,
  ModalContent,
  TitleText,
  MessageText,
  ButtonContainer,
  ProfileImagePreview,
} from './styled';

/**
 * 프로필 확인 모달
 * @author 임원정
 * @since 2024.09.01
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.01  	임원정        최초 생성
 * </pre>
 */

const ProfileModal = ({ isOpen, onConfirm, onCancel, profileImage }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Container>
        <ModalContent>
          <TitleText>내가 꾸민 흰디</TitleText>
          {profileImage && (
            <ProfileImagePreview src={profileImage} alt='Profile Preview' />
          )}
          <MessageText>흰디 꾸미기를 완료하시겠습니까?</MessageText>
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

export default ProfileModal;
