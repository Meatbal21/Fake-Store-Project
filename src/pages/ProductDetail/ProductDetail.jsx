import React, { useEffect } from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetail() {
    //shor data for specific product
    //the id is in url
    const{productId} = useParams()

    //create state to hold character data
    const [product, setProduct] = React.useState('')

    //https://fakestoreapi.com/products/1

    //get data when page loads
    useEffect(
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
            <button>Add to cart</button>
        </div>



    </div>
  )
}

export default ProductDetail