import React from 'react';
import { useQuery } from 'react-query';
import { fetchTownInfo } from '../../apis/memberApi';
import { getJobsByTownId } from '../../apis/jobApi';
import { AdminHeader, AdminNav, AdminTable } from '../../components';
import { Container, ContentWrapper, Wrapper, Title } from './styled';

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
  const { data: townInfo = {} } = useQuery('townInfo', fetchTownInfo);
  const { data: job = [] } = useQuery('job', getJobsByTownId);

  const headers = ['No', '역할', '설명', '급여'];
  const tableData = job.map((job, index) => ({
    no: index + 1,
    name: job.name,
    description: job.description,
    pay: job.pay,
  }));

  return (
    <Container>
      <AdminHeader />
      <Wrapper>
        <AdminNav townInfo={townInfo} />
        <ContentWrapper>
          <Title>역할 관리</Title>
          <AdminTable
            headers={headers}
            data={tableData}
            emptyMessage='역할이 없습니다.'
          />
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default AdminJob;
