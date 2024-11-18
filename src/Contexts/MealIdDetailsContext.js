import { createContext, useContext, useEffect, useState } from "react";
import { MealIdContext } from './OtherContexts'
import axios from "axios";

export const MealIdDetailsContext = createContext()

export function MealIdDetailsContextWrapper({ children }) {
    const { mealId } = useContext(MealIdContext)
    const [idMealDetails, setIdMealDetails] = useState()

    // Fetching Dish Id Details with API
    useEffect(() => {
        function getDishDetails(mealId) {
            axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
                .then((res) => {
                    setIdMealDetails(res.data.meals[0])
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }
        getDishDetails(mealId)
    }, [mealId, setIdMealDetails])

    return (
        <MealIdDetailsContext.Provider value={{ idMealDetails, setIdMealDetails }}>
            {children}
        </MealIdDetailsContext.Provider>
    )
}