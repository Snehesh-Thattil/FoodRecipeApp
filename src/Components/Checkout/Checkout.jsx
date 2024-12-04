import React, { useContext } from 'react'
import './Checkout.css'
import { cartContext } from '../../Contexts/CartContext'

function Checkout() {
    const { cartState } = useContext(cartContext)

    return (
        <div className='Checkout'>

            {cartState.map((item) => {
                return (
                    <div className="tile">

                        <img src={item.dishImg} alt="itemImg" />

                        <div className="details">
                            <h2>{item.dishName}</h2>

                            <div className="dishtags">
                                <button>{item.dishArr.strCategory}</button>
                                <button>{item.dishArr.strArea}</button>
                            </div>
                            <div className="ordervalues">
                                <h4>Price</h4>
                                <h6>{item.dishQuantity}</h6>
                            </div>
                            <h2>TotalValue</h2>
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default Checkout
