import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react'
import './Menu.css'
import Landing from '../Landing/Landing'
import SpecialDishes from '../SpecialDishes/SpecialDishes'
import Categories from '../Categories/Categories'
import { CategoriesContext, MealsContext } from '../Context'

function Menu() {
    const { setMealsData } = useContext(MealsContext)
    const { setCategoriesData } = useContext(CategoriesContext)

    const [menuLoaded, setMenuLoaded] = useState(false)
    const [categoryLoaded, setCategoryLoaded] = useState(false)

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
    }, [])

    return (
        <div className="Menu">
            <Landing />
            {menuLoaded ? <SpecialDishes /> : <p>Loading...</p>}
            {categoryLoaded ? <Categories /> : <p>Loading...</p>}
        </div>
    )
}

export default Menu
