import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ItemCard from '../../components/ItemCard/ItemCard'
import Electronics from '../../components/Categories/Electronics'


//'https://fakestoreapi.com/products'

function Homepage() {

    const [products, setProducts] = useState( [] )

    useEffect(
        ()=>{
            console.log('homepage loaded')
            //call api
            axios.get(`https://fakestoreapi.com/products`)
            .then(res =>{
                console.log(res.data)
                //store data
                setProducts(res.data)
                
                
        
            })
            .catch(err=>console.log(err))
        },[]

    )
        
  return (
    <div className='home-categories'>
        <ul className='categories'>
            <a href="#">All</a>
            <Electronics setCategory={setProducts} />
            <a href="#">Jewelry</a>
            <a href="#">Men's Clothing</a>
            <a href="#">Women's Clothing</a>
        </ul>
        <div className='product-container'>
            {
                products.map(item=><ItemCard 
                                key={item.id}
                                product={item} />)


            }

        </div>
    </div>
  )
}

export default Homepage