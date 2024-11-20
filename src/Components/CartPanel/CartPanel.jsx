import React, { useContext } from 'react'
import './CartPanel.css'
import { cartContext } from '../../Contexts/CartContext'

function CartPanel({ toggle }) {
    const { cartItems } = useContext(cartContext)

    return (
        <div className={toggle ? "cartpanel-wrapper Enabled" : "cartpanel-wrapper"}>

            {cartItems.map((item, index) => {
                return (
                    <div key={index} className="cart_item">
                        <img src={item.dishImg} alt="cart_img" />
                        <h6>{item.dishName}</h6>
                        <div className='cart_item_values'>
                            <h6> <span>₹</span> 499 /-</h6>
                            <h6>Qty : {item.dishQuantity}</h6>
                        </div>
                        <h6>Total : {item.dishQuantity * 499}</h6>
                    </div>
                )
            })}

            <div className="cart_item_total">
                {cartItems.length !== 0 ? <h5>₹ 2999 /-</h5> : ''}
            </div>
        </div>
    )
}

export default CartPanel
