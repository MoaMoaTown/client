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
  YesterdayPriceWrapper, // 어제의 가격 표시를 위한 스타일
} from './styled';
import { Button, InfoModal } from '../index'; // InfoModal 추가
import hdyImage from '../../assets/images/hdy.png';
import moaImage from '../../assets/images/moa.svg';
import { buyInvest, getYesterdayPrice } from '../../apis/InvestApi';

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
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false); // InfoModal 상태 추가
  const [responseMessage, setResponseMessage] = useState(''); // 서버 응답 메시지 상태 추가

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
      setResponseMessage(response.message); // 서버 응답 메시지를 상태에 저장
      setIsInfoModalOpen(true); // InfoModal 열기
    } catch (error) {
      console.error('매수 실패:', error);
      setResponseMessage('잔액이 부족합니다.'); // 실패 메시지
      setIsInfoModalOpen(true); // InfoModal 열기
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // 모달 닫기
    }
  };

  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false); // InfoModal 닫기
    onConfirm(); // LargeInfoModal 닫기
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
          </YesterdayPriceWrapper>
          <TotalPrice>
            총액: {totalPrice}
            <MoaImage src={moaImage} alt='Moa Icon' />
          </TotalPrice>
          <Button variant='confirmBtn' onClick={handleBuy}>
            매수하기
          </Button>
        </ModalContent>

        {/* InfoModal 추가 */}
        <InfoModal
          isOpen={isInfoModalOpen}
          title='매수 결과'
          message={responseMessage} // 서버에서 받은 메시지를 표시
          onConfirm={handleCloseInfoModal}
        />
      </Container>
    </Overlay>
  );
};

export default LargeInfoModal;
