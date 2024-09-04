import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { fetchMemberWishRequests, completeWishItem } from '../../apis/townApi';
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
 * 관리자 위시 요청 내역 페이지
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMemberWishId, setSelectedMemberWishId] = useState(null);

  const [page, setPage] = useState(1);
  const [size] = useState(10);

  const { data, isLoading, refetch } = useQuery(
    ['wishRequests', page, size],
    () => fetchMemberWishRequests(page, size),
    { keepPreviousData: true }
  );

  const wishRequests = data || [];

  const headers = ['No', '상품명', '신청인', '신청날짜', '사용 여부'];
  const tableData = wishRequests.map((wishRequest, index) => ({
    no: { type: 'text', value: (page - 1) * size + index + 1 },
    wishName: { type: 'text', value: wishRequest.wishName },
    nickName: { type: 'text', value: wishRequest.nickName },
    createdAt: { type: 'text', value: wishRequest.createdAt },
    completeYN: {
      type: wishRequest.completeYN === 'Y' ? 'text' : 'button',
      value: wishRequest.completeYN === 'Y' ? '완료' : '사용',
      onClick: () => {
        setSelectedMemberWishId(wishRequest.memberWishId);
        setIsModalOpen(true);
      },
    },
  }));

  const mutation = useMutation(completeWishItem, {
    onSuccess: () => {
      refetch();
      setIsModalOpen(false);
    },
    onError: (error) => {
      console.error('완료 처리 실패:', error);
    },
  });

  const handleConfirm = () => {
    if (selectedMemberWishId) {
      mutation.mutate(selectedMemberWishId);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <AdminLayout>
      <ContentWrapper>
        <Title>위시 요청 내역</Title>
        {isLoading ? (
          <Loading text='로딩 중...' />
        ) : (
          <AdminTable
            headers={headers}
            data={tableData}
            emptyMessage='위시 요청 내역이 없습니다.'
            alignments={['center', 'left', 'center', 'center']}
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
            disabled={wishRequests.length < size}
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
          title='위시 사용 완료 처리하시겠습니까?'
        />
      )}
    </AdminLayout>
  );
};

export default AdminWishRequest;
