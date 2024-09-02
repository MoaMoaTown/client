import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import {
  Container,
  Overlay,
  ModalContent,
  TitleText,
  QuantityInputWrapper,
  QuantityContainer,
  ArrowButton,
  TotalPrice,
  MoaImage,
  SellButtonContainer,
} from './styled';
import moaImage from '../../assets/images/moa.svg';
import { Button, InfoModal } from '../index';
import { sellInvest } from '../../apis/InvestApi'; // sellInvest API 호출

const SellModal = ({ isOpen, title, price, typeId, onConfirm, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const sellMutation = useMutation(sellInvest, {
    onSuccess: (response) => {
      setResponseMessage(
        response.message || '매도가 성공적으로 완료되었습니다.'
      );
      setIsInfoModalOpen(true);
    },
    onError: () => {
      setResponseMessage('매도 요청에 실패했습니다.');
      setIsInfoModalOpen(true);
    },
  });

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

  const handleSell = () => {
    sellMutation.mutate({ typeId, sellAmount: quantity });
  };

  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false);
    onConfirm(); // 매도 완료 후 추가 동작
    onClose(); // SellModal 닫기
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
          <QuantityInputWrapper>
            <span>개수: </span>
            <QuantityContainer>
              <span>{quantity}</span>
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
          <SellButtonContainer>
            <Button variant='confirmBtn' onClick={handleSell}>
              매도하기
            </Button>
          </SellButtonContainer>
        </ModalContent>

        <InfoModal
          isOpen={isInfoModalOpen}
          title='매도 결과'
          message={responseMessage} // 서버에서 받은 메시지를 표시
          onConfirm={handleCloseInfoModal}
        />
      </Container>
    </Overlay>
  );
};

export default SellModal;
