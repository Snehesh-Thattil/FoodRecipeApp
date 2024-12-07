import React, { useContext, useEffect, useState } from 'react'
import './Checkout.css'
import { cartContext } from '../../Contexts/CartContext'
import { cartToggleContext } from '../../Contexts/OtherContexts'
import { useNavigate } from 'react-router-dom'

function Checkout() {
    const { cartDispatch, cartState } = useContext(cartContext)
    const { setToggle } = useContext(cartToggleContext)
    const [totalValue, setTotalValue] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        let total = cartState.reduce((acc, item) => {
            return acc + (item.dishPrice * item.dishQuantity)
        }, 0)

        setTotalValue(total)
        cartState.length === 0 && setToggle(false)

    }, [cartState, setToggle])

    return (
        <div className='Checkout'>

            <div className="tiles">
                {cartState.map((item, index) => {
                    return (
                        item &&
                        <div className="tile" key={index}>

                            <img src={item.dishImg} alt="itemImg" />

                            <div className="details">
                                <h2>{item.dishName}</h2>

                                <div className="dishtags">
                                    <button>{item.dishArr.strCategory}</button>
                                    <button>{item.dishArr.strArea}</button>
                                </div>
                                <div className="ordervalues">
                                    <h4>Price : {item.dishPrice}</h4>
                                    <h5> Qty : {item.dishQuantity}</h5>
                                </div>
                                <h2>{item.dishPrice * item.dishQuantity}</h2>
                            </div>

                            <div className="remove" onClick={() => cartDispatch({
                                type: 'remove-from-cart',
                                payload: cartState,
                                removeId: item.dishArr.idMeal
                            })}>
                                <li><i className="fa-solid fa-trash"></i></li>
                            </div>

                            <div className="move-to-wishlist">
                                <p>Move to wishlist</p>
                                <i class="fa-solid fa-heart"></i>
                            </div>

                        </div>
                    )
                })}
            </div>

            {totalValue !== 0 ?
                <div className="overview">
                    <div className="breakdown">

                        <table>
                            <tr>
                                <th>Cart value</th>
                                <td>: {totalValue}</td>
                            </tr>
                            <tr>
                                <th>Discount</th>
                                <td>: {totalValue !== 0 ? 299 : 0}</td>
                            </tr>
                            <tr>
                                <th>Coupon applied</th>
                                <td>: {totalValue !== 0 ? 'GET199' : 'Not-available'}</td>
                            </tr>
                            <tr>
                                <th>Coupon value</th>
                                <td>: {totalValue !== 0 ? 199 : 0}</td>
                            </tr>
                        </table>

                        <div className="line"></div>

                        <div className="totalline">
                            <h3>Total</h3>
                            <h3>: {totalValue ? totalValue - (299 + 199) : 0}</h3>
                        </div>

                    </div>
                    <button>Order Now</button>
                </div>
                :
                <div className="emptyCart">
                    <h2>Oops... Cart is empty</h2>
                    <button onClick={() => navigate('/')}>Add Items</button>
                </div>
            }

        </div>
    )
}

export default Checkout
