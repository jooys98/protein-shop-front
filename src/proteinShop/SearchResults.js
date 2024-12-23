import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchProducts } from "../api/productApi";
import SearchBar from "./SearchBar";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";
import './SearchResult.css';
import ShopCategoryMenu from "./ShopCategoryMenu";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [resultProducts, setResultProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const keyword = searchParams.get("keyword");
  //URL에서 keyword 파라미터 값을 가져오는(읽어오는) 기능
  const pageSize = 12;

  useEffect(() => {
    if (keyword) {
      fetchSearchResults();
    }
  }, [keyword, currentPage]);

  const fetchSearchResults = async () => {
    try {
      const res = await searchProducts(keyword, currentPage, pageSize);
      console.log("겁색성공 ㅋ " , res.data);
      setResultProducts(res.content);
      setTotalPages(res.totalPages);
      setTotalElements(res.totalElements);
    } catch (error) {
      console.error("검색 에러 바보", error);
    }
  };

  return (
    <div>
      <ShopCategoryMenu/>

      
      <h2>'{keyword}' 검색결과</h2>
      <p>총 {totalElements} 개의 상품</p>
      <div className="product-grid">
        {resultProducts && resultProducts.length > 0 ? (
          resultProducts.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
      <SearchBar />
      {totalPages > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default SearchResults;
