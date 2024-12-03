import React from 'react'
import './Menu.css'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import SpecialDishes from '../SpecialDishes/SpecialDishes'
import Categories from '../Categories/Categories'
import CartPanel from '../CartPanel/CartPanel'
import CartToggle from '../CartToggle/CartToggle'
import { Route, Routes } from 'react-router-dom'
import Checkout from '../Checkout/Checkout'
import Footer from '../Footer/Footer'

function Menu() {

    return (

        <div className="Menu">
            <Header />
            <Routes>
                <Route exact path='/' element={
                    <>
                        <CartToggle />
                        <Landing />
                        <CartPanel />
                        <SpecialDishes />
                        <Categories />
                        <Footer/>
                    </>
                } />

                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </div>
    )
}

export default Menu