import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import {
  Container,
  Overlay,
  ModalContent,
  TitleText,
  HdyImage,
  TotalPrice,
  MoaImage,
  QuantityInputWrapper,
  QuantityContainer,
  YesterdayPriceWrapper,
  TodayPriceWrapper,
  YesterdayToday,
  YesterdaySection,
  TodaySection,
  TotalPriceTitle,
  TotalPriceText,
  YesterdayText,
  PayInput,
  StyledSpan,
  ArrowButton,
  QuantityDisplay,
} from './styled';
import { Button, InfoModal } from '../index';
import moaImage from '../../assets/images/moa.svg';
import {
  buyInvest,
  getYesterdayPrice,
  getTodayPrice,
} from '../../apis/InvestApi';
import { fetchBalance } from '../../apis/memberApi';

/**
 * 매수 모달 컴포넌트
 * @author 임재성
 * @since 2024.09.01
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.01  	임재성        최초 생성
 * </pre>
 */
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
        refetchBalance();
        setIsInfoModalOpen(true);
      },
      onError: (error) => {
        const response = error.response?.data;
        setResponseMessage(response.msg || '실패 : 잔액이 부족합니다.');
        setIsInfoModalOpen(true);
      },
    }
  );

  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
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

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setTotalPrice((quantity + 1) * price);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice((quantity - 1) * price);
    }
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
            <StyledSpan>개수 </StyledSpan>
            <QuantityContainer>
              <QuantityDisplay>{quantity}</QuantityDisplay>

              <div>
                <ArrowButton className='up' onClick={handleIncrement} />
                <ArrowButton className='down' onClick={handleDecrement} />
              </div>
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
