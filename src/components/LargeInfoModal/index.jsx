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
} from './styled';
import { Button } from '../index';
import hdyImage from '../../assets/images/hdy.png';
import moaImage from '../../assets/images/moa.svg';
import { buyInvest } from '../../apis/InvestApi'; // API 호출 함수 import

const LargeInfoModal = ({
  isOpen,
  title,
  price,
  typeId, // typeId prop 추가
  hint,
  currentMoa,
  onConfirm,
  onClose, // 모달을 닫는 함수 prop 추가
}) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  // 모달이 열릴 때 상태 초기화
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
