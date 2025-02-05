import React from 'react'

function CartItem({ item, onRemove, onMoveToWishlist }) {
    return (
        <div className="tile">
            <div className="imgdiv">
                <img src={item.dishImg} alt={item.dishName} />
            </div>

            <div className="details">
                <h2>{item.dishName}</h2>
                <div className="dishtags">
                    <button>{item.dishArr.strCategory}</button>
                    <button>{item.dishArr.strArea}</button>
                </div>
                <div className="ordervalues">
                    <h4>Price: {item.dishPrice}</h4>
                    <h5>Qty: {item.dishQuantity}</h5>
                </div>
                <h2>{item.dishPrice * item.dishQuantity}</h2>
            </div>

            <div className="remove" onClick={() => onRemove(item.dishArr.idMeal)}>
                <li><i className="fa-solid fa-trash"></i></li>
            </div>

            <div className="move-to-wishlist" onClick={() => onMoveToWishlist(item)}>
                <p>Move to wishlist</p>
                <i className="fa-solid fa-heart"></i>
            </div>
        </div>
    )
}

export default CartItem
