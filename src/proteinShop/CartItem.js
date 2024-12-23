import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { updateCartItem } from "../api/cartApi";
import "./CartItem.css";

const CartItem = ({ id, title, price, quantity, imgsrc, onDelete }) => {
  const [cartItemQuantity, setCartItemQuantity] = useState(quantity);
  const [cartItemPrice, setCartItemPrice] = useState(price * quantity);
  // const [cartItemImage, setCartItemImage] = useState("");

  useEffect(() => {
    setCartItemPrice(price * cartItemQuantity);

    const updatedCartItem = {
      id: id,
      title: title,
      price: price,
      quantity: cartItemQuantity,
      imgsrc: imgsrc,
    };

    updateCartItem(updatedCartItem)
      .then(() => {
        console.log("수량 업데이트 성공");
      })
      .catch((err) => console.log(err));
  }, [cartItemQuantity, id, price, title, imgsrc]);

  const addItemQuantity = () => {
    //상품 수량 선택
    setCartItemQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseItemQuantity = () => {
    if (cartItemQuantity <= 1) {
      alert("1개 이상 수량을 선택해주세요");
    } else {
      setCartItemQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="cart-item">
      <img src={imgsrc} alt={title} />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{title}</h3>
        <p className="cart-item-price">주문금액: {cartItemPrice}원</p>
        <div className="cart-item-quantity">
          <button onClick={decreaseItemQuantity}>-</button>
          <span>{cartItemQuantity}</span>
          <button onClick={addItemQuantity}>+</button>
        </div>
      </div>
      <div className="cart-item-buttons">
        <button>주문하기</button>
        <button onClick={() => onDelete(id)}>삭제하기</button>
      </div>
    </div>
  );
};

export default CartItem;
