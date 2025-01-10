import React, { useState, useContext, useEffect } from 'react'
import './Checkout.css'
import { orderContext } from '../../Contexts/OrderContext'

function Checkout() {
    const { orderState } = useContext(orderContext)
    const [totalValue, setTotalValue] = useState(0)

    useEffect(() => {
        let totalValue = orderState.reduce((acc, item) => {
            return acc + (item.dishPrice * item.dishQuantity)
        }, 0)
        setTotalValue(totalValue)
    }, [orderState])

    return (
        <div className='Checkout'>
            <div className="contents">
                <h4>Delivery Address</h4>
                <div className="address">
                    <form action="">
                        <input type="text" placeholder='Address line 1' />
                        <input type="text" placeholder='Address line 2' />
                        <div className='contacts'>
                            <input type="tel" maxLength={10} placeholder='Mobile' />
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className='small'>
                            <input type="number" placeholder='Pincode' className='no-arrows' />
                            <input type="text" placeholder='District' />
                            <input type="text" placeholder='State' />
                        </div>
                        <div className="radios">
                            <label htmlFor="">Adress Type :</label>
                            <div className="radio">
                                <input type="radio" id='office' name='adress-type' />
                                <label htmlFor="office">office</label>
                            </div>
                            <div className="radio">
                                <input type="radio" id='work' name='adress-type' />
                                <label htmlFor="work">work</label>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="tiles">
                    <h4>Summary of Items</h4>
                    {orderState.map((item, index) => {
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
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="cartvalue">
                <h4>Cart Summary</h4>
                <div className="overview">
                    <div className="breakdown">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Cart total</th>
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
                            </tbody>
                        </table>

                        <div className="line"></div>

                        <div className="totalline">
                            <h3>Total</h3>
                            <h3>: {totalValue ? totalValue - (299 + 199) : 0}</h3>
                        </div>
                    </div>
                    <button onClick={() => alert('Order Placed Successfully')}> Place Order <i className="fa-solid fa-bag-shopping"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Checkout
