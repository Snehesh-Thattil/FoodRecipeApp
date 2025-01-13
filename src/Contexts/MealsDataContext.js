import { createContext, useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";
import axios from "axios";

// Context
export const MealsDataContext = createContext(null)

export function MealDataContextWrapper({ children }) {
    const [mealsData, setMealsData] = useState()
    const [dishesLoaded, setDishesLoaded] = useState(false)

    // Fetching Dishes with API
    useEffect(() => {
        async function getMealData() {
            try {
                const [res1, res2, res3, res4] = await Promise.all([ // API doesn't allow to access all meals together
                    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=f'),
                    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c'),
                    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b'),
                    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
                ])
                setMealsData([...res1.data.meals, ...res2.data.meals, ...res3.data.meals, ...res4.data.meals])
                setDishesLoaded(true)
            }
            catch (err) {
                console.log(err.message)
            }
        }
        getMealData()

    }, [setDishesLoaded, setMealsData])

    return (
        <MealsDataContext.Provider value={{ mealsData, setMealsData }}>
            {dishesLoaded ? children : <Loader />}
        </MealsDataContext.Provider>
    )
}