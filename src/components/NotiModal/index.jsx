import React from 'react';
import { useQuery } from 'react-query';
import { fetchNotifications } from '../../apis/notificationApi';
import {
  Overlay,
  Container,
  ModalContent,
  Title,
  Table,
  Row,
  Cell,
  Thead,
  CloseIcon,
  Wrapper,
  EmptyMsg,
  EmptyImg,
  EmptyWrapper,
} from './styled';
import { Loading } from '../index';
import empty from '../../assets/images/empty.png';
import closeIcon from '../../assets/images/close.svg';

/**
 * 알림 내역 모달
 * @author 임원정
 * @since 2024.09.01
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.01  	임원정        최초 생성
 * </pre>
 */

const NotiModal = ({ isOpen, toggleNotiModal }) => {
  const {
    data: notifications = [],
    isLoading,
    isError,
  } = useQuery('notifications', fetchNotifications, {
    enabled: isOpen,
  });

  if (!isOpen) return null;

  return (
    <Overlay onClick={toggleNotiModal}>
      <Container>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <Wrapper>
            <Title>알림 내역</Title>
            <CloseIcon src={closeIcon} onClick={toggleNotiModal} />
          </Wrapper>

          {notifications.length === 0 ? (
            <EmptyWrapper>
              <EmptyImg src={empty} />
              <EmptyMsg>받은 알림이 없습니다.</EmptyMsg>
            </EmptyWrapper>
          ) : isLoading ? (
            <Loading text={'로딩 중...'}></Loading>
          ) : isError ? (
            <p>오류가 발생했습니다.</p>
          ) : (
            <Table>
              <thead>
                <Row>
                  <Thead>날짜</Thead>
                  <Thead>내용</Thead>
                </Row>
              </thead>
              <tbody>
                {notifications.map((notification, index) => (
                  <Row key={index}>
                    <Cell>{notification.createdAt}</Cell>
                    <Cell>{notification.content}</Cell>
                  </Row>
                ))}
              </tbody>
            </Table>
          )}
        </ModalContent>
      </Container>
    </Overlay>
  );
};

export default NotiModal;
