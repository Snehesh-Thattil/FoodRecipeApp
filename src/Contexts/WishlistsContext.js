import { createContext, useReducer } from "react";

export const wishlistsContext = createContext(null)

export function WishlistsContextWrapper({ children }) {
    const wishlistItems = [];

    const [wishlistsState, wishlistDispatch] = useReducer((wishlistsState, action) => {
        switch (action.type) {
            case 'add-to-wishlists':

                let newItem = {
                    dishName: action.payload.strMeal,
                    dishImg: action.payload.strMealThumb,
                    dishPrice: 799, // API didn't provide price
                    dishQuantity: 1,
                    dishArr: action.payload
                }

                if (wishlistsState.lenth === 0 || !wishlistsState.some((item) => item.dishArr.idMeal === action.payload.idMeal)) {
                    return [...wishlistsState, newItem]
                }
                return wishlistsState

            case 'remove-from-wishlists':
                return wishlistsState.filter((item) => item.dishArr.idMeal !== action.removeId)

            default:
                return wishlistsState
        }
    }, wishlistItems)

    return (
        <wishlistsContext.Provider value={{ wishlistsState, wishlistDispatch }}>
            {children}
        </wishlistsContext.Provider>
    )
}