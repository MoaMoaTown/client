// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { useQuery } from 'react-query';
// // // import { useNavigate } from 'react-router-dom';
// // // import { Header, Button, ClothButton, WishButton } from '../../components';
// // // import {
// // //   Container,
// // //   DeptTitle,
// // //   Dept_backImage,
// // //   ClothButtonStyled,
// // //   ToggleContainer,
// // //   ToggleButton,
// // // } from './styled';
// // // import dept_back from '../../assets/images/dept_back.svg';
// // // import { clothesList } from '../../apis/deptAPI'; // Import the clothesList function

// // // const Dept = () => {
// // //   const navigate = useNavigate();
// // //   const [showWishlist, setShowWishlist] = useState(false);
// // //   const clothListRef = useRef(null);

// // //   // Fetch clothes list using react-query
// // //   const {
// // //     data: clothes = [], // Default to empty array
// // //     isLoading,
// // //     isError,
// // //   } = useQuery('clothesList', () => clothesList({ limit: 2 }));

// // //   useEffect(() => {
// // //     if (clothes.length > 0) {
// // //       // Optionally scroll to a specific item if needed
// // //       const highlightedItemIndex = clothes.findIndex(
// // //         (cloth) => cloth.isHighlighted
// // //       );
// // //       if (highlightedItemIndex !== -1 && clothListRef.current) {
// // //         const highlightedElement =
// // //           clothListRef.current.children[highlightedItemIndex];
// // //         highlightedElement.scrollIntoView({
// // //           behavior: 'smooth',
// // //           block: 'center',
// // //         });
// // //       }
// // //     }
// // //   }, [clothes]);

// // //   return (
// // //     <Container>
// // //       <Header />
// // //       <DeptTitle>현대 백화점</DeptTitle>

// // //       {/* 토글 버튼 */}
// // //       <ToggleContainer>
// // //         <ToggleButton
// // //           active={!showWishlist}
// // //           onClick={() => setShowWishlist(false)}
// // //         >
// // //           일반 상품
// // //         </ToggleButton>
// // //         <ToggleButton
// // //           active={showWishlist}
// // //           onClick={() => setShowWishlist(true)}
// // //         >
// // //           위시 상품
// // //         </ToggleButton>
// // //       </ToggleContainer>

// // //       {/* 리스트 조건부 렌더링 */}
// // //       <div style={{ position: 'relative', width: '100%' }}>
// // //         <Dept_backImage src={dept_back} />
// // //         <ClothButtonStyled ref={clothListRef}>
// // //           {showWishlist ? (
// // //             <>
// // //               <WishButton>위시리스트 버튼 1</WishButton>
// // //               <WishButton>위시리스트 버튼 2</WishButton>
// // //               <WishButton>위시리스트 버튼 3</WishButton>
// // //               <WishButton>위시리스트 버튼 4</WishButton>
// // //             </>
// // //           ) : isLoading ? (
// // //             <div>Loading...</div>
// // //           ) : isError ? (
// // //             <div>Error loading clothes data</div>
// // //           ) : (
// // //             clothes.map((cloth, index) => (
// // //               <ClothButton
// // //                 key={cloth.clothId}
// // //                 imgUrl={cloth.imgUrl}
// // //                 name={cloth.name}
// // //                 brand={cloth.brand}
// // //                 price={cloth.price}
// // //               />
// // //             ))
// // //           )}
// // //         </ClothButtonStyled>
// // //       </div>

// // //       <Button variant='buyBtn'>구매</Button>
// // //     </Container>
// // //   );
// // // };

// // // export default Dept;

// // import React, { useState, useEffect, useRef } from 'react';
// // import { useQuery } from 'react-query';
// // import { useNavigate } from 'react-router-dom';
// // import { Header, Button, ClothButton, WishButton } from '../../components';
// // import {
// //   Container,
// //   DeptTitle,
// //   Dept_backImage,
// //   ClothButtonStyled,
// //   ToggleContainer,
// //   ToggleButton,
// // } from './styled';
// // import dept_back from '../../assets/images/dept_back.svg';
// // import { clothesList } from '../../apis/deptAPI';

// // const Dept = () => {
// //   const navigate = useNavigate();
// //   const [showWishlist, setShowWishlist] = useState(false);
// //   const clothListRef = useRef(null);

// //   // Fetch all clothes without pagination
// //   const {
// //     data: clothes = [],
// //     isLoading,
// //     isError,
// //   } = useQuery('clothesList', () => clothesList());

// //   useEffect(() => {
// //     if (clothes.length > 0) {
// //       const highlightedItemIndex = clothes.findIndex(
// //         (cloth) => cloth.isHighlighted
// //       );
// //       if (highlightedItemIndex !== -1 && clothListRef.current) {
// //         const highlightedElement =
// //           clothListRef.current.children[highlightedItemIndex];
// //         highlightedElement.scrollIntoView({
// //           behavior: 'smooth',
// //           block: 'center',
// //         });
// //       }
// //     }
// //   }, [clothes]);

// //   return (
// //     <Container>
// //       <Header />
// //       <DeptTitle>현대 백화점</DeptTitle>

// //       <ToggleContainer>
// //         <ToggleButton
// //           active={!showWishlist}
// //           onClick={() => setShowWishlist(false)}
// //         >
// //           일반 상품
// //         </ToggleButton>
// //         <ToggleButton
// //           active={showWishlist}
// //           onClick={() => setShowWishlist(true)}
// //         >
// //           위시 상품
// //         </ToggleButton>
// //       </ToggleContainer>

// //       <div style={{ position: 'relative', width: '100%' }}>
// //         <Dept_backImage src={dept_back} />
// //         <ClothButtonStyled ref={clothListRef}>
// //           {showWishlist ? (
// //             <>
// //               <WishButton>위시리스트 버튼 1</WishButton>
// //               <WishButton>위시리스트 버튼 2</WishButton>
// //               <WishButton>위시리스트 버튼 3</WishButton>
// //               <WishButton>위시리스트 버튼 4</WishButton>
// //             </>
// //           ) : isLoading ? (
// //             <div>Loading...</div>
// //           ) : isError ? (
// //             <div>Error loading clothes data</div>
// //           ) : (
// //             clothes.map((cloth, index) => (
// //               <ClothButton
// //                 key={cloth.clothId}
// //                 imgUrl={cloth.imgUrl}
// //                 name={cloth.name}
// //                 brand={cloth.brand}
// //                 price={cloth.price}
// //               />
// //             ))
// //           )}
// //         </ClothButtonStyled>
// //       </div>

// //       <Button variant='buyBtn'>구매</Button>
// //     </Container>
// //   );
// // };

// // export default Dept;

// import React, { useState, useEffect, useRef } from 'react';
// import { useQuery } from 'react-query';
// import { useNavigate } from 'react-router-dom';
// import { Header, Button, ClothButton, WishButton } from '../../components';
// import {
//   Container,
//   DeptTitle,
//   ScrollableContainer, // 수정된 스타일 컴포넌트 가져오기
//   Dept_backImage,
//   ClothButtonStyled,
//   ToggleContainer,
//   ToggleButton,
// } from './styled';
// import dept_back from '../../assets/images/dept_back.svg';
// import { clothesList } from '../../apis/deptAPI';

// const Dept = () => {
//   const navigate = useNavigate();
//   const [showWishlist, setShowWishlist] = useState(false);
//   const clothListRef = useRef(null);

//   // Fetch all clothes without pagination
//   const {
//     data: clothes = [],
//     isLoading,
//     isError,
//   } = useQuery('clothesList', () => clothesList());

//   useEffect(() => {
//     if (clothes.length > 0) {
//       const highlightedItemIndex = clothes.findIndex(
//         (cloth) => cloth.isHighlighted
//       );
//       if (highlightedItemIndex !== -1 && clothListRef.current) {
//         const highlightedElement =
//           clothListRef.current.children[highlightedItemIndex];
//         highlightedElement.scrollIntoView({
//           behavior: 'smooth',
//           block: 'center',
//         });
//       }
//     }
//   }, [clothes]);

//   return (
//     <Container>
//       <Header />
//       <DeptTitle>현대 백화점</DeptTitle>

//       <ToggleContainer>
//         <ToggleButton
//           active={!showWishlist}
//           onClick={() => setShowWishlist(false)}
//         >
//           일반 상품
//         </ToggleButton>
//         <ToggleButton
//           active={showWishlist}
//           onClick={() => setShowWishlist(true)}
//         >
//           위시 상품
//         </ToggleButton>
//       </ToggleContainer>

//       {/* 스크롤 가능한 컨테이너 안에 Dept_backImage와 ClothButton을 배치 */}
//       <ScrollableContainer>
//         <Dept_backImage src={dept_back} />
//         <ClothButtonStyled ref={clothListRef}>
//           {showWishlist ? (
//             <>
//               <WishButton>위시리스트 버튼 1</WishButton>
//               <WishButton>위시리스트 버튼 2</WishButton>
//               <WishButton>위시리스트 버튼 3</WishButton>
//               <WishButton>위시리스트 버튼 4</WishButton>
//             </>
//           ) : isLoading ? (
//             <div>Loading...</div>
//           ) : isError ? (
//             <div>Error loading clothes data</div>
//           ) : (
//             clothes.map((cloth, index) => (
//               <ClothButton
//                 key={cloth.clothId}
//                 imgUrl={cloth.imgUrl}
//                 name={cloth.name}
//                 brand={cloth.brand}
//                 price={cloth.price}
//               />
//             ))
//           )}
//         </ClothButtonStyled>
//       </ScrollableContainer>

//       <Button variant='buyBtn'>구매</Button>
//     </Container>
//   );
// };

// export default Dept;

// import React, { useState, useEffect, useRef } from 'react';
// import { useQuery } from 'react-query';
// import { useNavigate } from 'react-router-dom';
// import { Header, Button, ClothButton, WishButton } from '../../components';
// import {
//   Container,
//   DeptTitle,
//   Dept_backImage,
//   ClothButtonStyled,
//   ToggleContainer,
//   ToggleButton,
// } from './styled';
// import dept_back from '../../assets/images/dept_back.svg';
// import { clothesList, purchaseClothes } from '../../apis/deptAPI'; // purchaseClothes API 임포트

// const Dept = () => {
//   const navigate = useNavigate();
//   const [showWishlist, setShowWishlist] = useState(false);
//   const [selectedClothId, setSelectedClothId] = useState(null); // 선택된 clothId를 위한 상태 추가
//   const clothListRef = useRef(null);

//   // Fetch all clothes without pagination
//   const {
//     data: clothes = [],
//     isLoading,
//     isError,
//   } = useQuery('clothesList', () => clothesList());

//   const handleClothClick = (clothId) => {
//     setSelectedClothId(clothId); // 선택된 clothId를 상태로 설정
//   };

//   const handlePurchaseClick = async () => {
//     if (selectedClothId) {
//       try {
//         const response = await purchaseClothes(selectedClothId); // Long 타입 값만 전달
//         console.log('구매 성공:', response);
//         // 필요시 구매 성공 후 추가 처리
//       } catch (error) {
//         console.error('구매 실패:', error);
//       }
//     } else {
//       console.log('구매할 아이템이 선택되지 않았습니다.');
//     }
//   };

//   useEffect(() => {
//     if (clothes.length > 0) {
//       const highlightedItemIndex = clothes.findIndex(
//         (cloth) => cloth.isHighlighted
//       );
//       if (highlightedItemIndex !== -1 && clothListRef.current) {
//         const highlightedElement =
//           clothListRef.current.children[highlightedItemIndex];
//         highlightedElement.scrollIntoView({
//           behavior: 'smooth',
//           block: 'center',
//         });
//       }
//     }
//   }, [clothes]);

//   return (
//     <Container>
//       <Header />
//       <DeptTitle>현대 백화점</DeptTitle>

//       <ToggleContainer>
//         <ToggleButton
//           active={!showWishlist}
//           onClick={() => setShowWishlist(false)}
//         >
//           일반 상품
//         </ToggleButton>
//         <ToggleButton
//           active={showWishlist}
//           onClick={() => setShowWishlist(true)}
//         >
//           위시 상품
//         </ToggleButton>
//       </ToggleContainer>

//       <div style={{ position: 'relative', width: '100%' }}>
//         <Dept_backImage src={dept_back} />
//         <ClothButtonStyled ref={clothListRef}>
//           {showWishlist ? (
//             <>
//               <WishButton>위시리스트 버튼 1</WishButton>
//               <WishButton>위시리스트 버튼 2</WishButton>
//               <WishButton>위시리스트 버튼 3</WishButton>
//               <WishButton>위시리스트 버튼 4</WishButton>
//             </>
//           ) : isLoading ? (
//             <div>Loading...</div>
//           ) : isError ? (
//             <div>Error loading clothes data</div>
//           ) : (
//             clothes.map((cloth) => (
//               <ClothButton
//                 key={cloth.clothId}
//                 imgUrl={cloth.imgUrl}
//                 name={cloth.name}
//                 brand={cloth.brand}
//                 price={cloth.price}
//                 onClick={() => handleClothClick(cloth.clothId)} // 클릭 시 clothId 설정
//               />
//             ))
//           )}
//         </ClothButtonStyled>
//       </div>

//       <Button variant='buyBtn' onClick={handlePurchaseClick}>
//         구매
//       </Button>
//     </Container>
//   );
// };

// export default Dept;

import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {
  Header,
  Button,
  ClothButton,
  WishButton,
  InfoModal,
} from '../../components'; // InfoModal 추가
import {
  Container,
  DeptTitle,
  Dept_backImage,
  ClothButtonStyled,
  ToggleContainer,
  ToggleButton,
} from './styled';
import dept_back from '../../assets/images/dept_back.svg';
import { clothesList, purchaseClothes } from '../../apis/deptAPI';

const Dept = () => {
  const navigate = useNavigate();
  const [showWishlist, setShowWishlist] = useState(false);
  const [selectedClothId, setSelectedClothId] = useState(null);
  const [purchaseMessage, setPurchaseMessage] = useState(''); // 서버 메시지 상태 추가
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const clothListRef = useRef(null);

  const {
    data: clothes = [],
    isLoading,
    isError,
  } = useQuery('clothesList', () => clothesList());

  const handleClothClick = (clothId) => {
    setSelectedClothId(clothId);
  };

  const handlePurchaseClick = async () => {
    if (selectedClothId) {
      try {
        const response = await purchaseClothes(selectedClothId);
        setPurchaseMessage(response.message); // 서버 메시지 설정
        setIsModalOpen(true); // 모달 열기
      } catch (error) {
        console.error('구매 실패:', error);
        setPurchaseMessage('잔액이 부족합니다.');
        setIsModalOpen(true); // 실패 메시지로 모달 열기
      }
    } else {
      console.log('구매할 아이템이 선택되지 않았습니다.');
      setPurchaseMessage('구매할 아이템이 선택되지 않았습니다.');
      setIsModalOpen(true); // 실패 메시지로 모달 열기
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  useEffect(() => {
    if (clothes.length > 0) {
      const highlightedItemIndex = clothes.findIndex(
        (cloth) => cloth.isHighlighted
      );
      if (highlightedItemIndex !== -1 && clothListRef.current) {
        const highlightedElement =
          clothListRef.current.children[highlightedItemIndex];
        highlightedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [clothes]);

  return (
    <Container>
      <Header />
      <DeptTitle>현대 백화점</DeptTitle>

      <ToggleContainer>
        <ToggleButton
          active={!showWishlist}
          onClick={() => setShowWishlist(false)}
        >
          일반 상품
        </ToggleButton>
        <ToggleButton
          active={showWishlist}
          onClick={() => setShowWishlist(true)}
        >
          위시 상품
        </ToggleButton>
      </ToggleContainer>

      <div style={{ position: 'relative', width: '100%' }}>
        <Dept_backImage src={dept_back} />
        <ClothButtonStyled ref={clothListRef}>
          {showWishlist ? (
            <>
              <WishButton>위시리스트 버튼 1</WishButton>
              <WishButton>위시리스트 버튼 2</WishButton>
              <WishButton>위시리스트 버튼 3</WishButton>
              <WishButton>위시리스트 버튼 4</WishButton>
            </>
          ) : isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error loading clothes data</div>
          ) : (
            clothes.map((cloth) => (
              <ClothButton
                key={cloth.clothId}
                imgUrl={cloth.imgUrl}
                name={cloth.name}
                brand={cloth.brand}
                price={cloth.price}
                onClick={() => handleClothClick(cloth.clothId)}
              />
            ))
          )}
        </ClothButtonStyled>
      </div>

      <Button variant='buyBtn' onClick={handlePurchaseClick}>
        구매
      </Button>

      {/* InfoModal 표시 */}
      <InfoModal
        isOpen={isModalOpen}
        title='구매 결과'
        message={purchaseMessage}
        onConfirm={closeModal}
      />
    </Container>
  );
};

export default Dept;
