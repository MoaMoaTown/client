import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { fetchJobRequests, allowJobRequest } from '../../apis/townApi';
import AdminLayout from '../../layouts/AdminLayout';
import { AdminTable, AdminModal, Loading } from '../../components';
import {
  ContentWrapper,
  Title,
  PaginationWrapper,
  PageButton,
  PageNumber,
} from './styled';

/**
 * 관리자 역할 신청 내역 페이지
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

const AdminJobRequest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobRequestId, setSelectedJobRequestId] = useState(null);

  const [page, setPage] = useState(1);
  const [size] = useState(10);

  const { data, isLoading, refetch } = useQuery(
    ['jobRequests', page, size],
    () => fetchJobRequests(page, size),
    { keepPreviousData: true }
  );
  const jobRequests = data || [];

  const headers = ['No', '역할', '코멘트', '신청인', '승인 여부'];
  const tableData = jobRequests.map((jobrequest, index) => ({
    no: { type: 'text', value: (page - 1) * size + index + 1 },
    name: { type: 'text', value: jobrequest.name },
    comments: { type: 'text', value: jobrequest.comments },
    nickName: { type: 'text', value: jobrequest.nickName },
    allowYN: {
      type: jobrequest.allowYN === 'Y' ? 'text' : 'button',
      value: jobrequest.allowYN === 'Y' ? '승인 완료' : '승인',
      onClick: () => {
        setSelectedJobRequestId(jobrequest.jobRequestId);
        setIsModalOpen(true);
      },
    },
  }));

  const mutation = useMutation(allowJobRequest, {
    onSuccess: () => {
      refetch();
      setIsModalOpen(false);
    },
    onError: (error) => {
      console.error('승인 실패:', error);
    },
  });

  const handleConfirm = () => {
    if (selectedJobRequestId) {
      mutation.mutate(selectedJobRequestId);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <AdminLayout>
      <ContentWrapper>
        <Title>역할 신청 내역</Title>
        {isLoading ? (
          <Loading text='로딩 중...' />
        ) : (
          <AdminTable
            headers={headers}
            data={tableData}
            emptyMessage='역할 신청 내역이 없습니다.'
            alignments={['center', 'left', 'left', 'center']}
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
            disabled={jobRequests.length < size}
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
          title='승인하시겠습니까?'
        />
      )}
    </AdminLayout>
  );
};

export default AdminJobRequest;
