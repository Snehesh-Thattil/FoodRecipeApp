import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DefCategoryContext = createContext(null)

export function DefCategoryContextWrapper({ children }) {
    const [defCategoryData, setDefCategoryData] = useState()
    const [defCategoryLoaded, setDefCategoryLoaded] = useState(false)

    useEffect(() => {
        // Fetching Default Category with API
        function getDefaultCategory() {
            axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian')
                .then((res) => {
                    setDefCategoryData(res.data.meals)
                    setDefCategoryLoaded(true)
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }

        getDefaultCategory()
    }, [setDefCategoryData, setDefCategoryLoaded])

    return (
        <DefCategoryContext.Provider value={{ defCategoryData, setDefCategoryData }}>
            {defCategoryLoaded ? children : null}
        </DefCategoryContext.Provider>
    )
}