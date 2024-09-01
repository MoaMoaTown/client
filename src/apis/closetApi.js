import { axiosInstance } from './index';

/**
 * 옷장 관련 API
 * @author 임원정
 * @since 2024.08.30
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.30  	임원정        최초 생성
 * </pre>
 */

export const fetchMyclothes = async (type) => {
  const response = await axiosInstance.get(`/closet/myclothes/${type}`);
  return response.data;
};

export const fetchProfile = async () => {
    const response = await axiosInstance.get('/closet/profile');
    return response.data;
};

export const updateProfile = async (profile) => {
    const response = await axiosInstance.post('/closet/profile/update', { profile });
    return response.data;
};