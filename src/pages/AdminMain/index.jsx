import React from 'react';
import {
  TownTaxStatus,
  JobStatus,
  WishStatus,
  QuestStatus,
} from '../../components';
import AdminLayout from '../../layouts/AdminLayout';
import { ContentWrapper } from './styled';

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
  return (
    <AdminLayout>
      <ContentWrapper>
        <TownTaxStatus />
        <JobStatus />
        <WishStatus />
        <QuestStatus />
      </ContentWrapper>
    </AdminLayout>
  );
};

export default AdminMain;
