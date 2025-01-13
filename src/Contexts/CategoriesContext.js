import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const CategoriesContext = createContext(null)

export function CategoriesContextWrapper({ children }) {
    const [allCategoriesList, setAllCategoriesList] = useState()
    const [categoryLoaded, setCategoryLoaded] = useState(false)

    useEffect(() => {
        // Fetching Meal Categories with API
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => {
                setAllCategoriesList(res.data.categories)
                setCategoryLoaded(true)
            })
            .catch((err) => {
                console.log(err.message)
            })

    }, [setAllCategoriesList])

    return (
        <CategoriesContext.Provider value={{ allCategoriesList, setAllCategoriesList }}>
            {categoryLoaded ? children : null}
        </CategoriesContext.Provider>
    )
}