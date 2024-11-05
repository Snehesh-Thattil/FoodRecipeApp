import axios from 'axios'
import React, { useEffect, useContext } from 'react'
import './Menu.css'
import Landing from '../Landing/Landing'
import SpecialDishes from '../SpecialDishes/SpecialDishes'
import Categories from '../Categories/Categories'
import { CategoriesContext, MealsContext } from '../Context'

function Menu() {
    const { setMealsData } = useContext(MealsContext)
    const { setCategoriesData } = useContext(CategoriesContext)

    function getMenu() {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
            .then((res) => {
                setMealsData(res.data.meals)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    function getCategories() {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => {
                setCategoriesData(res.data.categories)
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
            <SpecialDishes />
            <Categories />
        </div>
    )
}

export default Menu
