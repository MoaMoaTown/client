import { axiosInstance } from './index';

/**
 * 멤버 관련 API
 * @author 이주현
 * @since 2024.08.28
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.28  이주현      최초 생성
 * </pre>
 */

export const login = async (loginId, password) => {
  const response = await axiosInstance.post('/member/login', {
    loginId,
    password,
  });
  return response.data;
};

export const signUp = async (nickname, loginId, password, role) => {
  const response = await axiosInstance.post('/member/sign-up', {
    nickname,
    loginId,
    password,
    role,
  });
  return response.data;
};

export const fetchBalance = async () => {
  const response = await axiosInstance.get('/member/balance');
  return response.data.balance;
};

export const fetchRanks = async () => {
  const response = await axiosInstance.get('/member/ranks');
  return response.data;
};

export const fetchAccount = async ({ page = 1, size = 4 }) => {
  const response = await axiosInstance.get('/member/account', {
    params: { page, size },
  });
  return response.data;
};

export const joinTown = async (townCode) => {
  const response = await axiosInstance.post('/member/join-town', { townCode });
  return response.data;
};

export const fetchJobInfo = async () => {
  const response = await axiosInstance.get('/member/job');
  return response.data;
};

export const fetchTownInfo = async () => {
  const response = await axiosInstance.get('/member/town');
  return response.data;
};

export const logout = async () => {
  const response = await axiosInstance.post('/member/logout');
  return response.data;
};
