import { createContext, useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";
import axios from "axios";

// Context
export const MealsDataContext = createContext(null)

export function MealDataContextWrapper({ children }) {
    const [mealsData, setMealsData] = useState()
    const [specialDishesLoaded, setSpecialDishesLoaded] = useState(false)

    // Fetching Dishes with API
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
            .then((res) => {
                setMealsData(res.data.meals)
                setSpecialDishesLoaded(true)
            })
            .then(() => {
                axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
                    .then((res) => {
                        setMealsData((prevMeals) => [...prevMeals, ...res.data.meals])
                    })
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [setSpecialDishesLoaded, setMealsData])

    return (
        <MealsDataContext.Provider value={{ mealsData, setMealsData }}>
            {specialDishesLoaded ? children : <Loader />}
        </MealsDataContext.Provider>
    )
}