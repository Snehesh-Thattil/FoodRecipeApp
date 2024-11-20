import React, { useContext } from 'react'
import { cartToggleContext } from '../../Contexts/OtherContexts'
import './CartToggle.css'

function CartToggle() {
    const { toggle, setToggle } = useContext(cartToggleContext)

    return (
        <div className={toggle ? "cartTogglediv Enabled" : "cartTogglediv"}>
            <button onClick={() => setToggle(!toggle)}> ➡️ </button>
        </div>
    )
}

export default CartToggle
