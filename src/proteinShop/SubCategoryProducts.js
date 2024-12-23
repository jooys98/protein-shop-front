import React from 'react'

const SubCategoryProducts = ({id , name, price }) => {

  return (
    <div>
        <li>{name}</li>
        <li>{price}</li>

    </div>
  )
}

export default SubCategoryProducts