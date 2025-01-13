import React, { useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [location, setLocation] = useState('Bangalore')
  const navigate = useNavigate()
  return (
    <div className='Navbar'>
      <li className='icon' onClick={() => navigate('/')}>🧑‍🍳</li>
      <ul>
        <li onClick={() => navigate('/')}> Home 🏠</li>

        <div className="location">
          <li onClick={() => navigate('/location')}> {location} 🔍</li>
          <div className="locations">
            <button onClick={() => setLocation('Kochi')}>Kochi</button>
            <button onClick={() => setLocation('Calicut')}>Calicut</button>
            <button onClick={() => setLocation('Bangalore')}>Bangalore</button>
            <button onClick={() => setLocation('Chennai')}>Chennai</button>
            <button onClick={() => setLocation('Delhi')}>Delhi</button>
            <button onClick={() => setLocation('Mumbai')}>Mumbai</button>
            <button onClick={() => setLocation('Pune')}>Pune</button>
            <button onClick={() => setLocation('Kolkata')}>Kolkata</button>
            <button onClick={() => setLocation('Hyderabad')}>Hyderabad</button>
            <button onClick={() => setLocation('Jaipur')}>Jaipur</button>
            <button onClick={() => setLocation('Ahmedabad')}>Ahmedabad</button>
            <button onClick={() => setLocation('Lucknow')}>Lucknow</button>
            <button onClick={() => setLocation('Bhopal')}>Bhopal</button>
            <button onClick={() => setLocation('Coimbatore')}>Coimbatore</button>
            <button onClick={() => setLocation('Amritsar')}>Amritsar</button>
          </div>
        </div>
        
        <li onClick={() => navigate('/wishlists')}> Wishlists 🩶</li>
        <li onClick={() => navigate('/cart')}> Cart 🛒</li>
      </ul>
    </div>
  )
}

export default Header
