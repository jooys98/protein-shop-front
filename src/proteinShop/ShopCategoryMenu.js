import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {getMainCategoryList} from '../api/MainCategory';
import './ShopCategoryMenu.css';

const ShopCategoryMenu = () => {

  const [showCategory , setShowCategory] = useState(false);
  const [mainCategories , setMainCategories] = useState([]);
 
 
const handlerMouseEnter = () =>{
  setShowCategory(true);
  if (mainCategories.length ===0){
    getMainCategoryList() 
    .then((data) =>{
      console.log("굿 " , data)
      setMainCategories(data);
    })
    .catch((err) => console.error("바보" , err))
  }
};

const handlerMouseLeave = () => setShowCategory(false);


  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#333",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        padding: "10px 0",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          gap: "60px",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Category 메뉴 */}
        <li
          style={{ position: "relative", lineHeight: "1.8" }}
          onMouseEnter={handlerMouseEnter}
          onMouseLeave={handlerMouseLeave}
        >
          <Link
            to="/shop-category"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Category
          </Link>
          {/* 서브 카테고리 리스트 */}
          {showCategory && (
            <ul
            style={{
                position: "absolute",
                top: "40px", // 상단 메뉴에서 아래로 약간 띄움
                left: "0",
                backgroundColor: "#444",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
             {mainCategories.map((category) => (
                <li key={category.id} style={{ marginBottom: "5px" }}>
                  <Link
                    to={`/shop-sub-category/${category.id}`} // 동적 경로 설정
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      display: "block",
                    }}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        {/* Go to Cart 메뉴 */}
        <li style={{ lineHeight: "1.8" }}>
          <Link
            to="/shop-cart"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Go to Cart
          </Link>
        </li>

        {/* Home 메뉴 */}
        <li style={{ lineHeight: "1.8" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
        </li>
      </ul>
    
    </div>
  );
};

export default ShopCategoryMenu;