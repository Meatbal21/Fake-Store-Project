import React from 'react'
import './ItemCard.css'

function ItemCard({product}) {
  return (
    <div className='item-card'>
      <img src={product?.image}/>
      <p>{product?.title}</p>
      <p>{product?.category}</p>
      <p>$ {product?.price}</p>
      
    </div>
  )
}

export default ItemCard