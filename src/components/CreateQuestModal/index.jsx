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
  RewardWrapper,
  NumberInput,
  CloseIcon,
  TitleWrapper,
  ThirdWrapper,
  CapacityWrapper,
  NumberWrapper,
  ButtonWrapper,
} from './styled';
import moaIcon from '../../assets/images/moa.svg';
import closeIcon from '../../assets/images/close.svg';

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

const CreateQuestModal = ({ isOpen, onClose, onCreate }) => {
  const [title, debouncedSetTitle] = useDebouncedState('');
  const [description, debouncedSetDescription] = useDebouncedState('');
  const [reward, debouncedSetReward] = useDebouncedState('');
  const [deadline, debouncedSetDeadline] = useDebouncedState('');
  const [capacity, debouncedSetCapacity] = useDebouncedState('');

  const isButtonDisabled =
    title === '' ||
    description === '' ||
    reward === '' ||
    deadline === '' ||
    capacity === '';

  if (!isOpen) return null;

  const handleCreate = () => {
    if (!isButtonDisabled) {
      onCreate({ title, description, reward, capacity, deadline });
    }
  };

  return (
    <Overlay>
      <Container>
        <TitleWrapper>
          <Title>퀘스트 만들기</Title>
          <CloseIcon src={closeIcon} onClick={onClose} />
        </TitleWrapper>
        <ModalContent>
          <Label>퀘스트</Label>
          <Input
            onChange={(e) => debouncedSetTitle(e.target.value)}
            placeholder='퀘스트명을 입력하세요'
          />
          <Label>설명</Label>
          <Input
            onChange={(e) => debouncedSetDescription(e.target.value)}
            placeholder='설명을 입력하세요'
          />
          <Label>마감 기한</Label>
          <Input
            type='date'
            onChange={(e) => debouncedSetDeadline(e.target.value)}
            placeholder='설명을 입력하세요'
          />
          <ThirdWrapper>
            <CapacityWrapper>
              <Label>인원</Label>
              <NumberInput
                type='number'
                onChange={(e) => debouncedSetCapacity(Number(e.target.value))}
                min='0'
                placeholder='인원'
              />
            </CapacityWrapper>
            <RewardWrapper>
              <Label>보상</Label>
              <NumberWrapper>
                <MoaImage src={moaIcon} alt='Moa Icon' />
                <NumberInput
                  type='number'
                  onChange={(e) => debouncedSetReward(Number(e.target.value))}
                  min='0'
                  placeholder='보상'
                />
              </NumberWrapper>
            </RewardWrapper>
          </ThirdWrapper>
          <ButtonWrapper>
            <Button
              variant='makeTownBtn'
              disabled={isButtonDisabled}
              onClick={handleCreate}
            >
              만들기
            </Button>
          </ButtonWrapper>
        </ModalContent>
      </Container>
    </Overlay>
  );
};

export default CreateQuestModal;
