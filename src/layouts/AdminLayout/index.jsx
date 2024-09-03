import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { fetchTownInfo } from '../../apis/memberApi';
import { AdminHeader, AdminNav } from '../../components';
import { Container, Wrapper } from './styled';
import { townInfoState } from '../../store/atoms';

/**
 * 관리자 공통 레이아웃 컴포넌트
 * @author 임원정
 * @since 2024.09.04
 * @version 1.0
 */

const AdminLayout = ({ children }) => {
  const [townInfo, setTownInfo] = useRecoilState(townInfoState);

  const { data, isLoading } = useQuery('townInfo', fetchTownInfo, {
    enabled: !townInfo.name, // townInfo가 없을 때만 fetch 수행
  });

  useEffect(() => {
    if (data && !townInfo.name) {
      setTownInfo(data);
    }
  }, [data, townInfo, setTownInfo]);

  return (
    <Container>
      <AdminHeader />
      <Wrapper>
        <AdminNav townInfo={townInfo} />
        {children}
      </Wrapper>
    </Container>
  );
};

export default AdminLayout;
