import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import {
  Container,
  Overlay,
  ModalContent,
  TitleText,
  HdyImage,
  QuantityDisplay,
  TotalPrice,
  MoaImage,
  QuantityInputWrapper,
  QuantityContainer,
  ArrowButton,
  YesterdayPriceWrapper,
  TodayPriceWrapper,
  YesterdayToday,
  YesterdaySection,
  TodaySection,
  TotalPriceTitle,
  TotalPriceText,
  YesterdayText,
  PayInput,
} from './styled';
import { Button, InfoModal } from '../index';
import hdyImage from '../../assets/images/hdHello.svg';
import moaImage from '../../assets/images/moa.svg';
import {
  buyInvest,
  getYesterdayPrice,
  getTodayPrice,
} from '../../apis/InvestApi';
import { fetchBalance } from '../../apis/memberApi';

const LargeInfoModal = ({
  isOpen,
  title,
  price,
  typeId,
  onConfirm,
  onClose,
  image,
}) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState('');
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const { data: yesterdayPriceData, isLoading: isLoadingYesterdayPrice } =
    useQuery(['yesterdayPrice', typeId], () => getYesterdayPrice(), {
      enabled: isOpen,
      select: (data) =>
        data.find((item) => item.type === typeId)?.price || 'N/A',
    });

  const { data: todayPriceData, isLoading: isLoadingTodayPrice } = useQuery(
    ['todayPrice', typeId],
    () => getTodayPrice(),
    {
      enabled: isOpen,
      select: (data) =>
        data.find((item) => item.type === typeId)?.price || 'N/A',
    }
  );

  const { refetch: refetchBalance } = useQuery('balance', fetchBalance);

  const buyMutation = useMutation(
    (data) => buyInvest(data.typeId, data.purchaseAmount),
    {
      onSuccess: (response) => {
        setResponseMessage(
          response.message || '매수가 성공적으로 완료되었습니다.'
        );
        refetchBalance(); // 성공 시 balance를 갱신
        setIsInfoModalOpen(true);
      },
      onError: () => {
        setResponseMessage('잔액이 부족합니다.');
        setIsInfoModalOpen(true);
      },
    }
  );

  useEffect(() => {
    if (isOpen) {
      setQuantity('');
      setTotalPrice(price);
    }
  }, [isOpen, price]);

  useEffect(() => {
    if (quantity === '') {
      setTotalPrice(price);
    } else {
      setTotalPrice(quantity * price);
    }
  }, [quantity, price]);

  if (!isOpen) return null;

  const handleBuy = () => {
    buyMutation.mutate({ typeId, purchaseAmount: Number(quantity) });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false);
    onConfirm();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Container>
        <ModalContent>
          <TitleText>{title}</TitleText>
          <HdyImage src={image} alt='Selected Image' />
          <YesterdayToday>
            <YesterdaySection>
              <YesterdayPriceWrapper>
                <YesterdayText>어제</YesterdayText>
                {isLoadingYesterdayPrice ? 'Loading...' : yesterdayPriceData}
              </YesterdayPriceWrapper>
            </YesterdaySection>
            <TodaySection>
              <TodayPriceWrapper>
                <YesterdayText>오늘</YesterdayText>
                {isLoadingTodayPrice ? 'Loading...' : todayPriceData}
              </TodayPriceWrapper>
            </TodaySection>
          </YesterdayToday>
          <QuantityInputWrapper>
            <span>개수 </span>
            <QuantityContainer>
              <PayInput
                type='number'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min='0'
              />
            </QuantityContainer>
          </QuantityInputWrapper>
          <TotalPriceTitle>
            <TotalPriceText>총액</TotalPriceText>
            <TotalPrice>
              <MoaImage src={moaImage} alt='Moa Icon' />
              {totalPrice}
            </TotalPrice>
          </TotalPriceTitle>
          <Button variant='confirmBtn' onClick={handleBuy}>
            구매하기
          </Button>
        </ModalContent>

        <InfoModal
          isOpen={isInfoModalOpen}
          title='매수 결과'
          message={responseMessage}
          onConfirm={handleCloseInfoModal}
        />
      </Container>
    </Overlay>
  );
};

export default LargeInfoModal;
