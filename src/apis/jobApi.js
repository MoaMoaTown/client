import { axiosInstance } from './index';

// JOB 목록을 가져오는 API 호출 (타운 ID는 세션에서 자동으로 처리)
export const getJobsByTownId = async () => {
  try {
    const response = await axiosInstance.get('/jobs/list');
    return response.data;
  } catch (error) {
    console.error('JOB 목록을 가져오는 중 오류 발생:', error);
    throw error;
  }
};

export const applyJob = async ({ jobId, comments }) => {
  try {
    const response = await axiosInstance.post('/jobs/apply', {
      jobId,
      comments, // comment를 포함하여 전송
    });
    return response.data;
  } catch (error) {
    console.error('직업 신청 중 오류 발생:', error);
    throw error;
  }
};
