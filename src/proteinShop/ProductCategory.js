
import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList';
import {getMainCategoryList, mainCategoryDetail} from '../api/MainCategory';
import { Link } from 'react-router-dom';
import ShopCategoryMenu from './ShopCategoryMenu';


const ProductCategory = () => {
const [mainCategory , setMainCategory] = useState([]);


useEffect(()=>{
  getMainCategoryList()
  .then((data)=>{
    console.log("성공" , data)
    setMainCategory( data);
  })
  .catch((err) =>console.log(err , "풉 ㅋ"));
},[]);




  return (
    <div>
      <ShopCategoryMenu />
      <h1>카테고리</h1>
      <ul>
        {mainCategory && mainCategory.length > 0 ? (
          mainCategory.map((main) => (
            <CategoryList key={main.id} {...main} />
          ))
        ) : (
          <p>카테고리가 없습니다.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductCategory;