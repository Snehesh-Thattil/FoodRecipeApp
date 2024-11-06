import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react'
import './Menu.css'
import Landing from '../Landing/Landing'
import SpecialDishes from '../SpecialDishes/SpecialDishes'
import Categories from '../Categories/Categories'
import { CategoriesContext, MealsContext } from '../Context'
import Loader from './Loader'

function Menu() {
    const { setMealsData } = useContext(MealsContext)
    const { setCategoriesData } = useContext(CategoriesContext)

    const [menuLoaded, setMenuLoaded] = useState(false)
    const [categoryLoaded, setCategoryLoaded] = useState(false)

    // Fetching All Meals with API
    function getMenu() {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
            .then((res) => {
                setMealsData(res.data.meals)
                setMenuLoaded(true)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    // Fetching Meal Categories with API
    function getCategories() {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => {
                setCategoriesData(res.data.categories)
                setCategoryLoaded(true)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getMenu()
        getCategories()
        console.log('Rendering')
    }, [])

    // Rendering
    return (
        <div className="Menu">
            <Landing />
            {menuLoaded ? <SpecialDishes /> : <Loader />}
            {categoryLoaded ? <Categories /> : null}
        </div>
    )
}

export default Menu
