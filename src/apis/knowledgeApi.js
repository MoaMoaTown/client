import { axiosInstance } from './index';

/**
 * 지식 관련 API
 * @author 이주현
 * @since 2024.08.30
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.30  이주현      최초 생성
 * </pre>
 */

export const fetchKnowledge = async (page = 1, size = 6) => {
  const response = await axiosInstance.get('/knowledge', {
    params: { page, size },
  });
  return response.data;
};

export const fetchKnowledgeDetail = async (knowledgeId) => {
  const response = await axiosInstance.get(`/knowledge/${knowledgeId}`);
  return response.data;
};

export const fetchWordExplanation = async (word) => {
  const response = await axiosInstance.get(`/word/${word}`);
  return response.data;
};
