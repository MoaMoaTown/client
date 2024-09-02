import React, { useState } from 'react';
import {
  Header,
  TownInfo,
  Button,
  JobList,
  CommentModal,
  InfoModal, // InfoModal 추가
} from '../../components';
import { Container, ContentWrapper, Title, JobListContainer } from './styled';
import { applyJob } from '../../apis/jobApi';

const JobMoa = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false); // InfoModal 상태 추가
  const [infoMessage, setInfoMessage] = useState(''); // InfoModal에 표시할 메시지

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

  const handleConfirmComment = async (comment) => {
    if (selectedJob) {
      try {
        const response = await applyJob({
          jobId: selectedJob.jobId,
          comments: comment,
        });
        setInfoMessage(response.message); // 요청 결과 메시지를 상태에 저장
      } catch (error) {
        setInfoMessage('신청 실패: ' + error.message);
      } finally {
        setIsCommentModalOpen(false); // 코멘트 모달 닫기
        setIsInfoModalOpen(true); // InfoModal 열기
      }
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
        jobName={selectedJob?.name} // 선택한 직업 이름 전달
        jobDescription={selectedJob?.description} // 선택한 직업 설명 전달
        onConfirm={handleConfirmComment}
        onClose={handleCloseCommentModal}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        title='신청 결과'
        message={infoMessage} // 서버에서 받은 메시지를 표시
        onConfirm={handleCloseInfoModal}
      />
    </Container>
  );
};

export default JobMoa;
