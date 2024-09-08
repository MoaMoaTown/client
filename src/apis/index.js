import axios from 'axios';

/**
 * axios 인스턴스
 * @author 이주현
 * @since 2024.08.20
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.20  이주현      최초 생성
 * </pre>
 */

export const axiosInstance = axios.create({
  baseURL: `https://${process.env.REACT_APP_ENDPOINT}`,
  withCredentials: true,
});
