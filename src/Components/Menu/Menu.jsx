import React, { useContext } from 'react'
import './Menu.css'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import SpecialDishes from '../SpecialDishes/SpecialDishes'
import Categories from '../Categories/Categories'
import CartPanel from '../CartPanel/CartPanel'
import { cartToggleContext } from '../../Contexts/OtherContexts'

function Menu() {
    const { toggle, setToggle } = useContext(cartToggleContext)

    return (
        <div className="Menu">

            <div className={toggle ? "cartTogglediv Enabled" : "cartTogglediv"}>
                <button onClick={() => setToggle(!toggle)}>⬅️</button>
            </div>

            <Header />
            <Landing />
            <CartPanel toggle={toggle} />
            <SpecialDishes />
            <Categories />

        </div>
    )
}

export default Menu