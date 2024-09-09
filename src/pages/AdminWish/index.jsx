import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import {
  fetchWishlist,
  createWishItem,
  deleteWishItem,
} from '../../apis/townApi';
import AdminLayout from '../../layouts/AdminLayout';
import {
  AdminModal,
  AdminTable,
  CreateHeader,
  CreateWishModal,
} from '../../components';
import {
  ContentWrapper,
  Title,
  PaginationWrapper,
  PageButton,
  PageNumber,
} from './styled';

/**
 * 관리자 위시 상품 관리 페이지
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

const AdminWish = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateeModalOpen] = useState(false);
  const [selectedWishId, setSelectedWishId] = useState(null);

  const [page, setPage] = useState(0);
  const [size] = useState(10);

  const { data, refetch } = useQuery(
    ['wish', page, size],
    () => fetchWishlist(page, size),
    { keepPreviousData: true }
  );

  const wishes = data || [];

  const headers = ['No', '상품명', '가격', '삭제하기'];
  const tableData = wishes.map((wish, index) => ({
    no: { type: 'text', value: page * size + index + 1 },
    name: { type: 'text', value: wish.name },
    price: { type: 'text', value: wish.price + ' 모아' },
    delete: {
      type: 'button',
      value: '삭제',
      onClick: () => {
        setSelectedWishId(wish.wishId);
        setIsDeleteModalOpen(true);
      },
    },
  }));

  const deleteMutation = useMutation(deleteWishItem, {
    onSuccess: () => {
      refetch();
      setIsDeleteModalOpen(false);
    },
    onError: (error) => {
      console.error('위시 삭제 실패:', error);
    },
  });

  const createMutation = useMutation(createWishItem, {
    onSuccess: () => {
      refetch();
      setIsCreateeModalOpen(false);
    },
    onError: (error) => {
      console.error('위시 상품 생성 실패:', error);
    },
  });

  const handleCreate = ({ wishName, price }) => {
    createMutation.mutate({ wishName, price });
  };

  const handleConfirm = () => {
    if (selectedWishId) {
      deleteMutation.mutate(selectedWishId);
    }
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <AdminLayout>
      <ContentWrapper>
        <Title>위시 상품 관리</Title>
        <CreateHeader
          title='위시 상품 목록'
          onCreate={() => setIsCreateeModalOpen(true)}
        />
        <AdminTable
          headers={headers}
          data={tableData}
          emptyMessage='위시 상품이 없습니다.'
          alignments={['center', 'left', 'center', 'center']}
        />
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
            disabled={wishes.length < size}
          >
            다음
          </PageButton>
        </PaginationWrapper>
      </ContentWrapper>
      {isDeleteModalOpen && (
        <AdminModal
          isOpen={isDeleteModalOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          title='삭제하시겠습니까?'
        />
      )}
      {isCreateModalOpen && (
        <CreateWishModal
          isOpen={isCreateModalOpen}
          onCreate={handleCreate}
          onClose={() => setIsCreateeModalOpen(false)}
        ></CreateWishModal>
      )}
    </AdminLayout>
  );
};

export default AdminWish;
