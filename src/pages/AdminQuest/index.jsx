import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { fetchQuestStatusList, createQuest } from '../../apis/townApi';
import AdminLayout from '../../layouts/AdminLayout';
import {
  AdminTable,
  AdminModal,
  Loading,
  CreateHeader,
  JobStatus,
} from '../../components';
import {
  ContentWrapper,
  Title,
  PaginationWrapper,
  PageButton,
  PageNumber,
} from './styled';

/**
 * 관리자 퀘스트 관리 페이지
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

const AdminWishRequest = () => {
  const [isCreateModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuestId, setSelectedQuestId] = useState(null);

  const [page, setPage] = useState(1);
  const [size] = useState(10);

  const { data, isLoading, refetch } = useQuery(
    ['questStatusList', page, size],
    () => fetchQuestStatusList(page, size),
    { keepPreviousData: true }
  );

  const questStatusList = data || [];

  const headers = ['No', '퀘스트명', '보상', '기한', '신청 인원', '선정 현황'];
  const tableData = questStatusList.map((questStatus, index) => ({
    no: (page - 1) * size + index + 1,
    title: questStatus.title,
    reward: questStatus.reward,
    deadline: questStatus.deadline,
    requstCnt: questStatus.requstCnt,
    status: questStatus.selectedCnt + '/' + questStatus.capacity,
  }));

  const mutation = useMutation(createQuest, {
    onSuccess: () => {
      refetch();
      setIsModalOpen(false);
    },
    onError: (error) => {
      console.error('퀘스트 생성 실패:', error);
    },
  });

  const handleCreate = ({ title, description, reward, capacity, deadline }) => {
    mutation.mutate({ title, description, reward, capacity, deadline });
  };

  const handleConfirm = () => {
    if (selectedQuestId) {
      mutation.mutate(selectedQuestId);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <AdminLayout>
      <ContentWrapper>
        <Title>퀘스트 관리</Title>
        <CreateHeader
          title='퀘스트 목록'
          onCreate={() => setIsModalOpen(true)}
        />
        {isLoading ? (
          <Loading text='로딩 중...' />
        ) : (
          <AdminTable headers={headers} data={tableData} />
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
            disabled={questStatusList.length < size}
          >
            다음
          </PageButton>
        </PaginationWrapper>
      </ContentWrapper>
      {/* {isModalOpen && (
        <AdminModal
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          title='위시 사용 완료 처리하시겠습니까?'
        />
      )} */}
    </AdminLayout>
  );
};

export default AdminWishRequest;
