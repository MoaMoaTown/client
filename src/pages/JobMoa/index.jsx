import React, { useState } from 'react';
import {
  Header,
  TownInfo,
  Button,
  JobList,
  CommentModal,
  InfoModal,
} from '../../components';
import {
  Container,
  ContentWrapper,
  Title,
  JobListContainer,
  Description,
} from './styled';
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
      // 서버에서 받은 에러 메시지를 추출하여 InfoModal에 전달
      const errorMessage =
        error.message || '신청 실패: 알 수 없는 오류가 발생했습니다.';
      setInfoMessage(`신청 실패: ${errorMessage}`);
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
      setInfoMessage('먼저 직업을 선택해주세요.');
      setIsInfoModalOpen(true);
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
      <Description>
        {`잡모아는 역할을 신청할 수 있는 곳이에요.\n역할을 잘 수행하면 모아를 받을 수 있어요.`}
      </Description>
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
        jobPay={selectedJob?.pay}
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
