import React, {useContext} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import cart from '../../assets/cart.png'
import { CartContext } from '../../context/CartContext'

function Header() {
      //change to global state
    //NOTE {} not []

    const {checkout} = useContext(CartContext)

  return (
    <div className='header-container'>
       <Link to="/"><h1>Fake Store</h1></Link> 
      <div className='icon-btn'>
        <Link to="/checkout"><img src={cart}/>
        <p>
          
        {checkout.length == 0? "" : (<p className='length-btn'> {checkout.length} </p>)}
        </p></Link>
      </div>
    </div>
  )
}

export default Header