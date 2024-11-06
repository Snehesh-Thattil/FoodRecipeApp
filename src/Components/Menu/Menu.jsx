import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react'
import './Menu.css'
import Landing from '../Landing/Landing'
import SpecialDishes from '../SpecialDishes/SpecialDishes'
import Categories from '../Categories/Categories'
import { CategoriesContext, DefCategoryContext, MealsContext } from '../Context'
import Loader from './Loader'

function Menu() {
    const { setMealsData } = useContext(MealsContext)
    const { setCategoriesData } = useContext(CategoriesContext)
    const { setDefCategoryData } = useContext(DefCategoryContext)

    const [specialDishesLoaded, setSpecialDishesLoaded] = useState(false)
    const [categoryLoaded, setCategoryLoaded] = useState(false)
    const [defCategoryLoaded, setDefCategoryLoaded] = useState(false)

    // Fetching Special Dishes with API
    function getMenu() {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
            .then((res) => {
                setMealsData(res.data.meals)
                setSpecialDishesLoaded(true)
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

    // UseEffect
    useEffect(() => {
        getMenu()
        getCategories()
        getDefaultCategory()
    }, [])

    // Rendering
    return (
        <div className="Menu">
            <Landing />
            {specialDishesLoaded ? <SpecialDishes /> : <Loader />}
            {categoryLoaded && defCategoryLoaded ? <Categories /> : null}
        </div>
    )
}

export default Menu
