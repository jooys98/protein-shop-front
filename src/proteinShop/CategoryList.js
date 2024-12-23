import React , {useState , useEffect} from 'react'
import { getMainCategoryList ,mainCategoryDetail } from '../api/MainCategory'
import { Link } from 'react-router-dom';
import SubCategoryList from './SubCategoryList';

const CategoryList = ({id , name}) => {
  

    return (
    <div>
      <Link to={`/shop-sub-category/${id}`}>
        <li>{name}</li>
        </Link>
        </div>
  )
}

export default CategoryList;