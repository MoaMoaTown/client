import React, { useState, useEffect } from 'react';
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
  YesterdayPriceText, // 어제의 가격 텍스트 스타일 추가
  YesterdayPriceWrapper, // 어제의 가격 표시를 위한 스타일
} from './styled';
import { Button } from '../index';
import hdyImage from '../../assets/images/hdy.png';
import moaImage from '../../assets/images/moa.svg';
import { buyInvest, getYesterdayPrice } from '../../apis/InvestApi'; // 어제의 가격 API import

const LargeInfoModal = ({
  isOpen,
  title,
  price,
  typeId,
  hint,
  currentMoa,
  onConfirm,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [yesterdayPrice, setYesterdayPrice] = useState(null); // 어제의 가격 상태 추가

  // 모달이 열릴 때 상태 초기화 및 어제의 가격 가져오기
  useEffect(() => {
    const fetchYesterdayPrice = async () => {
      try {
        const data = await getYesterdayPrice();
        const yesterdayData = data.find((item) => item.type === typeId);
        setYesterdayPrice(yesterdayData ? yesterdayData.price : 'N/A');
      } catch (error) {
        console.error('어제의 가격을 가져오는데 실패했습니다.', error);
        setYesterdayPrice('N/A');
      }
    };

    if (isOpen) {
      setQuantity(1);
      setTotalPrice(price);
      fetchYesterdayPrice(); // 어제의 가격 가져오기
    }
  }, [isOpen, price, typeId]);

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

  const handleBuy = async () => {
    try {
      const response = await buyInvest(typeId, quantity);
      console.log('매수 성공:', response);
      onConfirm(); // 매수 성공 후 모달 닫기
    } catch (error) {
      console.error('매수 실패:', error);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // 모달 닫기
    }
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
            어제: {yesterdayPrice}
            <MoaImage src={moaImage} alt='Moa Icon' />
          </YesterdayPriceWrapper>{' '}
          {/* 어제의 가격 표시 */}
          <TotalPrice>
            총액: {totalPrice}
            <MoaImage src={moaImage} alt='Moa Icon' />
          </TotalPrice>
          <Button variant='confirmBtn' onClick={handleBuy}>
            매수하기
          </Button>
        </ModalContent>
      </Container>
    </Overlay>
  );
};

export default LargeInfoModal;
