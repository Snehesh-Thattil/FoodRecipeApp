import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react'
import './Menu.css'
import Landing from '../Landing/Landing'
import SpecialDishes from '../SpecialDishes/SpecialDishes'
import Categories from '../Categories/Categories'
import { CategoriesContext, DefCategoryContext, MealsContext } from '../Contexts'
import Loader from './Loader'
import Header from './Header'

function Menu() {
    const { setMealsData } = useContext(MealsContext)
    const { setAllCategoriesList } = useContext(CategoriesContext)
    const { setDefCategoryData } = useContext(DefCategoryContext)

    const [specialDishesLoaded, setSpecialDishesLoaded] = useState(false)
    const [categoryLoaded, setCategoryLoaded] = useState(false)
    const [defCategoryLoaded, setDefCategoryLoaded] = useState(false)

    // UseEffect
    useEffect(() => {

        // Fetching Special Dishes with API
        function getMenu() {
            axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
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

        getMenu()
        getCategories()
        getDefaultCategory()
    }, [setAllCategoriesList, setMealsData, setDefCategoryData])

    // Rendering
    return (
        <div className="Menu">
            <Header />
            <Landing />
            {specialDishesLoaded ? <SpecialDishes /> : <Loader />}
            {categoryLoaded && defCategoryLoaded ? <Categories /> : null}
        </div>
    )
}

export default Menu
