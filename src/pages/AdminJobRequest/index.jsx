import React from 'react';
import { useQuery } from 'react-query';
import { fetchTownInfo } from '../../apis/memberApi';
import { fetchJobRequests } from '../../apis/townApi';
import { AdminHeader, AdminNav, AdminTable } from '../../components';
import { Container, ContentWrapper, Wrapper, Title } from './styled';

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
  const { data: jobrequests = [] } = useQuery('jobrequests', fetchJobRequests);

  const headers = ['No', '역할', '코멘트', '신청인', '승인/거절'];
  const tableData = jobrequests.map((jobrequest, index) => ({
    no: index + 1,
    name: jobrequest.name,
    comments: jobrequest.comments,
    nickName: jobrequest.nickName,
    allowYN: jobrequest.allowYN,
  }));

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
    </Container>
  );
};

export default AdminJobRequest;
