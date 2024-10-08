import React from 'react';
import closeIcon from '../../assets/images/close.svg';
import moaIcon from '../../assets/images/moa.svg';
import useDebouncedState from '../../hooks/useDebouncedState';
import { Button } from '../index';
import {
  CloseIcon,
  Container,
  Input,
  Label,
  MoaImage,
  ModalContent,
  Overlay,
  PayInput,
  PayWrapper,
  Title,
  TitleWrapper,
} from './styled';

/**
 * 역할 만들기 모달
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

const CreateJobModal = ({ isOpen, onClose, onCreate }) => {
  const [name, debouncedSetName] = useDebouncedState('');
  const [description, debouncedSetDescription] = useDebouncedState('');
  const [pay, debouncedSetPay] = useDebouncedState('');

  const isButtonDisabled = name === '' || description === '' || pay === '';

  if (!isOpen) return null;

  const handleCreate = () => {
    if (!isButtonDisabled) {
      onCreate({ name, description, pay });
    }
  };

  return (
    <Overlay>
      <Container>
        <TitleWrapper>
          <Title>역할 만들기</Title>
          <CloseIcon src={closeIcon} onClick={onClose} />
        </TitleWrapper>
        <ModalContent>
          <Label>역할 이름</Label>
          <Input
            onChange={(e) => debouncedSetName(e.target.value)}
            placeholder='역할의 이름을 입력하세요'
          />
          <Label>설명</Label>
          <Input
            onChange={(e) => debouncedSetDescription(e.target.value)}
            placeholder='설명을 입력하세요'
          />
          <Label>급여</Label>
          <PayWrapper>
            <MoaImage src={moaIcon} alt='Moa Icon' />
            <PayInput
              type='number'
              onChange={(e) => debouncedSetPay(Number(e.target.value))}
              min='0'
              placeholder='급여'
            />
            <Button
              variant='makeTownBtn'
              disabled={isButtonDisabled}
              onClick={handleCreate}
            >
              만들기
            </Button>
          </PayWrapper>
        </ModalContent>
      </Container>
    </Overlay>
  );
};

export default CreateJobModal;
