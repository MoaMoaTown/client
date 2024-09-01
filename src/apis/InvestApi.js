import { axiosInstance } from './index';

// 오늘의 투자 정보를 가져오는 API 호출
export const getTodayPrice = async () => {
  try {
    const response = await axiosInstance.get('/invest/today', {});
    console.log('API 응답 데이터:', response.data); // 응답 데이터를 콘솔에 출력
    return response.data;
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error); // 오류가 발생한 경우 콘솔에 출력
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
    console.error('평균 평단가 및 보유 수량을 가져오는 중 오류 발생:', error);
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
    console.error('매도 요청 중 오류 발생:', error); // 오류가 발생한 경우 콘솔에 출력
    throw error;
  }
};
