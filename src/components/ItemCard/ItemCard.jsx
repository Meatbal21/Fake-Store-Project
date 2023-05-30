import React from 'react'
import './ItemCard.css'

function ItemCard({product}) {
  return (
    <div className='item-card'>
      <a href={`/details/${product?.id}`}><img src={product?.image}/></a>
      <p>{product?.title}</p>
      <p>{product?.category}</p>
      <p>$ {product?.price}</p>
      
    </div>
  )
}

export default ItemCard