import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchJobRequests } from '../../apis/townApi';
import { StatusTable, Loading } from '../index';

/**
 * 역할 현황 컴포넌트
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

const JobStatus = () => {
  const [page] = useState(1);
  const [size] = useState(4);
  const { data, isLoading } = useQuery(['jobRequests', page, size], () =>
    fetchJobRequests(page, size)
  );

  const jobrequests = data || [];

  const headers = ['No', '역할', '신청인'];
  const tableData = jobrequests.map((jobrequest, index) => ({
    no: index + 1,
    name: jobrequest.name,
    nickName: jobrequest.nickName,
  }));

  if (isLoading) {
    return <Loading text='데이터를 불러오는 중...' />;
  }

  return (
    <StatusTable
      title='역할 신청 현황'
      headers={headers}
      data={tableData}
      emptyMessage='역할 신청 내역이 없습니다.'
      goto='/admin/job-request'
    />
  );
};

export default JobStatus;
