import React, { useEffect, useState } from "react";
import {getCartList,deleteCartItem } from "../api/cartApi";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import ShopCategoryMenu from "./ShopCategoryMenu";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartList()
      .then((data) => {
        console.log("장바구니 아이템 전송 완료 ", data);
        setCartItems(data);
      })
      .catch((err) => console.log(err));
  }, []);
  

  const handleDelete = (id) => {
    deleteCartItem(id)
      .then(() => {
       alert("선택하신 상품이 삭제되었습니다.") 
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      })
      .catch((err) => console.error("삭제 실패:", err));
  };

  return (
  <div>
    <ShopCategoryMenu/>
    <h1>장바구니</h1>
    {cartItems.length ===0? (
        <p>장바구니가 비어 있습니다</p>
    ):(
    <ul>
        {cartItems.map((product)=>(
            <CartItem key={product.id}{...product} 
            onDelete = {handleDelete}

           />
        ))}
    </ul>
    )}
    <Link to ="/shop-protein">쇼핑하러 가기</Link>
    </div>
  )
};

export default Cart;
