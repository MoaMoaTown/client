import React, { useState } from 'react';
import { Button } from '../index';
import useDebouncedState from '../../hooks/useDebouncedState';
import {
  Overlay,
  Container,
  Title,
  ModalContent,
  Label,
  Input,
  MoaImage,
  PriceWrapper,
  PriceInput,
  CloseIcon,
  TitleWrapper,
} from './styled';
import moaIcon from '../../assets/images/moa.svg';
import closeIcon from '../../assets/images/close.svg';

/**
 * 위시 상품 만들기 모달
 * @author 임원정
 * @since 2024.09.04
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.04 	임원정        최초 생성
 * </pre>
 */

const CreateWishModal = ({ isOpen, onClose, onCreate }) => {
  const [wishName, debouncedSetWishName] = useDebouncedState('');
  const [price, debouncedSetPrice] = useDebouncedState('');

  const isButtonDisabled = wishName === '' || price === '';

  if (!isOpen) return null;

  const handleCreate = () => {
    if (!isButtonDisabled) {
      onCreate({ wishName, price });
    }
  };

  return (
    <Overlay>
      <Container>
        <TitleWrapper>
          <Title>위시 상품 만들기</Title>
          <CloseIcon src={closeIcon} onClick={onClose} />
        </TitleWrapper>
        <ModalContent>
          <Label>상품명</Label>
          <Input
            onChange={(e) => debouncedSetWishName(e.target.value)}
            placeholder='위시 상품의 이름을 입력하세요'
          />
          <Label>가격</Label>
          <PriceWrapper>
            <MoaImage src={moaIcon} alt='Moa Icon' />
            <PriceInput
              type='number'
              onChange={(e) => debouncedSetPrice(Number(e.target.value))}
              min='0'
              placeholder='가격'
            />
            <Button
              variant='makeTownBtn'
              disabled={isButtonDisabled}
              onClick={handleCreate}
            >
              만들기
            </Button>
          </PriceWrapper>
        </ModalContent>
      </Container>
    </Overlay>
  );
};

export default CreateWishModal;
