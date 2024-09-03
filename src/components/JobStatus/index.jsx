import React from 'react';
import { useQuery } from 'react-query';
import { fetchJobRequests } from '../../apis/townApi';
import { StatusTable } from '../index';

const JobStatus = () => {
  const { data: jobrequests = [] } = useQuery('jobrequests', fetchJobRequests);

  const headers = ['No', '역할', '신청인'];
  const tableData = jobrequests.map((jobrequest, index) => ({
    no: index + 1,
    name: jobrequest.name,
    nickName: jobrequest.nickName,
  }));

  return (
    <StatusTable title='역할 신청 현황' headers={headers} data={tableData} />
  );
};

export default JobStatus;
