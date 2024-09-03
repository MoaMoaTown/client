import { axiosInstance } from './index';

export const fetchClothesList = async ({ page }) => {
  const response = await axiosInstance.get('/clothes/list', {
    params: { page, size: 3 },
  });
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

export const fetchWishlist = async ({ page }) => {
  const response = await axiosInstance.get('/wish/wishlist', {
    params: { page, size: 5 },
  });
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
