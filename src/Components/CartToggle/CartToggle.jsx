import React, { useContext } from 'react'
import './CartToggle.css'
import { cartToggleContext } from '../../Contexts/OtherContexts'
import { cartContext } from '../../Contexts/CartContext'

function CartToggle() {
    const { toggle, setToggle } = useContext(cartToggleContext)
    const { cartState } = useContext(cartContext)

    return (
        cartState.length !== 0 &&
        <div className={toggle ? "cartTogglediv Enabled" : "cartTogglediv"}>
            <button onClick={() => setToggle(!toggle)}> ➡️ </button>
        </div>
    )
}

export default CartToggle
