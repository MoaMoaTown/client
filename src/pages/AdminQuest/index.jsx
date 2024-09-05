import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { fetchQuestStatusList, createQuest } from '../../apis/townApi';
import AdminLayout from '../../layouts/AdminLayout';
import {
  QuestTable,
  Loading,
  CreateHeader,
  CreateQuestModal,
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

const AdminQuest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [page, setPage] = useState(1);
  const [size] = useState(10);
  const navigate = useNavigate();

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
    requestCnt: questStatus.requestCnt,
    status: questStatus.selectedCnt + '/' + questStatus.capacity,
    questId: questStatus.questId,
  }));

  /* 퀘스트 만들기 */
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

  /* 신청 내역 보기 */
  const handleRowClick = (rowData) => {
    navigate(`/admin/quest/${rowData.questId}`);
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
          <QuestTable
            headers={headers}
            data={tableData}
            onRowClick={handleRowClick}
          />
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
      {isModalOpen && (
        <CreateQuestModal
          isOpen={isModalOpen}
          onCreate={handleCreate}
          onClose={() => setIsModalOpen(false)}
        ></CreateQuestModal>
      )}
    </AdminLayout>
  );
};

export default AdminQuest;
