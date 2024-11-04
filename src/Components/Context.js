import { createContext, useState } from "react";

// Meals Data Context
export const MealsData = createContext(null)
export function MealsDataContext({ children }) {
    const [mealsData, setMealsData] = useState()
    return (
        <MealsData.Provider value={{ mealsData, setMealsData }}>
            {children}
        </MealsData.Provider>
    )
}
