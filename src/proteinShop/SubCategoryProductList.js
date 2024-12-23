import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { subCategoryProducts } from "../api/SubCategory";
import SubCategoryProducts from "./SubCategoryProducts";
import ShopCategoryMenu from "./ShopCategoryMenu";
import './SubCategoryProductList.css';
import SearchBar from "./SearchBar";



const SubCategoryProductList = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [subCategoryProductList, setSubCategoryProductsList] = useState([]);

  useEffect(() => {
    subCategoryProducts(id)
      .then((data) => {
        console.log(
          "서브 카테고리 별 상품 리스트 반환 성공 드디어 해냈디ㅏ!!!",
          data
        );
        setSubCategoryProductsList(data);
      })
      .catch((err) => console.error("슈발", err));
  }, [id]);

  return (
    <div className="subcategory-container">
    <ShopCategoryMenu />
    <h1 className="subcategory-title">
      {state?.subCategoryName || "unknown"}
    </h1>
    <div className="subcategory-grid">
      {subCategoryProductList.length > 0 ? (
        subCategoryProductList.map((product) => (
          <div key={product.id} className="subcategory-product">
            <Link
              to={`/product-detail/${product.id}`}
              state={{
                productTitle: product.title,
                productPrice: product.price,
                productImg: product.imagesrc,
                productDescription: product.description,
              }}
              className="subcategory-link"
            >
              <img
                src={product.imagesrc}
                className="subcategory-image"
              />
              <h3 className="subcategory-product-title">{product.title}</h3>
              <p className="subcategory-product-price">{product.price}원</p>
            </Link>
          </div>
        ))
      ) : (
        <p className="no-products">상품이 없습니다.</p>
      )}
      <br/>
      <SearchBar/>
    </div>
  </div>
);
};

export default SubCategoryProductList;
