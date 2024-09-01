import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {
  Header,
  Button,
  ClothButton,
  WishButton,
  InfoModal,
} from '../../components';
import {
  Container,
  ContentWrapper,
  DeptTitle,
  ClothButtonStyled,
  ToggleContainer,
  ToggleButton,
} from './styled';
import {
  clothesList,
  purchaseClothes,
  getWishlist,
  purchaseWishItem,
} from '../../apis/deptAPI';

const Dept = () => {
  const navigate = useNavigate();
  const [showWishlist, setShowWishlist] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null); // 선택된 아이템의 ID (ClothId 또는 WishId)
  const [isWishSelected, setIsWishSelected] = useState(false); // Wish인지 Cloth인지 구분하기 위한 상태
  const [purchaseMessage, setPurchaseMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clothListRef = useRef(null);

  const {
    data: clothes = [],
    isLoading,
    isError,
  } = useQuery('clothesList', () => clothesList());

  const {
    data: wishlist = [],
    isLoading: isWishlistLoading,
    isError: isWishlistError,
  } = useQuery('wishlist', () => getWishlist(), {
    enabled: showWishlist,
  });

  const handleClothClick = (clothId) => {
    setSelectedItemId(clothId);
    setIsWishSelected(false);
  };

  const handleWishClick = (wishId) => {
    setSelectedItemId(wishId);
    setIsWishSelected(true);
  };

  const handlePurchaseClick = async () => {
    if (selectedItemId) {
      try {
        let response;
        if (isWishSelected) {
          response = await purchaseWishItem(selectedItemId);
        } else {
          response = await purchaseClothes(selectedItemId);
        }
        setPurchaseMessage(response.message);
        setIsModalOpen(true);
      } catch (error) {
        console.error('구매 실패:', error);
        setPurchaseMessage('잔액이 부족합니다.');
        setIsModalOpen(true);
      }
    } else {
      setPurchaseMessage('구매할 아이템이 선택되지 않았습니다.');
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

      <ContentWrapper>
        <ClothButtonStyled ref={clothListRef}>
          {showWishlist ? (
            isWishlistLoading ? (
              <div>Loading...</div>
            ) : isWishlistError ? (
              <div>Error loading wishlist data</div>
            ) : (
              // wishlist.map((wishItem) => (
              //   <WishButton
              //     key={wishItem.wishId}
              //     onClick={() => handleWishClick(wishItem.wishId)}
              //   >
              //     {wishItem.name} {wishItem.price}
              //   </WishButton>
              // ))
              wishlist.map((wishItem) => (
                <WishButton
                  key={wishItem.wishId}
                  price={wishItem.price} // price를 전달
                  onClick={() => handleWishClick(wishItem.wishId)}
                >
                  {wishItem.name} {/* 아이템 이름 */}
                </WishButton>
              ))
            )
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
      </ContentWrapper>

      <Button variant='buyBtn' onClick={handlePurchaseClick}>
        구매
      </Button>

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
