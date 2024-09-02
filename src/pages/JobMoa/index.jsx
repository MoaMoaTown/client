import React, { useState } from 'react';
import {
  Header,
  TownInfo,
  Button,
  JobList,
  CommentModal,
} from '../../components';
import { Container, ContentWrapper, Title, JobListContainer } from './styled';
import { applyJob } from '../../apis/jobApi';

const JobMoa = () => {
  const [selectedJob, setSelectedJob] = useState(null); // 선택된 직업 정보
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false); // 코멘트 모달 상태

  const handleJobClick = (job) => {
    setSelectedJob(job); // 직업 클릭 시 선택된 직업 설정
  };

  const handleApply = () => {
    if (selectedJob) {
      setIsCommentModalOpen(true); // 직업이 선택된 경우 코멘트 모달 열기
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
        alert(response.message); // 요청 결과 메시지를 사용자에게 표시
        setIsCommentModalOpen(false); // 신청 후 모달 닫기
      } catch (error) {
        alert('신청 실패: ' + error.message);
      }
    }
  };

  const handleCloseCommentModal = () => {
    setIsCommentModalOpen(false); // 모달 닫기
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
        jobName={selectedJob?.name} // 선택된 직업의 이름 전달
        jobDescription={selectedJob?.description} // 선택된 직업의 설명 전달
        onConfirm={handleConfirmComment} // 코멘트 제출 시 호출
        onClose={handleCloseCommentModal} // 모달 닫기
      />
    </Container>
  );
};

export default JobMoa;
