import { createContext, useReducer } from "react";

export const cartContext = createContext(null)

export function CartContextWrapper({ children }) {
    let cartItems = [];

    const [cartState, dispatch] = useReducer((cartState, action) => {
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
                        dishQuantity: 0, // why not 1 = reactStrictMode renders twice first
                        dishArr: action.payload
                    }
                    cartState.push(newItem)
                    return cartState
                }
            default:
                return cartState
        }
    }, cartItems)

    return (
        <cartContext.Provider value={{ cartState, dispatch }}>
            {children}
        </cartContext.Provider>
    )
}