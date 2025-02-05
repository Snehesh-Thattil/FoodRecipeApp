import React, { useContext, useEffect, useMemo, useState } from 'react'
import './PanelCart.css'
import { cartContext } from '../../Contexts/CartContext'
import { cartToggleContext } from '../../Contexts/OtherContexts'
import { useNavigate } from 'react-router-dom'

function CartPanel() {
    const { cartState } = useContext(cartContext)
    const { toggle } = useContext(cartToggleContext)
    const navigate = useNavigate()

    // Calculate total value of cart
    const totalCartValue = useMemo(() => {
        return cartState.reduce((acc, item) => {
            return acc + (item.dishPrice * item.dishQuantity)
        }, 0)
    }, [cartState])

    // Rendering
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
                    <h5>₹ {totalCartValue} /-</h5>
                    <button onClick={() => navigate('/cart')}>view cart</button>
                </div>
                :
                null
            }
        </div >
    )
}

export default CartPanel
