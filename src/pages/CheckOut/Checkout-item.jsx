import React from 'react'

export const CheckoutItem = ({product}) => {
  return (
    <div>CheckoutItem
        <img src={product.image} />
        <h1>{product.price}</h1>
        <h2>{product.title}</h2>
    </div>
  )
}
