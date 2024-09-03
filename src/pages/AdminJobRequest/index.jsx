import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { fetchTownInfo } from '../../apis/memberApi';
import { fetchJobRequests, allowJobRequest } from '../../apis/townApi';
import {
  AdminHeader,
  AdminNav,
  AdminTable,
  AdminModal,
} from '../../components';
import { Container, ContentWrapper, Wrapper, Title } from './styled';
import { colors } from '../../styles/colors';

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
  const { data: townInfo = {} } = useQuery('townInfo', fetchTownInfo);
  const { data: jobrequests = [], refetch } = useQuery(
    'jobrequests',
    fetchJobRequests
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobRequestId, setSelectedJobRequestId] = useState(null);

  const headers = ['No', '역할', '코멘트', '신청인', '승인 여부'];
  const tableData = jobrequests.map((jobrequest, index) => ({
    no: { type: 'text', value: index + 1 },
    name: { type: 'text', value: jobrequest.name },
    comments: { type: 'text', value: jobrequest.comments },
    nickName: { type: 'text', value: jobrequest.nickName },
    allowYN: {
      type: jobrequest.allowYN === 'Y' ? 'text' : 'button',
      value: jobrequest.allowYN === 'Y' ? '승인 완료' : '승인',
      color:
        jobrequest.allowYN === 'Y' ? 'transparent' : `${colors.table_orange}`,
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
    <Container>
      <AdminHeader />
      <Wrapper>
        <AdminNav townInfo={townInfo} />
        <ContentWrapper>
          <Title>역할 신청 내역</Title>
          <AdminTable
            headers={headers}
            data={tableData}
            emptyMessage='역할 신청 내역이 없습니다.'
          />
        </ContentWrapper>
      </Wrapper>
      {isModalOpen && (
        <AdminModal
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          title='승인하시겠습니까?'
        />
      )}
    </Container>
  );
};

export default AdminJobRequest;
