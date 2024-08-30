// import React, { useState } from 'react';
// import {
//   Container,
//   ImageWrapper,
//   ClothImage,
//   InfoWrapper,
//   Brand,
//   Name,
//   Price,
//   Modal,
//   ModalImage,
//   StyledButton, // StyledButton 임포트
// } from './styled';

// const ClothButton = ({ imgUrl, name, brand, price }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleImageClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <StyledButton onClick={handleImageClick}>
//         {' '}
//         {/* StyledButton 사용 */}
//         <Container>
//           <ImageWrapper>
//             <ClothImage src={imgUrl} alt={name} />
//           </ImageWrapper>
//           <InfoWrapper>
//             <Brand>{brand}</Brand>
//             <Name>{name}</Name>
//             <Price>{`${price}모아`}</Price>
//           </InfoWrapper>
//         </Container>
//       </StyledButton>
//       {isModalOpen && (
//         <Modal onClick={handleCloseModal}>
//           <ModalImage src={imgUrl} />
//         </Modal>
//       )}
//     </>
//   );
// };

// export default ClothButton;

// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   ImageWrapper,
//   ClothImage,
//   InfoWrapper,
//   Brand,
//   Name,
//   Price,
//   Modal,
//   ModalImage,
//   StyledButton,
// } from './styled';

// const ClothButton = ({ imgUrl, name, brand, price }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleImageClick = () => {
//     setScrollPosition(window.scrollY); // 현재 스크롤 위치 저장
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       const modal = document.querySelector('#modal');
//       modal.style.top = `${scrollPosition + window.innerHeight / 2}px`; // 스크롤 위치와 화면 높이를 고려하여 중앙에 배치
//     }
//   }, [isModalOpen, scrollPosition]);

//   return (
//     <>
//       <StyledButton onClick={handleImageClick}>
//         <Container>
//           <ImageWrapper>
//             <ClothImage src={imgUrl} alt={name} />
//           </ImageWrapper>
//           <InfoWrapper>
//             <Brand>{brand}</Brand>
//             <Name>{name}</Name>
//             <Price>{`${price}모아`}</Price>
//           </InfoWrapper>
//         </Container>
//       </StyledButton>
//       {isModalOpen && (
//         <Modal id='modal' onClick={handleCloseModal}>
//           <ModalImage src={imgUrl} />
//         </Modal>
//       )}
//     </>
//   );
// };

// export default ClothButton;

import React from 'react';
import {
  Container,
  ImageWrapper,
  ClothImage,
  InfoWrapper,
  Brand,
  Name,
  Price,
  StyledButton,
} from './styled';

const ClothButton = ({ imgUrl, name, brand, price, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Container>
        <ImageWrapper>
          <ClothImage src={imgUrl} alt={name} />
        </ImageWrapper>
        <InfoWrapper>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
          <Price>{`${price}모아`}</Price>
        </InfoWrapper>
      </Container>
    </StyledButton>
  );
};

export default ClothButton;
