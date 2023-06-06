import React, {useContext} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import cart from '../../assets/cart.png'

function Header() {
    //change to global state
    //NOTE {} not []

    const {checkout} = useContext(CartContext)

  return (
    <div className='header-container'>
       <Link to="/"><h1>Fake Store</h1></Link> 
      <div className='icon-btn'>
        <Link to="/checkout"><img src={cart}/></Link>
        <p>{checkout.length}</p>
      </div>
    </div>
  )
}

export default Header