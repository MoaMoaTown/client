import React, { useState } from 'react';
import { Ordinal } from '..';
import {
  Container,
  Profile,
  Nickname,
  MoaImage,
  Balance,
  LeftWrapper,
  RightWrapper,
  Modal,
  ModalImage,
} from './styled';
import moa from '../../assets/images/moa.svg';
import heendy from '../../assets/images/default_heendy.png';

/**
 * 랭킹 리스트 아이템 컴포넌트
 * @author 이주현
 * @since 2024.08.28
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.28  이주현      최초 생성
 * </pre>
 */

const Rank = ({ ordinal, profile, nickname, balance, isCurrentUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const profileSrc = profile || heendy;

  return (
    <>
      <Container isCurrentUser={isCurrentUser}>
        <LeftWrapper>
          <Ordinal ordinal={ordinal} />
          <Profile src={profileSrc} onClick={handleImageClick} />
          <Nickname>{nickname}</Nickname>
        </LeftWrapper>
        <RightWrapper>
          <Balance>{balance}</Balance>
          <MoaImage src={moa} />
        </RightWrapper>
      </Container>
      {isModalOpen && (
        <Modal onClick={handleCloseModal}>
          <ModalImage src={profileSrc} />
        </Modal>
      )}
    </>
  );
};

export default Rank;
