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

const Dept = () => {
  const [showWishlist, setShowWishlist] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isWishSelected, setIsWishSelected] = useState(false);
  const [purchaseMessage, setPurchaseMessage] = useState('');
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [manualLoading, setManualLoading] = useState(false); // 수동 로딩 상태
  useEffect(() => {
    // 수동 로딩을 2초 동안 유지
    setManualLoading(true);
    const timer = setTimeout(() => {
      setManualLoading(false);
    }, 2000);

    // 클린업 함수에서 타이머 해제
    return () => clearTimeout(timer);
  }, []);

  // const { refetch } = useQuery('balance', fetchBalance);
  const { refetch: refetchBalance } = useQuery('balance', fetchBalance);

  const observerRef = useRef();
  const loadMoreRef = useRef();

  const fetchClothes = ({ pageParam = 0 }) =>
    fetchClothesList({ page: pageParam });
  const fetchWishes = ({ pageParam = 0 }) => fetchWishlist({ page: pageParam });

  // const {
  //   data: clothesData,
  //   fetchNextPage: fetchNextClothes,
  //   hasNextPage: hasMoreClothes,
  // } = useInfiniteQuery('clothesList', fetchClothes, {
  //   getNextPageParam: (lastPage, allPages) => {
  //     return lastPage.length === 3 ? allPages.length : undefined;
  //   },
  //   enabled: !showWishlist, // 의류 상품을 볼 때만 실행
  // });

  // const {
  //   data: wishlistData,
  //   fetchNextPage: fetchNextWishlist,
  //   hasNextPage: hasMoreWishlist,
  // } = useInfiniteQuery('wishlist', fetchWishes, {
  //   getNextPageParam: (lastPage, allPages) => {
  //     return lastPage.length === 5 ? allPages.length : undefined;
  //   },
  //   enabled: showWishlist, // 위시리스트를 볼 때만 실행
  // });
  const {
    data: clothesData,
    fetchNextPage: fetchNextClothes,
    hasNextPage: hasMoreClothes,
    isLoading: isClothesLoading,
    isFetchingNextPage: isFetchingNextClothes, // 무한 스크롤 로딩 상태
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
    isFetchingNextPage: isFetchingNextWishlist, // 무한 스크롤 로딩 상태
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
        refetchBalance(); // 구매 성공 후 추가 작업을 할 수 있습니다.
      },
      onError: (error) => {
        const errorMessage = error.response?.data?.msg || '구매 실패';
        setPurchaseMessage(errorMessage); // 실패 시 메시지
        // setPurchaseMessage('구매 실패: ' + error.message);
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
      // 구매를 시도한 상품 정보 전송
      ReactGA.event({
        items: [
          {
            id: selectedItem.clothId || selectedItem.wishId,
            name: selectedItem.name,
            category: 'Cloth', // 카테고리 명 변경 가능
            action: 'Product Viewed',
            brand: selectedItem.brand,
            price: selectedItem.price,
            quantity: 1,
          },
        ],
      });

      setIsPurchaseModalOpen(true);
    } else {
      setPurchaseMessage('구매할 아이템이 선택되지 않았습니다.');
      setIsResultModalOpen(true);
    }
  };

  const confirmPurchase = () => {
    if (selectedItem) {
      // 실제 구매 이벤트 전송
      ReactGA.event({
        category: 'Cloth',
        action: 'Purchase',
        name: selectedItem.name,
        brand: selectedItem.brand,
        quantity: 1,
        price: selectedItem.price,
        transaction_id: selectedItem.clothId || selectedItem.wishId,
      });

      // 구매 처리
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
        // IntersectionObserver의 콜백 함수가 호출되었음을 확인
        console.log('IntersectionObserver 호출됨', entries[0]);

        if (entries[0].isIntersecting) {
          console.log('LoadMoreTrigger가 화면에 보입니다.');

          if (showWishlist && hasMoreWishlist) {
            console.log('위시 상품 데이터를 로드합니다.');
            fetchNextWishlist();
          } else if (!showWishlist && hasMoreClothes) {
            console.log('의류 상품 데이터를 로드합니다.');
            fetchNextClothes();
          }
        } else {
          console.log('LoadMoreTrigger가 화면에 보이지 않습니다.');
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

      {/* <ContentWrapper>
        <ClothButtonStyled>
          {showWishlist
            ? wishlistData?.pages.map((page) =>
                page.map((wishItem) => (
                  <WishButton
                    key={wishItem.wishId}
                    price={wishItem.price}
                    onClick={() => handleWishClick(wishItem)}
                  >
                    {wishItem.name}
                  </WishButton>
                ))
              )
            : clothesData?.pages.map((page) =>
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
      </ContentWrapper> */}
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
          </ClothButtonStyled>
        )}
        <LoadMoreTrigger ref={loadMoreRef} />
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
