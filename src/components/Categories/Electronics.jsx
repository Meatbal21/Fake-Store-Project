import axios from 'axios';
import React from 'react'

function Electronics({setProducts}) {
    const[electronics,setCategory] = React.useState([])

    //https://fakestoreapi.com/products/category/jewelery

    const onChange = (electronics) =>{
        
        console.log('search for ', electronics)
        axios.get(`https://fakestoreapi.com/products/category/electronics`)
        .then(res=>{
            console.log(res.data)

            setProducts(res.data)
        })
        .catch(err=>{console.log(err)})
        setCategory(setProducts)
    }



  return (
    <div onClick={onChange}>Electronics</div>
  )
}

export default Electronics