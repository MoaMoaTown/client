import { axiosInstance } from './index';

export const fetchQuest = async () => {
  const response = await axiosInstance.get('/quest');
  return response.data;
};

export const acceptQuest = async (questId) => {
  const response = await axiosInstance.post(`/quest/${questId}`);
  return response.data;
};
