import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='Navbar'>
      <li className='icon'>🧑‍🍳</li>
      <ul>
        <li>Home 🏠</li>
        <li>Location 🔍</li>
        <li>Checkout 🛒</li>
      </ul>
    </div>
  )
}

export default Header
