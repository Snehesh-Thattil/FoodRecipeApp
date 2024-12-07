import { createContext, useReducer } from "react";

export const wishlistsContext = createContext(null)

export function WishlistsContextWrapper({ children }) {
    const wishlistItems = [];

    const [wishlistsState, wishlistDispatch] = useReducer((wishlistsState, action) => {
        console.log(action.payload)
        switch (action.type) {
            case 'add-to-wishlists':

                let newItem = {
                    dishName: action.payload.strMeal,
                    dishImg: action.payload.strMealThumb,
                    dishPrice: 799, // API didn't provide price
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

    console.log('WISHLIST STATE:', wishlistsState)

    return (
        <wishlistsContext.Provider value={{ wishlistsState, wishlistDispatch }}>
            {children}
        </wishlistsContext.Provider>
    )
}