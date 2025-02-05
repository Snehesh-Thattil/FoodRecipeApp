import React from 'react'
import { useNavigate } from 'react-router-dom'

function EmptyWishlist() {
    const navigate = useNavigate()
    return (
        <div className="emptyWishlist">
            <h2>Oops... wishlist is empty</h2>
            <button onClick={() => navigate('/')}>Add Items <i className="fa-solid fa-heart"></i> </button>
        </div>
    )
}

export default EmptyWishlist
