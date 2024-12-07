import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <div className='Navbar'>
      <li className='icon' onClick={() => navigate('/')}>🧑‍🍳</li>
      <ul>
        <li onClick={() => navigate('/')}> Home 🏠</li>
        <li onClick={() => navigate('/location')}> Location 🔍</li>
        <li onClick={() => navigate('/wishlists')}> Wishlists 🩶</li>
        <li onClick={() => navigate('/checkout')}> Checkout 🛒</li>
      </ul>
    </div>
  )
}

export default Header
