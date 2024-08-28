import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../apis';
import { Container, TitleText, DescriptionText, PayText } from './styled';

const JobInfo = () => {
  const [jobInfo, setJobInfo] = useState({
    name: '',
    description: '',
    pay: '',
  });

  useEffect(() => {
    const fetchJobInfo = async () => {
      try {
        const response = await axiosInstance.get('/member/job', {});
        if (response.status === 200) {
          setJobInfo(response.data);
        }
      } catch (error) {
        console.error('역할 정보 불러오기 실패:', error);
      }
    };

    fetchJobInfo();
  }, []);

  return (
    <Container>
      <TitleText>{jobInfo.name}</TitleText>
      <DescriptionText>{jobInfo.description}</DescriptionText>
      <PayText>{jobInfo.pay} MOA</PayText>
    </Container>
  );
};

export default JobInfo;
