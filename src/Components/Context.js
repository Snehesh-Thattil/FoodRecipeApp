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
    const [categoriesData, setCategoriesData] = useState()
    return (
        <CategoriesContext.Provider value={{ categoriesData, setCategoriesData }}>
            {children}
        </CategoriesContext.Provider>
    )
}