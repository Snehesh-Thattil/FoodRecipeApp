import React, { useContext } from 'react'
import './CartToggle.css'
import { cartToggleContext } from '../../Contexts/OtherContexts'
import { cartContext } from '../../Contexts/CartContext'

function CartToggle() {
    const { panelCartToggle, setPanelCartToggle } = useContext(cartToggleContext)
    const { cartState } = useContext(cartContext)

    return (
        cartState.length !== 0 &&
        <div className={panelCartToggle ? "cartTogglediv Enabled" : "cartTogglediv"}>
            <button onClick={() => setPanelCartToggle(!panelCartToggle)}> ➡️ </button>
        </div>
    )
}

export default CartToggle
