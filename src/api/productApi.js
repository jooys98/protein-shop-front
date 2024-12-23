import axios from "axios";
import { API_SERVER_HOST } from "../config/hostConfig";

const productHost = `${API_SERVER_HOST}/api/protain`;

export const getProductList = async (page = 1, size = 12) => {
  const res = await axios.get(`${productHost}`, {
    params: {
      page: page,
      size: size,
    },
  });
  console.log("페이지 :" , page , "데이터 :" , res.data)
  return res.data;
}; //페이지네이션 추가


export const productDetail = async (id) => {
  const res = await axios.get(`${productHost}/${id}`);
  return res.data;
};

export const searchProducts = async(keyword , page = 1, size = 12) =>{
    const res = await axios.get(`${productHost}/search`,{
        params:{
            keyword: keyword,
            page: page,
            size: size
        }
    });
    return res.data;
}