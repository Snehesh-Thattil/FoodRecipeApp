import React from 'react'
import './Menu.css'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import SpecialDishes from '../SpecialDishes/SpecialDishes'
import Categories from '../Categories/Categories'
import CartPanel from '../CartPanel/CartPanel'
import CartToggle from '../CartToggle/CartToggle'

function Menu() {

    return (
        <div className="Menu">
            <CartToggle />
            <Header />
            <Landing />
            <CartPanel />
            <SpecialDishes />
            <Categories />
        </div>
    )
}

export default Menu