import { axiosInstance } from './index';

export const clothesList = async () => {
  const response = await axiosInstance.get('/clothes/list', {});
  return response.data;
};
export const purchaseClothes = async (clothId) => {
  console.log('서버로 전송할 clothId:', clothId); // 서버로 전송하기 전 로그 출력
  const response = await axiosInstance.post('/clothes/purchase', clothId, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

// 위시리스트를 가져오는 API 호출
export const getWishlist = async () => {
  const response = await axiosInstance.get('/wish/wishlist', {});
  return response.data;
};

export const purchaseWishItem = async (wishId) => {
  const response = await axiosInstance.post(
    '/wish/wishlist/purchase',
    { wishId },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};
