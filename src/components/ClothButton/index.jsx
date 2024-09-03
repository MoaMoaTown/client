// import React from 'react';
// import {
//   Container,
//   ClothImage,
//   InfoWrapper,
//   Brand,
//   Name,
//   Price,
//   MoaImage,
// } from './styled';
// import moaImage from '../../assets/images/moa.svg';

// const ClothButton = ({ imgUrl, name, brand, price, onClick }) => {
//   return (
//     <Container onClick={onClick}>
//       <ClothImage src={imgUrl} alt={name} />
//       <InfoWrapper>
//         <Brand>{brand}</Brand>
//         <Name>{name}</Name>
//         <Price>
//           {price}
//           <MoaImage src={moaImage} alt='Moa' />
//         </Price>
//       </InfoWrapper>
//     </Container>
//   );
// };

// export default ClothButton;
// import React, { useState } from 'react';
// import {
//   Container,
//   ClothImage,
//   InfoWrapper,
//   Brand,
//   Name,
//   Price,
//   MoaImage,
//   Modal,
//   ModalImage,
//   ModalContent,
//   ModalOverlay,
//   ModalButtonWrapper,
//   ModalPriceWrapper,
// } from './styled';
// import moaImage from '../../assets/images/moa.svg';
// import { Button } from '../../components';

// const ClothButton = ({ imgUrl, name, brand, price, onPurchase }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleConfirmPurchase = () => {
//     onPurchase();
//     handleCloseModal(); // 구매 후 모달 닫기
//   };

//   return (
//     <>
//       <Container onClick={handleOpenModal}>
//         <ClothImage src={imgUrl} alt={name} />
//         <InfoWrapper>
//           <Brand>{brand}</Brand>
//           <Name>{name}</Name>
//           <Price>
//             {price}
//             <MoaImage src={moaImage} alt='Moa' />
//           </Price>
//         </InfoWrapper>
//       </Container>

//       {isModalOpen && (
//         <ModalOverlay onClick={handleCloseModal}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <ModalImage src={imgUrl} alt={name} />
//             <div>
//               <Brand>{brand}</Brand>
//               <Name>{name}</Name>
//               <ModalPriceWrapper>
//                 {price}
//                 <MoaImage src={moaImage} alt='Moa' />
//               </ModalPriceWrapper>
//             </div>
//             <ModalButtonWrapper>
//               <Button variant='confirmBtn' onClick={handleConfirmPurchase}>
//                 구매하기
//               </Button>
//               <Button variant='cancelBtn' onClick={handleCloseModal}>
//                 취소
//               </Button>
//             </ModalButtonWrapper>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </>
//   );
// };

// export default ClothButton;

import React from 'react';
import {
  Container,
  ClothImage,
  InfoWrapper,
  Brand,
  Name,
  Price,
  MoaImage,
} from './styled';
import moaImage from '../../assets/images/moa.svg';

const ClothButton = ({ imgUrl, name, brand, price, onClick }) => {
  const handleClick = () => {
    onClick({ imgUrl, name, brand, price });
  };

  return (
    <Container onClick={handleClick}>
      <ClothImage src={imgUrl} alt={name} />
      <InfoWrapper>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <Price>
          {price}
          <MoaImage src={moaImage} alt='Moa' />
        </Price>
      </InfoWrapper>
    </Container>
  );
};

export default ClothButton;
