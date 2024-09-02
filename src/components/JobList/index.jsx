import React, { useEffect, useState } from 'react';
import { getJobsByTownId } from '../../apis/jobApi';
import { StyledJobButton, PriceWrapper, MoaImage } from './styled';
import moaImage from '../../assets/images/moa.svg';

const JobList = ({ onClick, ...rest }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobList = await getJobsByTownId();
        setJobs(jobList);
      } catch (error) {
        console.error('JOB 목록을 가져오는 중 오류 발생:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

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
