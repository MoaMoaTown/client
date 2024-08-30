import { axiosInstance } from "./index";

export const clothesList = async (
  clothId,
  brand,
  name,
  price,
  type,
  imgUrl
) => {
  const response = await axiosInstance.get("/clothes/list", {
    params: {
      clothId,
      brand,
      name,
      price,
      type,
      imgUrl,
    },
  });
  return response.data;
};
