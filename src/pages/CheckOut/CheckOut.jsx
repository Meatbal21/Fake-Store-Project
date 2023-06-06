import React, {useContext} from 'react'
import './CheckOut.css'
import { CartContext } from '../../context/CartContext'
import ItemCard from '../../components/ItemCard/ItemCard'


function CheckOut({product}) {
    //change to global state
    //NOTE {} not []

    const {checkout, getTotalCart, setCheckOut} = useContext(CartContext)
    


  return (
    <div className='checkout-container'>
        <h1>Check Out</h1>
        <div className='checkout-products'>
        <h1>{checkout}</h1>
        console.log({product.price})
      
           {
           
                checkout.length > 0?
                checkout.map(item=><ItemCard 
                    key={item.price}
                    product={item}
                     />)

                :
                <h3>No Product to checkout yet</h3>
                    
            }

        </div>
        <h4> subtotal $: {getTotalCart}</h4>
    </div>
  )
}

export default CheckOut