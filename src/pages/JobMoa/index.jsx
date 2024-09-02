import React, { useState } from 'react';
import {
  Header,
  TownInfo,
  Button,
  JobList,
  CommentModal,
  InfoModal,
} from '../../components';
import { Container, ContentWrapper, Title, JobListContainer } from './styled';
import { useMutation } from 'react-query';
import { applyJob } from '../../apis/jobApi';

const JobMoa = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');

  const applyJobMutation = useMutation(applyJob, {
    onSuccess: (data) => {
      setInfoMessage(data.message);
      setIsInfoModalOpen(true);
    },
    onError: (error) => {
      setInfoMessage(`신청 실패: ${error.message}`);
      setIsInfoModalOpen(true);
    },
  });

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleApply = () => {
    if (selectedJob) {
      setIsCommentModalOpen(true);
    } else {
      alert('먼저 직업을 선택해주세요.');
    }
  };

  const handleConfirmComment = (comment) => {
    if (selectedJob) {
      applyJobMutation.mutate({
        jobId: selectedJob.jobId,
        comments: comment,
      });
      setIsCommentModalOpen(false);
    }
  };

  const handleCloseCommentModal = () => {
    setIsCommentModalOpen(false);
  };

  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false);
  };

  return (
    <Container>
      <Header />
      <Title>잡모아</Title>
      <TownInfo />
      <ContentWrapper>
        <JobListContainer>
          <JobList onClick={handleJobClick} />
        </JobListContainer>
      </ContentWrapper>
      <Button variant='buyBtn' onClick={handleApply}>
        신청하기
      </Button>
      <CommentModal
        isOpen={isCommentModalOpen}
        jobName={selectedJob?.name}
        jobDescription={selectedJob?.description}
        onConfirm={handleConfirmComment}
        onClose={handleCloseCommentModal}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        title='신청 결과'
        message={infoMessage}
        onConfirm={handleCloseInfoModal}
      />
    </Container>
  );
};

export default JobMoa;
