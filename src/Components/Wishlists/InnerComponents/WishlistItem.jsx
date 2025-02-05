import React from 'react'

function WishlistItem({ item, onMoveToCart, onOrderNow, onRemove }) {
    return (
        <div className="tile">

            <div className="overview">
                <img src={item.dishImg} alt="itemImg" />
                <h4>{item.dishName}</h4>
            </div>
            <div className="details">
                <div className="dishtags">
                    <button>{item.dishArr.strCategory}</button>
                    <button>{item.dishArr.strArea}</button>
                </div>
                <h4>Price : {item.dishPrice}</h4>
                <div className="checkouts">
                    <button onClick={() => onMoveToCart(item)}>Add to Cart <i className="fa-solid fa-cart-shopping"></i></button>
                    <button onClick={() => onOrderNow(item)}> Order Now <i className="fa-solid fa-bag-shopping"></i></button>
                </div>
            </div>

            <div className="remove" onClick={() => onRemove(item)}>
                <li><i className="fa-solid fa-trash"></i></li>
            </div>
        </div>
    )
}

export default WishlistItem
