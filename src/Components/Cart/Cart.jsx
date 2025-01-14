import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { wishlistsContext } from '../../Contexts/WishlistsContext'
import { cartContext } from '../../Contexts/CartContext'
import { cartToggleContext } from '../../Contexts/OtherContexts'
import { useNavigate } from 'react-router-dom'
import { orderContext } from '../../Contexts/OrderContext'

function Checkout() {
    const { cartState, cartDispatch } = useContext(cartContext)
    const { orderDispatch } = useContext(orderContext)
    const { wishlistDispatch } = useContext(wishlistsContext)
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

    function HandleMoveToWishlists(item) {
        wishlistDispatch({
            type: 'add-from-cart',
            newItem: item
        })
        cartDispatch({
            type: 'remove-from-cart',
            removeId: item.dishArr.idMeal
        })
    }

    function HandleOrderNow(Items) {
        orderDispatch({
            type: 'cart-order',
            payload: Items
        })
        navigate('/checkout')
    }

    return (
        <div className='Cart'>

            <div className="tiles">
                {cartState.map((item, index) => {
                    return (
                        item &&
                        <div className="tile" key={index}>

                            <div className="imgdiv">
                                <img src={item.dishImg} alt="itemImg" />
                            </div>

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
                                removeId: item.dishArr.idMeal
                            })}>
                                <li><i className="fa-solid fa-trash"></i></li>
                            </div>

                            <div className="move-to-wishlist" onClick={() => HandleMoveToWishlists(item)}>
                                <p>Move to wishlist</p>
                                <i className="fa-solid fa-heart"></i>
                            </div>

                        </div>
                    )
                })}
            </div>

            {totalValue !== 0 ?
                <div className="overview">
                    <div className="breakdown">

                        <table>
                            <tbody>
                                <tr>
                                    <th>Cart value</th>
                                    <td>: {totalValue}</td>
                                </tr>
                                <tr>
                                    <th>Discount</th>
                                    <td>: {totalValue !== 0 ? 300 : 0}</td>
                                </tr>
                                <tr>
                                    <th>Coupon Code</th>
                                    <td>: {totalValue !== 0 ? 'GET200' : 'Not-available'}</td>
                                </tr>
                                <tr>
                                    <th>Coupon Value</th>
                                    <td>: {totalValue !== 0 ? 200 : 0}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="line"></div>

                        <div className="totalline">
                            <h3>Total</h3>
                            <h3>: {totalValue ? totalValue - (300 + 200) : 0}</h3>
                        </div>

                    </div>
                    <button onClick={() => HandleOrderNow(cartState)}> Order Now <i className="fa-solid fa-bag-shopping"></i></button>
                </div>
                :
                <div className="emptyCart">
                    <h2>Oops... Cart is empty</h2>
                    <button onClick={() => navigate('/')}>Add Items <i className="fa-solid fa-cart-shopping"></i> </button>
                </div>
            }

        </div>
    )
}

export default Checkout
