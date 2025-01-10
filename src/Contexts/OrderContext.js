import { createContext, useReducer } from "react";

export const orderContext = createContext(null)

export function OrderContextWrapper({ children }) {
    let orderItems = [];

    const [orderState, orderDispatch] = useReducer((orderState, action) => {
        switch (action.type) {
            case 'direct-order':
                let Item = {
                    dishName: action.payload.strMeal,
                    dishImg: action.payload.strMealThumb,
                    dishQuantity: 1,
                    dishPrice: 799, // API didn't provide price
                    dishArr: action.payload
                }
                return [Item]
            case 'cart-order':
                return orderState
            default:
                console.log('default')
                return orderState
        }
    }, orderItems)

    console.log(orderState)

    return (
        <orderContext.Provider value={{ orderState, orderDispatch }}>
            {children}
        </orderContext.Provider>
    )
}