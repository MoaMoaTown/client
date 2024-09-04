import { axiosInstance } from './index';

export const getJobsByTownId = async ({ page = 0, size = 5 }) => {
  try {
    const response = await axiosInstance.get('/jobs/list', {
      params: {
        page, // 페이지 번호
        size, // 페이지 크기
      },
    });
    return response.data; // 직업 목록 데이터 반환
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
