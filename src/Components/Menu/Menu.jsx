import React from 'react'
import './Menu.css'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import SpecialDishes from '../SpecialDishes/SpecialDishes'
import Categories from '../Categories/Categories'

function Menu() {
    return (
        <div className="Menu">
            <Header />
            <Landing />
            <SpecialDishes />
            <Categories />
        </div>
    )
}

export default Menu