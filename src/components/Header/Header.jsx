import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
        <h1>Fake Store</h1>
        <div className='icon-btn'>
            <img src="/src/assets/cart.png"/>
            <p>1</p>
        </div>
    </div>
  )
}

export default Header