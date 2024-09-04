// import React from 'react';
// import { useQuery } from 'react-query';
// import { fetchTownInfo } from '../../apis/memberApi';
// import { getJobsByTownId } from '../../apis/jobApi';
// import {
//   AdminHeader,
//   AdminNav,
//   AdminTable,
//   CreateHeader,
// } from '../../components';
// import { Container, ContentWrapper, BodyWrapper, Title } from './styled';

// /**
//  * 관리자 역할 관리 페이지
//  * @author 임원정
//  * @since 2024.09.03
//  * @version 1.0
//  *
//  * <pre>
//  * 수정일        수정자        수정내용
//  * ----------  --------    ---------------------------
//  * 2024.09.03 	임원정        최초 생성
//  * </pre>
//  */

// const AdminJob = () => {
//   const { data: townInfo = {} } = useQuery('townInfo', fetchTownInfo);
//   const { data: job = [] } = useQuery('job', getJobsByTownId);

//   const headers = ['No', '역할', '설명', '급여'];
//   const tableData = job.map((job, index) => ({
//     no: { type: 'text', value: index + 1 },
//     name: { type: 'text', value: job.name },
//     description: { type: 'text', value: job.description },
//     pay: { type: 'text', value: job.pay + ' 모아' },
//   }));

//   return (
//     <Container>
//       <AdminHeader />
//       <BodyWrapper>
//         <AdminNav townInfo={townInfo} />
//         <ContentWrapper>
//           <Title>역할 관리</Title>
//           <CreateHeader title='역할 목록' />
//           <AdminTable
//             headers={headers}
//             data={tableData}
//             emptyMessage='역할이 없습니다.'
//           />
//         </ContentWrapper>
//       </BodyWrapper>
//     </Container>
//   );
// };

// export default AdminJob;

import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { getJobsByTownId } from '../../apis/jobApi';
import { createJob } from '../../apis/townApi';
import AdminLayout from '../../layouts/AdminLayout';
import { AdminTable, CreateHeader } from '../../components';
import { ContentWrapper, Title } from './styled';
import CreateJobModal from '../../components/CreateJobModal';

const AdminJob = () => {
  const { data: job = [], refetch } = useQuery('job', getJobsByTownId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const headers = ['No', '역할', '설명', '급여'];
  const tableData = job.map((job, index) => ({
    no: { type: 'text', value: index + 1 },
    name: { type: 'text', value: job.name },
    description: { type: 'text', value: job.description },
    pay: { type: 'text', value: job.pay + ' 모아' },
  }));

  const mutation = useMutation(createJob, {
    onSuccess: () => {
      refetch();
      setIsModalOpen(false);
    },
    onError: (error) => {
      console.error('역할 생성 실패:', error);
    },
  });

  const handleCreate = (jobData) => {
    mutation.mutate(jobData);
  };

  return (
    <AdminLayout>
      <ContentWrapper>
        <Title>역할 관리</Title>
        <CreateHeader title='역할 목록' onCreate={() => setIsModalOpen(true)} />
        <AdminTable
          headers={headers}
          data={tableData}
          emptyMessage='역할이 없습니다.'
        />
      </ContentWrapper>
      {isModalOpen && (
        <CreateJobModal
          isOpen={isModalOpen}
          onCreate={handleCreate}
          onClose={() => setIsModalOpen(false)}
          title='역할 만들기'
        ></CreateJobModal>
      )}
    </AdminLayout>
  );
};

export default AdminJob;
