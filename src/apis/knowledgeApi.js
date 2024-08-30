import { axiosInstance } from './index';

export const fetchKnowledge = async () => {
  const response = await axiosInstance.get('/knowledge');
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
