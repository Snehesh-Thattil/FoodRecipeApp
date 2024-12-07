import React, { useContext, useEffect, useState } from 'react'
import './CartPanel.css'
import { cartContext } from '../../Contexts/CartContext'
import { cartToggleContext } from '../../Contexts/OtherContexts'

function CartPanel() {
    const { cartState } = useContext(cartContext)
    const { toggle } = useContext(cartToggleContext)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        let total = cartState.reduce((acc, item) => {
            return acc + (item.dishPrice * item.dishQuantity)
        }, 0)
        setCartTotal(total)
    }, [cartState])

    return (
        cartState.length !== 0 &&
        <div className={toggle ? "cartpanel-wrapper Enabled" : "cartpanel-wrapper"}>

            {cartState.map((item, index) => {
                return (
                    <div key={index} className="cart_item">
                        <img src={item.dishImg} alt="cart_img" />
                        <h6>{item.dishName}</h6>
                        <div className='cart_item_values'>
                            <h6> ₹ {item.dishPrice} /-</h6>
                            <h6>Qty : {item.dishQuantity}</h6>
                        </div>
                        <h6>Total : {item.dishQuantity * item.dishPrice}</h6>
                    </div>
                )
            })}
            {cartState.length !== 0 ?
                <div className="cart_item_total">
                    <h5>₹ {cartTotal} /-</h5>
                    <button>view cart</button>
                </div>
                :
                null
            }
        </div >
    )
}

export default CartPanel
