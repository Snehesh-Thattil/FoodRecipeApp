import React from 'react'
import { useNavigate } from 'react-router-dom'

function EmptyCart() {
    const navigate = useNavigate()
    return (
        <div className="emptyCart">
            <h2>Oops... Cart is empty</h2>
            <button onClick={() => navigate('/')}>
                Add Items <i className="fa-solid fa-cart-shopping"></i>
            </button>
        </div>)
};

export default EmptyCart
