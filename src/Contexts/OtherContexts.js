import { createContext, useState } from "react";

// CardItem View Context
export const ItemViewContext = createContext(null)

export function ItemViewContextWrapper({ children }) {
    const [itemDetails, setItemDetails] = useState()
    return (
        <ItemViewContext.Provider value={{ itemDetails, setItemDetails }}>
            {children}
        </ItemViewContext.Provider>
    )
}

// MealId context
export const MealIdContext = createContext(null)

export function MealIdContextWrapper({ children }) {
    const [mealId, setMealId] = useState()
    return (
        <MealIdContext.Provider value={{ mealId, setMealId }}>
            {children}
        </MealIdContext.Provider>
    )
}

// MealId Details Context
export const MealIdDetailsContext = createContext(null)

export function MealIdDetailsContextWrapper({ children }) {
    const [idMealDetails, setIdMealDetails] = useState()
    return (
        <MealIdDetailsContext.Provider value={{ idMealDetails, setIdMealDetails }}>
            {children}
        </MealIdDetailsContext.Provider>
    )
}

// Cart Toggle Context
export const cartToggleContext = createContext(null)

export function CartToggleContextWrapper({ children }) {
    const [panelCartToggle, setPanelCartToggle] = useState(false)
    return (
        <cartToggleContext.Provider value={{ panelCartToggle, setPanelCartToggle }}>
            {children}
        </cartToggleContext.Provider>
    )
}

// PopUp Context
export const PopUpContext = createContext(null)

export function PopUpContextWrapper({ children }) {
    const [popUp, setPopUp] = useState(false)

    return (
        <PopUpContext.Provider value={{ popUp, setPopUp }}>
            {children}
        </PopUpContext.Provider>
    )
}