import React, { useEffect, useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [location, setLocation] = useState('Location')
  const navigate = useNavigate()

  function HandleLocationChange(location) {
    setLocation(location)
    localStorage.setItem("location", location)
  }

  useEffect(() => {
    if (localStorage.getItem("location")) {
      let locationFetch = localStorage.getItem("location")
      setLocation(locationFetch)
    }
  }, [])

  return (
    <div className='Navbar'>
      <li className='icon' onClick={() => navigate('/')}>🧑‍🍳</li>
      <ul>
        <li onClick={() => navigate('/')}> Home 🏠</li>

        <div className="location">
          <li onClick={() => navigate('/')}> {location} 🔍</li>
          <div className="locations">
            <button onClick={() => HandleLocationChange('Kochi')}>Kochi</button>
            <button onClick={() => HandleLocationChange('Calicut')}>Calicut</button>
            <button onClick={() => HandleLocationChange('Bangalore')}>Bangalore</button>
            <button onClick={() => HandleLocationChange('Chennai')}>Chennai</button>
            <button onClick={() => HandleLocationChange('Delhi')}>Delhi</button>
            <button onClick={() => HandleLocationChange('Mumbai')}>Mumbai</button>
            <button onClick={() => HandleLocationChange('Pune')}>Pune</button>
            <button onClick={() => HandleLocationChange('Kolkata')}>Kolkata</button>
            <button onClick={() => HandleLocationChange('Hyderabad')}>Hyderabad</button>
            <button onClick={() => HandleLocationChange('Jaipur')}>Jaipur</button>
            <button onClick={() => HandleLocationChange('Ahmedabad')}>Ahmedabad</button>
            <button onClick={() => HandleLocationChange('Lucknow')}>Lucknow</button>
            <button onClick={() => HandleLocationChange('Bhopal')}>Bhopal</button>
            <button onClick={() => HandleLocationChange('Coimbatore')}>Coimbatore</button>
            <button onClick={() => HandleLocationChange('Amritsar')}>Amritsar</button>
          </div>
        </div>

        <li onClick={() => navigate('/wishlists')}> Wishlists 🩶</li>
        <li onClick={() => navigate('/cart')}> Cart 🛒</li>
      </ul>
    </div>
  )
}

export default Header
