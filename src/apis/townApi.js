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

export const fetchJobRequests = async (page = 1, size = 10) => {
  const response = await axiosInstance.get(`/town/job/requests`, {
    params: { page, size },
  });
  return response.data;
};

export const createJob = async ({ name, description, pay }) => {
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

export const createQuest = async ({
  title,
  description,
  reward,
  capacity,
  deadline,
}) => {
  const response = await axiosInstance.post(`/town/quest/create`, {
    title,
    description,
    reward,
    capacity,
    deadline,
  });
  return response.data;
};

export const fetchQuestStatusList = async (page = 1, size = 10) => {
  const response = await axiosInstance.get(`/town/quest/status`, {
    params: { page, size },
  });
  return response.data;
};

export const fetchMemberQuestRequests = async (
  questId,
  page = 1,
  size = 10
) => {
  const response = await axiosInstance.get(`/town/quest/requests/${questId}`, {
    params: { page, size },
  });
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

export const createWishItem = async ({ wishName, price }) => {
  const response = await axiosInstance.post(`/town/wish/create`, {
    wishName,
    price,
  });
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

export const fetchMemberWishRequests = async (page = 1, size = 10) => {
  const response = await axiosInstance.get(`/town/wish/requests`, {
    params: { page, size },
  });
  return response.data;
};

export const fetchWishlist = async (page = 0, size = 5) => {
  const response = await axiosInstance.get('/wish/wishlist', {
    params: { page, size },
  });
  return response.data;
};

export const getJobsByTownId = async (page = 0, size = 5) => {
  const response = await axiosInstance.get('/jobs/list', {
    params: { page, size },
  });
  return response.data;
};
