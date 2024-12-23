import axios from "axios";
import { API_SERVER_HOST } from "../config/hostConfig";
import { Await } from "react-router-dom";

const subCategoryHost = `${API_SERVER_HOST}/api/sub-category`;

export const getSubCategory = async () => {
  const res = await axios.get(`${subCategoryHost}`);
  return res.data;
};

// export const subCategoryDetail = async () => {
//   const res = await axios.get(`${subCategoryHost}/${id}`);
//   return res.data;
// };

export const subCategoryProducts = async (id) => {
  const res = await axios.get(`${subCategoryHost}/${id}/product`);
  return res.data;
};
