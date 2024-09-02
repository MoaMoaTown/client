import React from 'react';
import { useQuery } from 'react-query';
import { getJobsByTownId } from '../../apis/jobApi';
import { StyledJobButton, PriceWrapper, MoaImage } from './styled';
import moaImage from '../../assets/images/moa.svg';

const JobList = ({ onClick, ...rest }) => {
  const { data: jobs = [], isLoading } = useQuery('jobs', getJobsByTownId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {jobs.map((job) => (
        <StyledJobButton key={job.jobId} onClick={() => onClick(job)} {...rest}>
          <span>{job.name}</span>
          <PriceWrapper>
            {job.pay}
            <MoaImage src={moaImage} alt='Moa' />
          </PriceWrapper>
        </StyledJobButton>
      ))}
    </div>
  );
};

export default JobList;
