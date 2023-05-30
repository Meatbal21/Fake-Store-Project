import React from 'react'
import './Header.css'
import cart from '../../assets/cart.png'

function Header() {
  return (
    <div className='header-container'>
       <a href="/"><h1>Fake Store</h1></a> 
      <div className='icon-btn'>
        <img src={cart}/>
        <p>1</p>
      </div>
    </div>
  )
}

export default Header