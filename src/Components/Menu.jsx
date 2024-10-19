import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Menu() {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        getMenu()
    }, [])

    function getMenu() {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
            .then((res) => {
                setMeals(res.data.meals)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    // console.log('The Menus Are : ||', meals)

    return (
        <div className='Menu'>
            {meals.map((meal) => {
                // console.log(meal)
                return (
                    <div key={meal.idMeal} className="meal">
                        <img className='meal_img' src={meal.strMealThumb} alt="meal_error" />
                        <h4>{meal.strMeal}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu
