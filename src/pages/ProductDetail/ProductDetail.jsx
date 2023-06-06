import React, { useContext } from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { CartContext } from '../../context/CartContext'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import CheckOut from '../CheckOut/CheckOut'


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
      setCheckout(checkout.find(item=> item.id === product.id))

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
            <p>{product?.title}</p>
            <p>$ {product?.price}</p>
            <p>Description</p>
            <p>{product?.description}</p>
            <button>
            {
                
              isCheckout?
               <p onClick={() => removeProduct(product.id)}>remove </p>
               :
               <p onClick={() =>addProduct(product)}>add</p>

            
            } 

            </button>
        </div>



    </div>
  )
}

export default ProductDetail