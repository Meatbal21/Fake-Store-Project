import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ItemCard from '../../components/ItemCard/ItemCard'
import FilterProduct from '../../components/FilterProduct/FilterProduct'


//'https://fakestoreapi.com/products'

function Homepage() {

    const [products, setProducts] = useState( [] )

    const [productHold, setProductHold] = useState([])

    useEffect(
        ()=>{
            console.log('homepage loaded')
            //call api
            axios.get(`https://fakestoreapi.com/products`)
            .then(res =>{
                console.log(res.data)
                //store data
                setProducts(res.data)
                setProductHold(res.data)
                
        
            })
            .catch(err=>console.log(err))
        },[]

    )
        
  return (
    <div className='home-categories'>
        <ul className='categories'>
            <FilterProduct products={products} setProductHold={setProductHold}/>

        </ul>
        <div className='product-container'>
            {
                productHold.map(item=><ItemCard 
                                key={item.id}
                                product={item} />)


            }

        </div>
    </div>
  )
}

export default Homepage