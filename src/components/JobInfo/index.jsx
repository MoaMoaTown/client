import React from 'react';
import { useQuery } from 'react-query';
import { fetchJobInfo } from '../../apis/memberApi';
import { Container, TitleText, DescriptionText, PayText } from './styled';

const JobInfo = () => {
  const {
    data: jobInfo = {},
    isLoading,
    isError,
  } = useQuery('jobInfo', fetchJobInfo);

  return (
    <Container>
      <TitleText>{jobInfo.name}</TitleText>
      <DescriptionText>{jobInfo.description}</DescriptionText>
      <PayText>{jobInfo.pay} MOA</PayText>
    </Container>
  );
};

export default JobInfo;
