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
  PayInput,
  TotalTitle,
} from './styled';
import moaImage from '../../assets/images/moa.svg';
import { Button, InfoModal } from '../index';
import { sellInvest } from '../../apis/InvestApi'; // sellInvest API 호출
import { fetchBalance } from '../../apis/memberApi'; // fetchBalance API 호출
import useDebouncedState from '../../hooks/useDebouncedState';

const SellModal = ({ isOpen, title, price, typeId, onConfirm, onClose }) => {
  const [quantity, setQuantity] = useState(''); // 초기값 빈 문자열
  const [totalPrice, setTotalPrice] = useState(0);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const { refetch: refetchBalance } = useQuery('balance', fetchBalance);

  const sellMutation = useMutation(sellInvest, {
    onSuccess: (response) => {
      setResponseMessage(
        response.message || '매도가 성공적으로 완료되었습니다.'
      );
      refetchBalance(); // 성공 시 balance를 갱신
      setIsInfoModalOpen(true);
    },
    onError: () => {
      setResponseMessage('매도 요청에 실패했습니다.');
      setIsInfoModalOpen(true);
    },
  });

  useEffect(() => {
    if (isOpen) {
      setQuantity(''); // 수량 초기화
      setTotalPrice(0); // 총액 초기화
    }
  }, [isOpen]);

  useEffect(() => {
    const quantityNumber = Number(quantity);
    setTotalPrice(quantityNumber * price); // 수량이 변경될 때마다 총액 업데이트
  }, [quantity, price]);

  if (!isOpen) return null;

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      // 빈 문자열 또는 숫자만 허용
      setQuantity(value);
    }
  };

  const handleSell = () => {
    const sellQuantity = Number(quantity);
    if (sellQuantity > 0) {
      sellMutation.mutate({ typeId, sellAmount: sellQuantity });
    }
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
            <span>개수 </span>
            <PayInput
              type='number'
              value={quantity}
              onChange={handleQuantityChange}
              min='0'
            />
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
          message={responseMessage} // 서버에서 받은 메시지를 표시
          onConfirm={handleCloseInfoModal}
        />
      </Container>
    </Overlay>
  );
};

export default SellModal;
