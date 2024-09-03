import { axiosInstance } from './index';

/**
 * 타운 관리자 관련 API
 * @author 임원정
 * @since 2024.09.03
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.03 	임원정        최초 생성
 * </pre>
 */

export const createTown = async (name, description, payCycle) => {
  const response = await axiosInstance.post(`/town/create`, {
    name,
    description,
    payCycle,
  });
  return response.data;
};

export const fetchTax = async () => {
  const response = await axiosInstance.get(`/town/tax`);
  return response.data;
};

export const fetchJobRequests = async () => {
  const response = await axiosInstance.get(`/town/job/requests`);
  return response.data;
};

export const createJob = async (name, description, pay) => {
  const response = await axiosInstance.post(`/town/job/create`, {
    name,
    description,
    pay,
  });
  return response.data;
};

export const allowJobRequest = async (jobRequestId) => {
  const response = await axiosInstance.patch(`/town/job/allow/${jobRequestId}`);
  return response.data;
};

export const createQuest = async (requestDTO) => {
  const response = await axiosInstance.post(`/town/quest/create`, requestDTO);
  return response.data;
};

export const fetchQuestStatusList = async () => {
  const response = await axiosInstance.get(`/town/quest/status`);
  return response.data;
};

export const fetchMemberQuestRequests = async (questId) => {
  const response = await axiosInstance.get(`/town/quest/requests/${questId}`);
  return response.data;
};

export const selectMemberQuestRequest = async (memberQuestId) => {
  const response = await axiosInstance.patch(
    `/town/quest/select/${memberQuestId}`
  );
  return response.data;
};

export const completeMemberQuest = async (memberQuestId) => {
  const response = await axiosInstance.post(
    `/town/quest/complete/${memberQuestId}`
  );
  return response.data;
};

export const createWishItem = async (requestDTO) => {
  const response = await axiosInstance.post(`/town/wish/create`, requestDTO);
  return response.data;
};

export const deleteWishItem = async (wishId) => {
  const response = await axiosInstance.delete(`/town/wish/delete/${wishId}`);
  return response.data;
};

export const completeWishItem = async (memberWishId) => {
  const response = await axiosInstance.patch(
    `/town/wish/complete/${memberWishId}`
  );
  return response.data;
};

export const fetchMemberWishRequests = async () => {
  const response = await axiosInstance.get(`/town/wish/requests`);
  return response.data;
};
