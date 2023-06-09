import React, {useContext} from 'react'
import './CheckoutItem.css'
import { BsTrash } from 'react-icons/bs'
import Modal from 'react-modal';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


function CheckoutItem({product}) {
    //change to global state
    //NOTE {} not []

    const {removeProduct} = useContext(CartContext)




  return (
    <div className='checkout-container'>
            
            <div className='checkout-item-detail'>
            <img src={product.image}/>
            <p>{product.title}</p>
            </div>
        
        <div className='checkout-price'>
            <p>$ {product.price}</p>
        
        </div>
        <div className='checkout-qty'>
            <p>1</p>


        </div>
        <div className='checkout-remove'>
                <BsTrash onClick={() => removeProduct(product.id)}/>
            
        </div>
    </div> 
  )
}

export default CheckoutItem


{/* <div className='checkout-container'>
<div className='checkout-item'>
    
    <div className='checkout-item-detail'>
    
    <img src={product.image}/>
    <p>{product.title}</p>
    </div>
</div>
<div className='checkout-price'>
    <p>Price</p>
    <div className='checkout-price-detail'>
    <p>{product.price}</p>
    </div>
</div>
<div className='checkout-qty'>
    <p>Quantity</p>
    <div className='checkout-qty-detail'>
    <p>10</p>
    </div>

</div>
<div className='checkout-remove'>
    <p>Remove</p>
    <div className='checkout-remove-detail'>
        <BsTrash onClick={() => removeProduct(product.id)}/>
    </div>
</div>
</div>  */}