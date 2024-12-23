import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mainCategoryDetail } from "../api/MainCategory";
import CategoryList from "./CategoryList";
import SubCategoryProductList from "./SubCategoryProductList";
import ShopCategoryMenu from "./ShopCategoryMenu";


const SubCategoryList = () => {
  const { id } = useParams();
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    mainCategoryDetail(id)
      .then((data) => {
        console.log("서브카테고리 데이터 성공 ", data);
        setSubCategory(data.subCategories || []);
      })
      .catch((err) => console.error("어리석은 닝겐아 좀 더 분발해라", err));
  }, [id]);

  return (
    <div>
      <ShopCategoryMenu/>
      <h1>카테고리 상세</h1>
      <ul>
        {subCategory.length > 0 ? (
          subCategory.map((sub) => (
            <li key={sub.id}>
              <Link
                to={`/shop-sub-category-product-list/${sub.id}`}
                state={{ subCategoryName: sub.name }}
              >
                {sub.name}
              </Link>
            </li>
          ))
        ) : (
          <li>서브 카테고리가 없습니다.</li>
        )}
      </ul>
    </div>
  );
};

export default SubCategoryList;
