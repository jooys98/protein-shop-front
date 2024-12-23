import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import IntroduceCoaches from "./pages/IntroduceCoaches";

import Schedule from "./pages/Schedule";
import "./App.css";
import TrainerDetail from "./pages/TrainerDetail";
import Shop from "./pages/Shop";
import Cart from "./proteinShop/Cart";
import ProductCategory from "./proteinShop/ProductCategory";
import ProductItemDetail from "./proteinShop/ProductItemDetail";
import SubCategoryList from "./proteinShop/SubCategoryList";
import SubCategoryProductList from "./proteinShop/SubCategoryProductList";
import SearchResults from "./proteinShop/SearchResults";
import JoinUser from "./user/JoinUser";



function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/intro" element={<IntroduceCoaches />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/trainer/:id" element={<TrainerDetail />} />
          <Route path="/shop-cart" element={<Cart />} />
          <Route path="/shop-protein" element={<Shop />} />
          <Route path="/shop-category" element={<ProductCategory />} />
          {/* 메인카테고리 */}
          <Route path="/shop-sub-category/:id" element={<SubCategoryList />} />
          {/* 서브카테고리 */}
          <Route path="/product-detail/:id" element={<ProductItemDetail />} />
          {/* 상품 상세페이지 */}
          <Route
            path="/shop-sub-category-product-list/:id"
            element={<SubCategoryProductList />}
          />
          {/* 서브 카테고리 아이디 별 상품 리스트  */}
          <Route path="/search" element={<SearchResults />} />
          <Route path="/join-us" element={<JoinUser/>}/>
          {/* 회원가입 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
