import React, { useState, useRef, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query';
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
  ToggleWrapper,
  ToggleContainer,
  ToggleButton,
  ActiveBackground,
} from './styled';
import {
  clothesList,
  purchaseClothes,
  getWishlist,
  purchaseWishItem,
} from '../../apis/deptAPI';
import { fetchBalance } from '../../apis/memberApi';

const Dept = () => {
  const navigate = useNavigate();
  const [showWishlist, setShowWishlist] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isWishSelected, setIsWishSelected] = useState(false);
  const [purchaseMessage, setPurchaseMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clothListRef = useRef(null);

  const {
    data: clothes = [],
    isLoading,
    isError,
  } = useQuery('clothesList', clothesList);

  const {
    data: wishlist = [],
    isLoading: isWishlistLoading,
    isError: isWishlistError,
  } = useQuery('wishlist', getWishlist, { enabled: showWishlist });

  const { data: balance, refetch: refetchBalance } = useQuery(
    'balance',
    fetchBalance
  );

  const purchaseMutation = useMutation(
    ({ itemId, isWish }) =>
      isWish ? purchaseWishItem(itemId) : purchaseClothes(itemId),
    {
      onSuccess: (data) => {
        setPurchaseMessage(data.message);
        setIsModalOpen(true);
        refetchBalance(); // 구매 후 balance 업데이트
      },
      onError: (error) => {
        setPurchaseMessage('구매 실패: ' + error.message);
        setIsModalOpen(true);
      },
    }
  );

  const handleClothClick = (clothId) => {
    setSelectedItemId(clothId);
    setIsWishSelected(false);
  };

  const handleWishClick = (wishId) => {
    setSelectedItemId(wishId);
    setIsWishSelected(true);
  };

  const handlePurchaseClick = () => {
    if (selectedItemId) {
      purchaseMutation.mutate({
        itemId: selectedItemId,
        isWish: isWishSelected,
      });
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

      <ToggleWrapper>
        <ToggleContainer>
          <ActiveBackground activeIndex={showWishlist ? 1 : 0} />
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
      </ToggleWrapper>

      <ContentWrapper>
        <ClothButtonStyled ref={clothListRef}>
          {showWishlist ? (
            isWishlistLoading ? (
              <div>Loading...</div>
            ) : isWishlistError ? (
              <div>Error loading wishlist data</div>
            ) : (
              wishlist.map((wishItem) => (
                <WishButton
                  key={wishItem.wishId}
                  price={wishItem.price}
                  onClick={() => handleWishClick(wishItem.wishId)}
                >
                  {wishItem.name}
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
