import React from 'react'
import './Menu.css'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import SpecialDishes from '../SpecialDishes/SpecialDishes'
import Categories from '../Categories/Categories'
import Areas from '../Areas/Areas'
import PanelCart from '../PanelCart/PanelCart'
import CartToggle from '../CartToggle/CartToggle'
import Cart from '../Cart/Cart'
import Footer from '../Footer/Footer'
import Wishlists from '../Wishlists/Wishlists'
import Checkout from '../Checkout/Checkout'
import Seperator from '../../Resources/Seperator'

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
                        <Seperator />

                        <Categories />
                        <Seperator />

                        <Areas />
                        <Seperator />

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