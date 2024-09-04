import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { getJobsByTownId } from '../../apis/jobApi';
import { createJob } from '../../apis/townApi';
import AdminLayout from '../../layouts/AdminLayout';
import { AdminTable, CreateHeader } from '../../components';
import { ContentWrapper, Title } from './styled';
import CreateJobModal from '../../components/CreateJobModal';

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
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(4);
  const { data: job = [], refetch } = useQuery('job', getJobsByTownId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const headers = ['No', '역할', '설명', '급여'];
  const tableData = job.map((job, index) => ({
    no: { type: 'text', value: index + 1 },
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
        <AdminTable
          headers={headers}
          data={tableData}
          emptyMessage='역할이 없습니다.'
        />
      </ContentWrapper>
      {isModalOpen && (
        <CreateJobModal
          isOpen={isModalOpen}
          onCreate={handleCreate}
          onClose={() => setIsModalOpen(false)}
          title='역할 만들기'
        ></CreateJobModal>
      )}
    </AdminLayout>
  );
};

export default AdminJob;
