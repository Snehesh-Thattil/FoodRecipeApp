import axios from 'axios'
import React, { useEffect, useContext } from 'react'
import './Menu.css'
import Landing from '../Landing/Landing'
import SpecialDishes from '../SpecialDishes/SpecialDishes'
import { MealsData } from '../Context'

function Menu() {
    const { setMealsData } = useContext(MealsData)

    useEffect(() => {
        getMenu()
    }, [])

    function getMenu() {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
            .then((res) => {
                setMealsData(res.data.meals)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div className="Menu">
            <Landing />
            <SpecialDishes />
        </div>
    )
}

export default Menu
