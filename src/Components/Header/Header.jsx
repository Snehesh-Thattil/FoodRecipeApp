import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [location, setLocation] = useState('Location')
  const navRef = useRef()
  const locationLiRef = useRef()
  const navigate = useNavigate()

  // Change location by selection
  function HandleLocationChange(location) {
    setLocation(location)
    localStorage.setItem("location", location)
  }

  // Get Item from LocalStorage
  useEffect(() => {
    if (localStorage.getItem("location")) {
      let locationFetch = localStorage.getItem("location")
      setLocation(locationFetch)
    }
  }, [])

  // Handle Navbar collapsing
  useEffect(() => {
    const HandleClickOutside = (event) => { // Click outside nav panel
      if (navRef.current && !navRef.current.contains(event.target)) {
        navRef.current.classList.remove('toggle')
        locationLiRef.current.classList.remove('location_clicked')
      }
    }

    const HandleNavClick = (event) => { // Click nav Li items
      if (!event.target.classList.contains('location') && !event.target.classList.contains('span')) {
        navRef.current.classList.remove('toggle')
        locationLiRef.current.classList.remove('location_clicked')
      } else {
        locationLiRef.current.classList.add('location_clicked')
      }
    }

    document.addEventListener('mousedown', HandleClickOutside)

    document.querySelectorAll('.nav-items li').forEach((link) => {
      link.addEventListener('click', (e) => HandleNavClick(e))
    })

    return () => {
      document.addEventListener('mousedown', HandleClickOutside)
      document.querySelectorAll('.nav-items li').forEach((link) => {
        link.addEventListener('click', HandleNavClick)
      })
    }
  }, [])

  //Rendering
  return (
    <header>
      <li className='icon' onClick={() => navigate('/')}>🧑‍🍳</li>

      <ul className='nav-items' ref={navRef}>
        <li onClick={() => navigate('/')}> Home 🏠</li>
        <li className="location" ref={locationLiRef}>
          <span className='span' onClick={() => navigate('/')}> {location} 🔍</span>
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
        </li>
        <li onClick={() => navigate('/wishlists')}> Wishlists 🩶</li>
        <li onClick={() => navigate('/cart')}> Cart 🛒</li>

        <button className='nav-btn nav-close-btn' onClick={() => navRef.current.classList.remove('toggle')}>
          <i className="fa-solid fa-square-xmark"></i>
        </button>
      </ul>

      <button className='nav-btn' onClick={() => navRef.current.classList.toggle('toggle')}>
        <i className="fa-solid fa-bars" />
      </button>
    </header>
  )
}

export default Header
