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
import test_image from '../../assets/images/join_town.png';

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
          <Profile src={test_image} onClick={handleImageClick} />
          <Nickname>{nickname}</Nickname>
        </LeftWrapper>
        <RightWrapper>
          <MoaImage src={moa} />
          <Balance>{balance}</Balance>
        </RightWrapper>
      </Container>
      {isModalOpen && (
        <Modal onClick={handleCloseModal}>
          <ModalImage src={test_image} />
        </Modal>
      )}
    </>
  );
};

export default Rank;
