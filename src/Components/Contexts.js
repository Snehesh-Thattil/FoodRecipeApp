import { createContext, useState } from "react";

// Categories Data Context
export const CategoriesContext = createContext(null)

export function CategoriesContextWrapper({ children }) {
    const [allCategoriesList, setAllCategoriesList] = useState()
    return (
        <CategoriesContext.Provider value={{ allCategoriesList, setAllCategoriesList }}>
            {children}
        </CategoriesContext.Provider>
    )
}

// Default Category Context
export const DefCategoryContext = createContext(null)

export function DefCategoryContextWrapper({ children }) {
    const [defCategoryData, setDefCategoryData] = useState()
    return (
        <DefCategoryContext.Provider value={{ defCategoryData, setDefCategoryData }}>
            {children}
        </DefCategoryContext.Provider>
    )
}

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