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
