import React from 'react'

function CartOverview({ totalValue, onPlaceOrder, cartItems }) {
    const discount = totalValue !== 0 ? 300 : 0;
    const couponCode = totalValue !== 0 ? 'GET200' : 'Not-available';
    const couponValue = totalValue !== 0 ? 200 : 0;
    const finalTotal = totalValue ? totalValue - (discount + couponValue) : 0;

    return (
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
                            <td>: {discount}</td>
                        </tr>
                        <tr>
                            <th>Coupon Code</th>
                            <td>: {couponCode}</td>
                        </tr>
                        <tr>
                            <th>Coupon Value</th>
                            <td>: {couponValue}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="line"></div>

                <div className="total-div">
                    <h3>Total</h3>
                    <h3>: {finalTotal}</h3>
                </div>
            </div>
            <button onClick={() => onPlaceOrder(cartItems)}>
                Order Now <i className="fa-solid fa-bag-shopping"></i>
            </button>
        </div>
    );
}

export default CartOverview
