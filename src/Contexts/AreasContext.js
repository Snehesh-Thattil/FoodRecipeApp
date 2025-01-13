import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AreasContext = createContext(null)

export function AreasContextWrapper({ children }) {
    const [allAreasList, setAllAreasList] = useState()
    const [areasLoaded, setAreasLoaded] = useState(false)

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
            .then((res) => {
                setAllAreasList(res.data.meals)
                setAreasLoaded(true)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [setAllAreasList])

    return (
        <AreasContext.Provider value={{ allAreasList, setAllAreasList }}>
            {areasLoaded ? children : null}
        </AreasContext.Provider>
    )
}