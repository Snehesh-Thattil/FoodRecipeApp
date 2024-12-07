import React, { useContext } from 'react'
import './Wishlists.css'
import { wishlistsContext } from '../../Contexts/WishlistsContext'
import { useNavigate } from 'react-router-dom'

function Wishlists() {
    const { wishlistsState, wishlistDispatch } = useContext(wishlistsContext)
    const navigate = useNavigate()

    return (
        <div className='Wishlists'>
            <div className="tiles">
                {wishlistsState.map((item, index) => {
                    return (
                        item &&
                        <div className="tile" key={index}>

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
                                    <button>Add to Cart</button>
                                    <button>Order Now</button>
                                </div>
                            </div>

                            <div className="remove" onClick={() => wishlistDispatch({
                                type: 'remove-from-wishlists',
                                payload: wishlistsState,
                                removeId: item.dishArr.idMeal
                            })}>
                                <li><i className="fa-solid fa-trash"></i></li>
                            </div>
                        </div>
                    )
                })}
            </div>
            {wishlistsState.length === 0
                &&
                <div className="emptyWishlist">
                    <h2>Oops... wishlist is empty</h2>
                    <button onClick={() => navigate('/')}>Add Items</button>
                </div>}
        </div>
    )
}

export default Wishlists
