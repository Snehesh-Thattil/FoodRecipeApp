import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react'
import './Menu.css'
import Landing from '../Landing/Landing'
import SpecialDishes from '../SpecialDishes/SpecialDishes'
import Categories from '../Categories/Categories'
import { CategoriesContext, DefCategoryContext, MealIdContext, MealIdDetailsContext } from '../Contexts'
import Header from './Header'

function Menu() {
    const { setAllCategoriesList } = useContext(CategoriesContext)
    const { setDefCategoryData } = useContext(DefCategoryContext)
    const { mealId } = useContext(MealIdContext)
    const { setIdMealDetails } = useContext(MealIdDetailsContext)

    const [categoryLoaded, setCategoryLoaded] = useState(false)
    const [defCategoryLoaded, setDefCategoryLoaded] = useState(false)

    useEffect(() => {

        // Fetching Meal Categories with API
        function getCategories() {
            axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
                .then((res) => {
                    setAllCategoriesList(res.data.categories)
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

        getCategories()
        getDefaultCategory()

    }, [setAllCategoriesList, setDefCategoryData])

    // Fetching Dish Id Details with API
    useEffect(() => {
        function getDishDetails(mealId) {
            axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
                .then((res) => {
                    setIdMealDetails(res.data.meals[0])
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }
        getDishDetails(mealId)
    }, [mealId, setIdMealDetails])

    // Rendering
    return (
        <div className="Menu">
            <Header />
            <Landing />
            <SpecialDishes />
            {categoryLoaded && defCategoryLoaded ? <Categories /> : null}
        </div>
    )
}

export default Menu
