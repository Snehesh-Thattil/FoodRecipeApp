import React from 'react'
import './Menu.css'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import SpecialDishes from '../SpecialDishes/SpecialDishes'
import Categories from '../Categories/Categories'
import Areas from '../Areas/Areas'
import PanelCart from '../PanelCart/PanelCart'
import CartToggle from '../CartToggle/CartToggle'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Footer from '../Footer/Footer'
import Wishlists from '../Wishlists/Wishlists'
import Checkout from '../Checkout/Checkout'

function Menu() {

    return (
        <div className="Menu">
            <Header />
            <Routes>
                <Route exact path='/' element={
                    <>
                        <CartToggle />
                        <Landing />
                        <PanelCart />
                        <SpecialDishes />
                        <Categories />
                        <Areas />
                        <Footer />
                    </>
                } />

                <Route path='/cart' element={<Cart />} />
                <Route path='/wishlists' element={<Wishlists />} />
                <Route path='/checkout' element={<Checkout />} />

            </Routes>
        </div>
    )
}

export default Menu