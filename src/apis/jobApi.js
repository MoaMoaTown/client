import { axiosInstance } from './index';
/**
 * 잡모아 관련 API
 * @author 임재성
 * @since 2024.09.02
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.02  	임재성        최초 생성
 * </pre>
 */
export const getJobsByTownId = async ({ page = 0, size = 5 }) => {
  try {
    const response = await axiosInstance.get('/jobs/list', {
      params: {
        page,
        size,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const applyJob = async ({ jobId, comments }) => {
  try {
    const response = await axiosInstance.post('/jobs/apply', {
      jobId,
      comments,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.msg);
    }
    throw new Error('직업 신청 중 오류 발생');
  }
};
