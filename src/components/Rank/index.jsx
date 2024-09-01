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

const Rank = ({ ordinal, profile, nickname, balance, isCurrentUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container isCurrentUser={isCurrentUser}>
        <LeftWrapper>
          <Ordinal ordinal={ordinal} />
          <Profile src={profile} onClick={handleImageClick} />
          <Nickname>{nickname}</Nickname>
        </LeftWrapper>
        <RightWrapper>
          <Balance>{balance}</Balance>
          <MoaImage src={moa} />
        </RightWrapper>
      </Container>
      {isModalOpen && (
        <Modal onClick={handleCloseModal}>
          <ModalImage src={profile} />
        </Modal>
      )}
    </>
  );
};

export default Rank;
