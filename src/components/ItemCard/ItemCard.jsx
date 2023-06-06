import React, {useContext} from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'


function ItemCard({product}) {
    //change to global state
  //NOTE {} not []

  const {checkout, addProduct, removeProduct} = useContext(CartContext)

  //create variable for cart
  //const isCart = false;
  const [isCheckout, setCheckout] = React.useState (false)

  React.useEffect(
    ()=>{
      //console.log('update')
      //is this char in favorites?
      setCheckout(checkout.find(item=> item.id === product.id))

    },[checkout]
  )


  return (
    <div className='item-card'>
      <Link to={`/details/${product?.id}`}><img src={product?.image}/></Link>
      <p>{product?.title}</p>
      <p>{product?.category}</p>
      <p>$ {product?.price}</p>
      
      {
        isCheckout?
        <FaHeart className='heart-icon'
        onClick={() => removeProduct(product.id)} />
        :
        <FaRegHeart className='heart-icon' 
        onClick={()=>addProduct(product)}/>
      }
      
    </div>
  )
}

export default ItemCard