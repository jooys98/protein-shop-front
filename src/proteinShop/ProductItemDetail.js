import React, { useEffect, useState } from "react";
import { productDetail } from "../api/productApi";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { createInCart } from "../api/cartApi";
import ShopCategoryMenu from "./ShopCategoryMenu";


const ProductItemDetail = () => {
  const { id } = useParams();
  const {state} = useLocation();
  const [product, setProduct] = useState({
    title: state?.productTitle || '',
    price: state?.productPrice || 0,
    imgsrc: state?.productImg || '',
    description: state?.productDescription || '',
  });

 
  const [addInCart, setAddInCart] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);
//  const [product, setProduct] = useState({});

  console.log(id);

  useEffect(() => {
    //상품 정보 read
    productDetail(id)
      .then((data) => {
        console.log(data);
        setProduct(data);
        // setItemPrice(data.price);
      })
      .catch((err) => console.log(err));
  }, [id]);


  useEffect(() => {
    setItemPrice(product.price * itemQuantity);
  }, [itemQuantity, product.price]);

  const addItemQuantity = () => {
    //상품 수량 선택
    setItemQuantity((prevQuantity) => prevQuantity + 1);
  };

  
  const decreaseItemQuantity = () => {
    if (itemQuantity <= 1) {
      alert("1개 이상 수량을 선택해주세요");
    } else {
      setItemQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    //장바구니 추가
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      imgsrc: product.imagesrc,
      quantity: itemQuantity,
    };

    createInCart(cartItem)
      .then((data) => {
        console.log("장바구니 추가 완료", data);
        setAddInCart(data);
        alert("장바구니에 상품이 추가되었습니다");
      })
      .catch((err) => console.error("바보 윤수야 에러떴어", err));
  };

  const itemPriceInCart = product.price * itemQuantity;

  return (
    <div>
      <ShopCategoryMenu/>
      <img src={product.imagesrc} />
      <h1>{product.title}</h1>
      <p>가격: {itemPriceInCart}원 </p>
      <p>{product.description}</p>
      <p>
        카테고리: {product.mainCategory} / {product.subCategory}
      </p>
      <p>수량 : {itemQuantity}</p>
      <button onClick={addItemQuantity}>+</button>
      <button onClick={decreaseItemQuantity}>-</button>
      <br />
      <button onClick={handleAddToCart}>장바구니에 담기 </button>
      <Link to="/shop-protein">뒤로가기</Link>
      <Link to="/shop-cart">장바구니로 이동 </Link>
    </div>
  );
};

export default ProductItemDetail;
