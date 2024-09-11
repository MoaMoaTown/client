import { axiosInstance } from './index';
/**
 * 백화점 관련 API
 * @author 임재성
 * @since 2024.08.30
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.30  	임재성        최초 생성
 * </pre>
 */

export const fetchClothesList = async ({ page }) => {
  try {
    const response = await axiosInstance.get('/clothes/list', {
      params: { page, size: 3 },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching clothes list:', error);
    throw new Error('옷 목록을 불러오는 데 실패했습니다.');
  }
};

export const purchaseClothes = async (clothId) => {
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
  console.log('API Response:', response.data);
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
