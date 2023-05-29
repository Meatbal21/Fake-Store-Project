import React, { useState, useEffect } from 'react'
import './FilterProduct.css'
import axios from 'axios'

function FilterProduct({products, setProductHold}) {
    //calling api
    const [filterBtn, setFilterBtn] = useState ([])

    useEffect(
        ()=>{
            //console.log('search for ', category)
            //call api
            axios.get(`https://fakestoreapi.com/products/categories`)
            .then(res =>{
                console.log(res.data)
                //store data
                setFilterBtn(res.data)
                
                
        
            })
            .catch(err=>console.log(err))
        },[]
    )

const setCategory = (category) =>{
    const filterProduct = products.filter(item=>item.category===category)
    setProductHold(filterProduct)
    }



  return (
    <div className='category-container'>
        <p onClick={()=>setProductHold(products)}>All</p>
        {filterBtn.map(item=><p onClick={()=>setCategory(item)} key={item}>{item}</p>)}
    </div>
  )
}

export default FilterProduct