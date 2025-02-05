import React, { useContext } from 'react'
import './Wishlists.css'
import { wishlistsContext } from '../../Contexts/WishlistsContext'
import { useNavigate } from 'react-router-dom'
import { cartContext } from '../../Contexts/CartContext'
import { orderContext } from '../../Contexts/OrderContext'
import WishlistItem from './InnerComponents/WishlistItem'
import EmptyWishlist from './InnerComponents/EmptyWishlist'

function Wishlists() {
    const { wishlistsState, wishlistDispatch } = useContext(wishlistsContext)
    const { orderDispatch } = useContext(orderContext)
    const { cartDispatch } = useContext(cartContext)
    const navigate = useNavigate()

    // Move item to cart from wishlists 
    function handleMoveToCart(item) {
        cartDispatch({
            type: 'add-to-cart-from-wishlists',
            newItem: item,
        })

        wishlistDispatch({
            type: 'remove-from-wishlists',
            removeId: item.dishArr.idMeal
        })
    }

    // Order individual product directly
    function handleOrderNow(item) {
        orderDispatch({
            type: 'direct-order',
            payload: item.dishArr
        })
        navigate('/checkout')
    }

    // Remove item from wishlists
    function handleRemove(item) {
        wishlistDispatch({
            type: 'remove-from-wishlists',
            removeId: item.dishArr.idMeal
        })
    }

    // Rendering
    return (
        <div className='Wishlists'>
            <div className="tiles">
                {wishlistsState.slice().reverse().map((item, index) => {
                    return (
                        item &&
                        <WishlistItem
                            key={item.dishArr.idMeal || index}
                            item={item}
                            onRemove={handleRemove}
                            onMoveToCart={handleMoveToCart}
                            onOrderNow={handleOrderNow} />
                    )
                })}
            </div>

            {wishlistsState.length === 0
                &&
                <EmptyWishlist />}
        </div>
    )
}

export default Wishlists
