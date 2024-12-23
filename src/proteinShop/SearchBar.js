import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SearchBar.css';

//컴포넌트 별 재사용이 가능한 서치바 
const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
    //navigate() 함수가 /search?keyword=검색어 URL을 생성하고 페이지 이동
    //SearchResults 컴포넌트에서 searchParams.get("keyword")로 그 검색어를 다시 읽어옴
    //SearchResults 컴포넌트에서 api 를 호출하여  그 결과를 보여줌 
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="상품명을 입력하세요"
        />
        <button type ='submit'>검색하기</button>
      </form>
    </div>
  );
};

export default SearchBar;
