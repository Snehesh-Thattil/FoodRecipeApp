import React, { useContext, useEffect, useMemo } from 'react';
import './Cart.css'
import { useNavigate } from 'react-router-dom';
import { wishlistsContext } from '../../Contexts/WishlistsContext';
import { cartContext } from '../../Contexts/CartContext';
import { cartToggleContext } from '../../Contexts/OtherContexts';
import { orderContext } from '../../Contexts/OrderContext';
import CartItem from './InnerComponents/CartItem';
import CartOverview from './InnerComponents/CartOverview';
import EmptyCart from './InnerComponents/EmptyCart';

function Cart() {
    const { cartState, cartDispatch } = useContext(cartContext);
    const { orderDispatch } = useContext(orderContext);
    const { wishlistDispatch } = useContext(wishlistsContext);
    const { setPanelCartToggle } = useContext(cartToggleContext);
    const navigate = useNavigate();

    // Calculate total cart value
    const totalValue = useMemo(() => {
        return cartState.reduce((acc, item) => {
            return acc + (item.dishPrice * item.dishQuantity);
        }, 0);
    }, [cartState]);

    // Close panelCart when emptying
    useEffect(() => {
        if (cartState.length === 0) {
            setPanelCartToggle(false);
        }
    }, [cartState, setPanelCartToggle]);

    // Move item to wishlists from cart
    const handleMoveToWishlists = (item) => {
        wishlistDispatch({
            type: 'add-from-cart',
            newItem: item
        });
        cartDispatch({
            type: 'remove-from-cart',
            removeId: item.dishArr.idMeal
        });
    };

    // Order products in the cart
    const handlePlaceOrder = (items) => {
        orderDispatch({
            type: 'cart-order',
            payload: items
        });
        navigate('/checkout');
    };

    // Remove item from the cart
    const handleRemoveItem = (itemId) => {
        cartDispatch({
            type: 'remove-from-cart',
            removeId: itemId
        });
    };

    // Rendering
    return (
        <div className="Cart">
            <div className="tiles">
                {cartState.slice().reverse().map((item, index) => (
                    item &&
                    <CartItem
                        key={item.dishArr.idMeal || index}
                        item={item}
                        onRemove={handleRemoveItem}
                        onMoveToWishlist={handleMoveToWishlists} />
                ))}
            </div>

            {totalValue !== 0 ?
                <CartOverview
                    totalValue={totalValue}
                    onPlaceOrder={handlePlaceOrder}
                    cartItems={cartState} />
                :
                <EmptyCart />
            }
        </div>
    );
}

export default Cart;