import { createContext, useState } from "react";

export const cartContext = createContext(null)

export function CartContextWrapper({ children }) {
    const [cartItems, setCartItems] = useState([])

    return (
        <cartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </cartContext.Provider>
    )
}