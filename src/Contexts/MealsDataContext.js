import { createContext, useState, useEffect } from "react";
import Loader from "../Components/Menu/Loader";
import axios from "axios";

// Context
export const MealsDataContext = createContext(null)

export function MealDataContextWrapper({ children }) {
    const [mealsData, setMealsData] = useState()
    const [specialDishesLoaded, setSpecialDishesLoaded] = useState(false)

    // Fetching Special Dishes with API
    useEffect(() => {
        function getMenu() {
            axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
                .then((res) => {
                    setMealsData(res.data.meals)
                    setSpecialDishesLoaded(true)
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }
        getMenu()
    }, [setSpecialDishesLoaded, setMealsData])

    return (
        <MealsDataContext.Provider value={{ mealsData, setMealsData }}>
            {specialDishesLoaded ? children : <Loader />}
        </MealsDataContext.Provider>
    )
}