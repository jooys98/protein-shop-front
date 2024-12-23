import axios from "axios";
import { API_SERVER_HOST } from "../config/hostConfig";

const host = `${API_SERVER_HOST}/api/protain/cart`;

export const getCartList = async () => {
  const res = await axios.get(`${host}`);
  return res.data;
};
export const createInCart = async (product) => {
  const res = await axios.post(`${host}`, product);
  return res.data;
};

export const getCartItemDetail = async (id) =>{
    const res = await axios.get(`${host}/${id}`);
    return res.data;
};

export const updateCartItem = async(product) => {
    const res = await axios.put(`${host}`, {
      id : product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
      imgsrc: product.imgsrc,
    });
    return res.data;
}

export const deleteCartItem = async(id) =>{
    const res = await axios.delete(`${host}/${id}`);
    return res.data;
}