import React, { useContext } from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { CartContext } from '../../context/CartContext'


function ProductDetail() {
    //change to global state
  //NOTE {} not []

  const {checkout, addProduct, removeProduct} = useContext(CartContext)

  //create variable for cart
  //const isCart = false;
  const [isCheckout, setCheckout] = React.useState (false)

  React.useEffect(
    ()=>{
      //console.log('update')
      //is this product in cart?
      setCheckout(checkout.find(item=> item.id == productId))

    },[checkout]
  )




    //show data for specific product
    //the id is in url
    const{productId} = useParams()

    //create state to hold character data
    const [product, setProduct] = React.useState('')

    //https://fakestoreapi.com/products/1

    //get data when page loads
    React.useEffect(
        ()=>{
            console.log('details')
            //api call
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>{
                console.log(res.data)
                //store data
                setProduct(res.data)
                

            })
            .catch(err=>console.log(err))
        },[]
    )
    


  return (
    <div className='product-detail'>
        <img src={product?.image}/>
        <div className='detail-info'>
            <p className='description'>{product?.title}</p>
            <p className='description'>$ {product?.price}</p>
            <p>Description</p>
            <p>{product?.description}</p>
            <button className='btn'>
            {
                
              isCheckout?
               <p className='btn-cart' onClick={() => removeProduct(product.id)}>Remove from cart</p>
               :
               <p className='btn-cart' onClick={() =>addProduct(product)}>Add to cart</p>

            
            } 

            </button>
        </div>



    </div>
  )
}

export default ProductDetail