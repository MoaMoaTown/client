import React from 'react';
import { useQuery } from 'react-query';
import { fetchTownInfo } from '../../apis/memberApi';
import {
  AdminHeader,
  AdminNav,
  TownTaxStatus,
  JobStatus,
  WishStatus,
  QuestStatus,
} from '../../components';
import { Container, ContentWrapper, Wrapper } from './styled';

/**
 * 관리자 메인 페이지
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

const AdminMain = () => {
  const { data: townInfo = {} } = useQuery('townInfo', fetchTownInfo);

  return (
    <Container>
      <AdminHeader />
      <Wrapper>
        <AdminNav townInfo={townInfo} />
        <ContentWrapper>
          <TownTaxStatus townInfo={townInfo} />
          <JobStatus />
          <WishStatus />
          <QuestStatus />
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default AdminMain;
