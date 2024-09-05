import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import {
  fetchMemberQuestRequests,
  selectMemberQuestRequest,
  completeMemberQuest,
} from '../../apis/townApi';
import AdminLayout from '../../layouts/AdminLayout';
import { Loading, AdminModal } from '../../components';
import {
  ContentWrapper,
  TitleWrapper,
  Title,
  BackButton,
  PaginationWrapper,
  PageButton,
  PageNumber,
  Container,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  Cell,
  StatusCell,
  EmptyWrapper,
  EmptyMsg,
  Description,
} from './styled';
import back from '../../assets/images/back.svg';

const AdminQuestRequest = () => {
  const { questId } = useParams();
  const [page, setPage] = useState(1);
  const [size] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [modalContent, setModalContent] = useState('');
  const navigate = useNavigate();

  /* 퀘스트 신청 내역 조회 */
  const { data, isLoading, refetch } = useQuery(
    ['questRequests', questId, page, size],
    () => fetchMemberQuestRequests(questId, page, size),
    { keepPreviousData: true }
  );
  const questRequests = data || [];

  /* 퀘스트 신청 내역 조회 */
  const selectMutation = useMutation(selectMemberQuestRequest, {
    onSuccess: () => {
      refetch();
      setIsModalOpen(false);
    },
    onError: (error) => {
      console.error('선정 실패:', error);
    },
  });

  const completeMutation = useMutation(completeMemberQuest, {
    onSuccess: () => {
      refetch();
      setIsModalOpen(false);
    },
    onError: (error) => {
      console.error('완료 실패:', error);
    },
  });

  const handleStatusClick = (request) => {
    setSelectedRequest(request);
    if (request.status === 1) {
      setModalContent('퀘스트 담당자로 선정하시겠습니까?');
    } else if (request.status === 2) {
      setModalContent('퀘스트를 완료처리하시겠습니까?');
    }
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    if (selectedRequest.status === 1) {
      selectMutation.mutate(selectedRequest.memberQuestId);
    } else if (selectedRequest.status === 2) {
      completeMutation.mutate(selectedRequest.memberQuestId);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <AdminLayout>
      <ContentWrapper>
        <TitleWrapper>
          <BackButton onClick={() => navigate(-1)}>
            <img src={back} alt='뒤로가기' />
          </BackButton>
          <Title>퀘스트 신청 내역</Title>
        </TitleWrapper>
        <Description>
          상태를 눌러 퀘스트 담당자 선정 혹은 수행 완료 처리를 해주세요.
        </Description>
        {isLoading ? (
          <Loading text='로딩 중...' />
        ) : (
          <Container>
            {questRequests.length > 0 ? (
              <>
                <TableWrapper>
                  <Table>
                    <thead>
                      <tr>
                        <Thead>No</Thead>
                        <Thead>요청인</Thead>
                        <Thead>상태</Thead>
                      </tr>
                    </thead>
                    <Tbody>
                      {questRequests.map((request, index) => (
                        <tr key={index}>
                          <Cell>{(page - 1) * size + (index + 1)}</Cell>
                          <Cell>{request.nickName}</Cell>
                          <StatusCell
                            status={request.status}
                            onClick={() => {
                              if (request.status !== 3)
                                handleStatusClick(request);
                            }}
                          >
                            {request.status === 3
                              ? '완료'
                              : request.status === 2
                              ? '수행 중'
                              : '선정 전'}
                          </StatusCell>
                        </tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableWrapper>
              </>
            ) : (
              <EmptyWrapper>
                <EmptyMsg>퀘스트 신청 내역이 없습니다.</EmptyMsg>
              </EmptyWrapper>
            )}
          </Container>
        )}
        <PaginationWrapper>
          <PageButton
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            이전
          </PageButton>
          <PageNumber>{page}</PageNumber>
          <PageButton
            onClick={() => setPage((prev) => prev + 1)}
            disabled={questRequests.length < size}
          >
            다음
          </PageButton>
        </PaginationWrapper>
      </ContentWrapper>
      {isModalOpen && (
        <AdminModal
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          title={modalContent}
        />
      )}
    </AdminLayout>
  );
};

export default AdminQuestRequest;
