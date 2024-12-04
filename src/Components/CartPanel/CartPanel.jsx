import React, { useContext } from 'react'
import './CartPanel.css'
import { cartContext } from '../../Contexts/CartContext'
import { cartToggleContext } from '../../Contexts/OtherContexts'

function CartPanel() {
    const { cartState } = useContext(cartContext)
    const { toggle } = useContext(cartToggleContext)

    return (
        <div className={toggle ? "cartpanel-wrapper Enabled" : "cartpanel-wrapper"}>

            {cartState.map((item, index) => {
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
                {cartState.length !== 0 ? <h5>₹ 2999 /-</h5> : ''}
            </div>
        </div>
    )
}

export default CartPanel
