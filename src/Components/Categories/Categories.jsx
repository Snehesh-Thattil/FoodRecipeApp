import React, { useContext, useState } from 'react'
import './Categories.css'
import { CategoriesContext, MealsContext } from '../Context'

function Categories() {
    const [categoryDishes, setCategoryDishes] = useState([])

    const { categoriesData } = useContext(CategoriesContext)
    const { mealsData } = useContext(MealsContext)

    // Categories List
    let categoryLists = categoriesData.map((item, index) => {
        return (
            <li key={index} onClick={(e) => { CategoryViewHandle(e, item.strCategory) }}> {item.strCategory} </li>
        )
    })

    // Filtering Category Dishes
    function CategoryViewHandle(e, Category) {
        e.preventDefault()

        let Dishes = mealsData.filter((item) => {
            return item.strCategory === Category
        }).map((item, index) => {
            return (
                <li key={index}>
                    <img src={item.strMealThumb} alt="cousine-img" />
                    <h4>{item.strMeal}</h4>
                </li>
            )
        })

        setCategoryDishes(Dishes)
    }

    // Rendering
    return (
        <section className='categories'>
            <div className="categories_content">
                <h3>Our Categories</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem distinctio illum aspernatur, vero autem tempora, ipsum labore explicabo eum, deserunt amet. Dolorem soluta quod totam numquam perspiciatis.</p>
            </div>
            <div className="categories_view">
                <ul>
                    {categoryDishes}
                </ul>
            </div>
            <div className="categories_list">
                <ul>
                    {categoryLists}
                </ul>
            </div>
        </section>
    )
}

export default Categories
