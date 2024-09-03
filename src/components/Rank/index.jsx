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
