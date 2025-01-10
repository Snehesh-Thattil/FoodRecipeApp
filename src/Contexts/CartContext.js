import { createContext, useReducer } from "react";

export const cartContext = createContext(null)

export function CartContextWrapper({ children }) {
    let cartItems = [];

    const [cartState, cartDispatch] = useReducer((cartState, action) => {
        switch (action.type) {
            case 'add-to-cart':
                let existingItemindex = cartState.findIndex((item) => item.dishArr.idMeal === action.payload.idMeal)

                if (existingItemindex !== -1) {
                    // qty update for already existing item
                    return cartState.map((Item, Index) =>
                        Index === existingItemindex
                            ? { ...Item, dishQuantity: Item.dishQuantity + 1 }
                            : Item
                    )
                } else {
                    // Adding new item
                    let newItem = {
                        dishName: action.payload.strMeal,
                        dishImg: action.payload.strMealThumb,
                        dishQuantity: 1,
                        dishPrice: 799, // API didn't provide price
                        dishArr: action.payload
                    }
                    return [...cartState, newItem]
                }

            case 'remove-from-cart':
                return cartState.filter((Item) => Item.dishArr.idMeal !== action.removeId)

            case 'remove-from-checkout':
                let filteredCart = cartState.filter((cartItem) => {
                    return !action.toRemove.some((orderedItem) => orderedItem.dishArr.idMeal === cartItem.dishArr.idMeal)
                })
                return filteredCart;

            case 'add-to-cart-from-wishlists':
                let isExists = cartState.some((Item) => Item.dishArr.idMeal === action.newItem.dishArr.idMeal)

                if (isExists) {
                    return cartState
                } else {
                    return [...cartState, action.newItem]
                }

            default:
                return cartState
        }
    }, cartItems)

    return (
        <cartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </cartContext.Provider>
    )
}