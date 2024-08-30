import { axiosInstance } from './index';

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

export const fetchAccount = async () => {
  const response = await axiosInstance.get('/member/account');
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
