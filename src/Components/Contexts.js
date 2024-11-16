import { createContext, useState } from "react";

// Meals Data Context
export const MealsContext = createContext(null)

export function MealsContextWrapper({ children }) {
    const [mealsData, setMealsData] = useState()
    return (
        <MealsContext.Provider value={{ mealsData, setMealsData }}>
            {children}
        </MealsContext.Provider>
    )
}


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