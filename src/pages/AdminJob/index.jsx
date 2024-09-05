import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { createJob, getJobsByTownId } from '../../apis/townApi';
import AdminLayout from '../../layouts/AdminLayout';
import {
  AdminTable,
  CreateHeader,
  CreateJobModal,
  Loading,
} from '../../components';
import {
  ContentWrapper,
  Title,
  PaginationWrapper,
  PageButton,
  PageNumber,
} from './styled';

/**
 * 관리자 역할 관리 페이지
 * @author 임원정
 * @since 2024.09.03
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.03 	임원정        최초 생성
 * </pre>
 */

const AdminJob = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [page, setPage] = useState(0);
  const [size] = useState(10);
  const { data, refetch, isLoading } = useQuery(
    ['job', page, size],
    () => getJobsByTownId(page, size),
    { keepPreviousData: true }
  );
  const jobs = data || [];

  const headers = ['No', '역할', '설명', '급여'];
  const tableData = jobs.map((job, index) => ({
    no: { type: 'text', value: page * size + index + 1 },
    name: { type: 'text', value: job.name },
    description: { type: 'text', value: job.description },
    pay: { type: 'text', value: job.pay + ' 모아' },
  }));

  const mutation = useMutation(createJob, {
    onSuccess: () => {
      refetch();
      setIsModalOpen(false);
    },
    onError: (error) => {
      console.error('역할 생성 실패:', error);
    },
  });

  const handleCreate = ({ name, description, pay }) => {
    mutation.mutate({ name, description, pay });
  };

  return (
    <AdminLayout>
      <ContentWrapper>
        <Title>역할 관리</Title>
        <CreateHeader title='역할 목록' onCreate={() => setIsModalOpen(true)} />
        {isLoading ? (
          <Loading text='로딩 중...' />
        ) : (
          <AdminTable
            headers={headers}
            data={tableData}
            emptyMessage='역할이 없습니다.'
            alignments={['center', 'left', 'left', 'center']}
          />
        )}
        <PaginationWrapper>
          <PageButton
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
          >
            이전
          </PageButton>
          <PageNumber>{page + 1}</PageNumber>
          <PageButton
            onClick={() => setPage((prev) => prev + 1)}
            disabled={jobs.length < size}
          >
            다음
          </PageButton>
        </PaginationWrapper>
      </ContentWrapper>
      {isModalOpen && (
        <CreateJobModal
          isOpen={isModalOpen}
          onCreate={handleCreate}
          onClose={() => setIsModalOpen(false)}
        ></CreateJobModal>
      )}
    </AdminLayout>
  );
};

export default AdminJob;
