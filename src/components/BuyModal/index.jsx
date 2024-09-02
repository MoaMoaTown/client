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
} from './styled';
import { Button, InfoModal } from '../index';
import hdyImage from '../../assets/images/hdy.png';
import moaImage from '../../assets/images/moa.svg';
import { buyInvest, getYesterdayPrice } from '../../apis/InvestApi';
import { fetchBalance } from '../../apis/memberApi';

const LargeInfoModal = ({
  isOpen,
  title,
  price,
  typeId,
  onConfirm,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const { data: yesterdayPriceData, isLoading: isLoadingYesterdayPrice } =
    useQuery(['yesterdayPrice', typeId], () => getYesterdayPrice(), {
      enabled: isOpen,
      select: (data) =>
        data.find((item) => item.type === typeId)?.price || 'N/A',
    });

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
      setQuantity(1);
      setTotalPrice(price);
    }
  }, [isOpen, price]);

  if (!isOpen) return null;

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

  const handleBuy = () => {
    buyMutation.mutate({ typeId, purchaseAmount: quantity });
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
          <HdyImage src={hdyImage} alt='HDY Image' />
          <QuantityInputWrapper>
            <span>개수: </span>
            <QuantityContainer>
              <QuantityDisplay>{quantity}</QuantityDisplay>
              <div>
                <ArrowButton className='up' onClick={handleIncrement} />
                <ArrowButton className='down' onClick={handleDecrement} />
              </div>
            </QuantityContainer>
          </QuantityInputWrapper>
          <YesterdayPriceWrapper>
            어제: {isLoadingYesterdayPrice ? 'Loading...' : yesterdayPriceData}
            <MoaImage src={moaImage} alt='Moa Icon' />
          </YesterdayPriceWrapper>
          <TotalPrice>
            총액: {totalPrice}
            <MoaImage src={moaImage} alt='Moa Icon' />
          </TotalPrice>
          <Button variant='confirmBtn' onClick={handleBuy}>
            매수하기
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
