import { axiosInstance } from './index';

/**
 * 퀘스트 관련 API
 * @author 이주현
 * @since 2024.09.01
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.09.01  이주현      최초 생성
 * </pre>
 */

export const fetchQuest = async () => {
  const response = await axiosInstance.get('/quest');
  return response.data;
};

export const acceptQuest = async (questId) => {
  const response = await axiosInstance.post(`/quest/${questId}`);
  return response.data;
};
