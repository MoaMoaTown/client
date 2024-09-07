import { axiosInstance } from './index';

/**
 * 알림 관련 API
 * @author 임원정
 * @since 2024.09.02
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.02  	임원정        최초 생성
 * </pre>
 */

export const fetchNotifications = async () => {
  const response = await axiosInstance.get('/notification/list');
  return response.data;
};
