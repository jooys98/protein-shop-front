import axios from "axios";
import { API_SERVER_HOST } from "../config/hostConfig";

const mainCategoryHost = `${API_SERVER_HOST}/api/main-category`;

export const getMainCategoryList = async() =>{
    const res = await axios.get(`${mainCategoryHost}`);
    return res.data;
}

export const mainCategoryDetail = async(id)=>{
    const res = await axios.get(`${mainCategoryHost}/${id}`);
    return res.data;
}