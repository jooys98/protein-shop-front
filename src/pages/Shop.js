import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../proteinShop/ProductItem";
import { getProductList } from "../api/productApi";
import ShopCategoryMenu from "../proteinShop/ShopCategoryMenu";
import "./Shop.css";
import Pagination from "../proteinShop/Pagination";
import SearchBar from "../proteinShop/SearchBar";
import Login from "../user/Login";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const pageSize = 12;

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      console.log('요청하는 페이지 번호:', currentPage);
      const response = await getProductList(currentPage, pageSize);
      console.log('서버 응답:', response);

      setProducts(response.content);
      setTotalPages(response.totalPages);
      setTotalElements(response.totalElements);
    } catch (error) {
      console.error("상품 로딩 중 에러 발생:", error);
    }
  };

  return (
    <div>
      <ShopCategoryMenu />
     
      <h1>WELCOME, PROTEIN-SHOP!</h1>
      <Login/>
      <Link to="/join-us">
      <button>join-us!</button>
      </Link>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
      <SearchBar/>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <div className="page-info">
        총 {totalElements}개 상품 중 {currentPage +1} 페이지
      </div>
    </div>
  );
};

export default Shop;
