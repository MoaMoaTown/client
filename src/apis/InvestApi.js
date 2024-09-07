import { axiosInstance } from './index';

/**
 *  투자 관련 API
 * @author 임재성
 * @since 2024.09.01
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.01  	임재성        최초 생성
 * </pre>
 */

export const getTodayPrice = async () => {
  try {
    const response = await axiosInstance.get('/invest/today', {});
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const buyInvest = async (typeId, purchaseAmount) => {
  const response = await axiosInstance.patch('/invest/buy', {
    typeId,
    purchaseAmount,
  });
  return response.data;
};

export const getYesterdayPrice = async () => {
  const response = await axiosInstance.get('/invest/yesterday');
  return response.data;
};

export const getAverageWeightAndStep = async () => {
  try {
    const response = await axiosInstance.get('/invest/average');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sellInvest = async ({ typeId, sellAmount }) => {
  try {
    const response = await axiosInstance.patch('/invest/sell', {
      typeId,
      sellAmount,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
