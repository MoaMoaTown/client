import React from 'react';
import { Button } from '../index';
import {
  BubbleContainer,
  BubbleContent,
  BubbleTitle,
  BubbleText,
  BubbleArrow,
  ButtonWrapper,
  BackgroundOverlay,
} from './styled';

/**
 * 말풍선 컴포넌트
 * @author 이주현
 * @since 2024.09.11
 * @version 1.1
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.09.11  이주현      위치 정보 추가
 * </pre>
 */

const SpeechBubble = ({ modelName, onConfirm, onClose, position }) => {
  let title = '';
  let text = '';

  switch (modelName) {
    case 'Department':
      title = '백화점';
      text =
        '현대 백화점 의류 상품과\n위시 상품을 살 수 있는\n백화점 페이지로\n이동하시겠습니까?';
      break;
    case 'Quest':
      title = '퀘스트';
      text =
        '간단한 퀘스트를 통해\n모아를 벌 수 있는\n퀘스트 페이지로\n이동하시겠습니까?';
      break;
    case 'Ranking':
      title = '랭킹';
      text =
        '타운 내 사람들의 순위와\n프로필 사진을 볼 수 있는\n랭킹 페이지로\n이동하시겠습니까?';
      break;
    case 'Jobmoa':
      title = '잡모아';
      text =
        '역할 리스트를 보고\n직접 신청할 수 있는\n잡모아 페이지로\n이동하시겠습니까?';
      break;
    case 'Invest':
      title = '투자';
      text =
        '흰디 몸무게와 걸음수로\n매수하고 매도할 수 있는\n투자 페이지로\n이동하시겠습니까?';
      break;
    case 'Closet':
      title = '옷장';
      text =
        '구입한 옷들로\n흰디를 꾸며볼 수 있는\n옷장 페이지로\n이동하시겠습니까?';
      break;
    case 'Knowledge':
      title = '지식';
      text =
        '경제 관련 지식들을\n보고 배울 수 있는\n지식 페이지로\n이동하시겠습니까?';
      break;
    default:
      title = '메인';
      text = '페이지로 이동하시겠습니까?';
  }

  return (
    <BackgroundOverlay onClick={onClose}>
      <BubbleContainer
        className='speech-bubble'
        style={{ top: position.top, left: position.left }}
        onClick={(e) => e.stopPropagation()}
      >
        <BubbleContent>
          <BubbleTitle>{title}</BubbleTitle>
          <BubbleText>{text}</BubbleText>
          <ButtonWrapper>
            <Button variant='confirmBtn3' onClick={onConfirm}>
              확인
            </Button>
            <Button variant='cancelBtn' onClick={onClose}>
              취소
            </Button>
          </ButtonWrapper>
        </BubbleContent>
        <BubbleArrow />
      </BubbleContainer>
    </BackgroundOverlay>
  );
};

export default SpeechBubble;
