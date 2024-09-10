import React, { useRef, useState, useEffect } from 'react';
import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import ReactGA from 'react-ga4';

import {
  Header,
  Button,
  ClothButton,
  WishButton,
  InfoModal,
  Loading,
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
  ModalOverlay,
  ModalContent,
  ModalImage,
  ModalBrand,
  ModalName,
  ModalPriceWrapper,
  ModalButtonWrapper,
  CloseButton,
  MoaImageinModal,
  LoadMoreTrigger,
  WishWrapWrap,
  WishButtonStyled,
} from './styled';
import moaImage from '../../assets/images/moa.svg';
import {
  fetchClothesList,
  purchaseClothes,
  fetchWishlist,
  purchaseWishItem,
} from '../../apis/deptAPI';
import { fetchBalance } from '../../apis/memberApi';
/**
 * 백화점 페이지 컴포넌트
 * @author 임재성
 * @since 2024.08.28
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.28  	임재성        최초 생성
 * </pre>
 */
const Dept = () => {
  const [showWishlist, setShowWishlist] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isWishSelected, setIsWishSelected] = useState(false);
  const [purchaseMessage, setPurchaseMessage] = useState('');
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [manualLoading, setManualLoading] = useState(false);
  useEffect(() => {
    setManualLoading(true);
    const timer = setTimeout(() => {
      setManualLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const { refetch: refetchBalance } = useQuery('balance', fetchBalance);

  const observerRef = useRef();
  const loadMoreRef = useRef();

  const fetchClothes = ({ pageParam = 0 }) =>
    fetchClothesList({ page: pageParam });
  const fetchWishes = ({ pageParam = 0 }) => fetchWishlist({ page: pageParam });

  const {
    data: clothesData,
    fetchNextPage: fetchNextClothes,
    hasNextPage: hasMoreClothes,
    isLoading: isClothesLoading,
    isFetchingNextPage: isFetchingNextClothes,
  } = useInfiniteQuery('clothesList', fetchClothes, {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 3 ? allPages.length : undefined;
    },
    enabled: !showWishlist,
  });

  const {
    data: wishlistData,
    fetchNextPage: fetchNextWishlist,
    hasNextPage: hasMoreWishlist,
    isLoading: isWishlistLoading,
    isFetchingNextPage: isFetchingNextWishlist,
  } = useInfiniteQuery('wishlist', fetchWishes, {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 5 ? allPages.length : undefined;
    },
    enabled: showWishlist,
  });

  const purchaseMutation = useMutation(
    ({ itemId, isWish }) =>
      isWish ? purchaseWishItem(itemId) : purchaseClothes(itemId),
    {
      onSuccess: (data) => {
        setPurchaseMessage(data.message);
        setIsResultModalOpen(true);
        refetchBalance();
      },
      onError: (error) => {
        const errorMessage = error.response?.data?.msg || '구매 실패';
        setPurchaseMessage(errorMessage);
        setIsResultModalOpen(true);
      },
    }
  );

  const handleClothClick = (cloth) => {
    setSelectedItem(cloth);
    setIsWishSelected(false);
  };

  const handleWishClick = (wishItem) => {
    setSelectedItem(wishItem);
    setIsWishSelected(true);
  };

  const handlePurchaseClick = () => {
    if (selectedItem) {
      ReactGA.event({
        category: 'Cloth',
        action: 'Product Viewed',
        name: selectedItem.name,
        brand: selectedItem.brand,
        quantity: 1,
        price: selectedItem.price,
        transaction_id: selectedItem.clothId || selectedItem.wishId,
      });

      setIsPurchaseModalOpen(true);
    } else {
      setPurchaseMessage('구매할 아이템이 선택되지 않았습니다.');
      setIsResultModalOpen(true);
    }
  };

  const confirmPurchase = () => {
    if (selectedItem) {
      ReactGA.event({
        category: 'Cloth',
        action: 'Purchase',
        name: selectedItem.name,
        brand: selectedItem.brand,
        quantity: 1,
        price: selectedItem.price,
        transaction_id: selectedItem.clothId || selectedItem.wishId,
      });

      purchaseMutation.mutate({
        itemId: selectedItem.clothId || selectedItem.wishId,
        isWish: isWishSelected,
      });
      setIsPurchaseModalOpen(false);
    }
  };

  const closePurchaseModal = () => {
    setIsPurchaseModalOpen(false);
  };

  const closeResultModal = () => {
    setIsResultModalOpen(false);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (showWishlist && hasMoreWishlist) {
            fetchNextWishlist();
          } else if (!showWishlist && hasMoreClothes) {
            fetchNextClothes();
          }
        } else {
        }
      },
      { threshold: 0.1 }
    );

    const observer = observerRef.current;
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [
    showWishlist,
    hasMoreWishlist,
    hasMoreClothes,
    fetchNextWishlist,
    fetchNextClothes,
  ]);

  if (isClothesLoading || isWishlistLoading) {
    return (
      <Container>
        <Loading text='로딩 중...' />
      </Container>
    );
  }

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
            의류 상품
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
        {showWishlist ? (
          <WishButtonStyled>
            {wishlistData?.pages.map((page) =>
              page.map((wishItem) => (
                <WishButton
                  key={wishItem.wishId}
                  price={wishItem.price}
                  onClick={() => handleWishClick(wishItem)}
                >
                  {wishItem.name}
                </WishButton>
              ))
            )}
            <LoadMoreTrigger ref={loadMoreRef} />
          </WishButtonStyled>
        ) : (
          <ClothButtonStyled>
            {clothesData?.pages.map((page) =>
              page.map((cloth) => (
                <ClothButton
                  key={cloth.clothId}
                  imgUrl={cloth.imgUrl}
                  name={cloth.name}
                  brand={cloth.brand}
                  price={cloth.price}
                  onClick={() => handleClothClick(cloth)}
                />
              ))
            )}
            <LoadMoreTrigger ref={loadMoreRef} />
          </ClothButtonStyled>
        )}
      </ContentWrapper>

      <Button variant='buyBtn' onClick={handlePurchaseClick}>
        구매
      </Button>

      {isPurchaseModalOpen && selectedItem && (
        <ModalOverlay onClick={closePurchaseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {!isWishSelected && (
              <ModalImage src={selectedItem.imgUrl} alt={selectedItem.name} />
            )}
            <ModalBrand>{selectedItem.brand}</ModalBrand>
            <WishWrapWrap>
              {isWishSelected ? (
                <ModalBrand>{selectedItem.name}</ModalBrand>
              ) : (
                <ModalName>{selectedItem.name}</ModalName>
              )}
            </WishWrapWrap>
            <ModalPriceWrapper>
              <MoaImageinModal src={moaImage} alt='Moa' />
              {selectedItem.price}
            </ModalPriceWrapper>
            <ModalButtonWrapper>
              <Button variant='buyBtnInModal' onClick={confirmPurchase}>
                구매하기
              </Button>
              <CloseButton onClick={closePurchaseModal}>취소</CloseButton>
            </ModalButtonWrapper>
          </ModalContent>
        </ModalOverlay>
      )}

      <InfoModal
        isOpen={isResultModalOpen}
        title='구매 결과'
        message={purchaseMessage}
        onConfirm={closeResultModal}
      />
    </Container>
  );
};

export default Dept;
