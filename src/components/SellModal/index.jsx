import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import {
  Container,
  Overlay,
  ModalContent,
  TitleText,
  QuantityInputWrapper,
  TotalPrice,
  MoaImage,
  SellButtonContainer,
  QuantityDisplay,
  QuantityContainer,
  ArrowButton,
  TotalTitle,
} from './styled';
import moaImage from '../../assets/images/moa.svg';
import { Button, InfoModal } from '../index';
import { sellInvest } from '../../apis/InvestApi';
import { fetchBalance } from '../../apis/memberApi';

/**
 * 매도 모달 컴포넌트
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
const SellModal = ({
  isOpen,
  title,
  price,
  typeId,
  amount,
  onConfirm,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(amount || 0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const { refetch: refetchBalance } = useQuery('balance', fetchBalance);

  const sellMutation = useMutation(sellInvest, {
    onSuccess: (response) => {
      setResponseMessage(
        response.message || '매도가 성공적으로 완료되었습니다.'
      );
      refetchBalance();
      setIsInfoModalOpen(true);
    },

    onError: (error) => {
      const response = error.response?.data;
      setResponseMessage(response?.msg || '매도가 실패했습니다.');
      setIsInfoModalOpen(true);
    },
  });

  useEffect(() => {
    if (isOpen) {
      setQuantity(amount || 0);
      setTotalPrice(0);
    }
  }, [isOpen, amount]);

  useEffect(() => {
    setTotalPrice(quantity * price);
  }, [quantity, price]);

  if (!isOpen) return null;

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setQuantity(Number(value));
    }
  };

  const handleSell = () => {
    if (quantity > 0) {
      sellMutation.mutate({ typeId, sellAmount: quantity });
    }
  };

  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false);
    onConfirm();
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Container>
        <ModalContent>
          <TitleText>{title}</TitleText>
          <QuantityInputWrapper>
            <span>개수 </span>
            <QuantityContainer>
              <QuantityDisplay>{quantity}</QuantityDisplay>
              <div>
                <ArrowButton className='up' onClick={handleIncrement} />
                <ArrowButton className='down' onClick={handleDecrement} />
              </div>
            </QuantityContainer>
          </QuantityInputWrapper>
          <TotalPrice>
            <TotalTitle>총액</TotalTitle>
            {totalPrice}
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
          message={responseMessage}
          onConfirm={handleCloseInfoModal}
        />
      </Container>
    </Overlay>
  );
};

export default SellModal;
