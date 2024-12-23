import React from "react";
import { getProductList, productDetail } from "../api/productApi";
import { Link } from "react-router-dom";
import Shop from "../pages/Shop";
import './ProductItem.css';
import SubCategoryProductList from "./SubCategoryProductList";

const ProductItem = ({
    id,
  title,
  price,
  description,
  imagesrc,
  mainCategory,
  subCategory,
}) => {




  return (
    <div className="product-item">
      <Link to={`/product-detail/${id}`}>
        <img src={imagesrc} className="product-image"/>
        <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price} 원</p>
        </div>

      </Link>
      
    </div>
  );
};

export default ProductItem;
