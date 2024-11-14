import React, { useContext, useState } from 'react'
import './Categories.css'
import { CategoriesContext, DefCategoryContext, MealsContext } from '../Context'

function Categories() {
    const [categoryDishes, setCategoryDishes] = useState([])
    const [activeCategory, setActiveCategory] = useState('Vegetarian')

    const { categoriesData } = useContext(CategoriesContext)
    const { mealsData } = useContext(MealsContext)
    const { defCategoryData, setDefCategoryData } = useContext(DefCategoryContext)

    //Default Category Items
    let DefCategoryItems = defCategoryData.map((item, index) => {
        return (
            <li key={index}>
                <img src={item.strMealThumb} alt="cousine-img" />
                <h5>{item.strMeal}</h5>
            </li>
        )
    })

    // Buttons of Categories
    let categoryLists = categoriesData.map((item, index) => {
        return (
            <li className={activeCategory === item.strCategory ? 'active' : ''} key={index}
                onClick={() => CategoryViewHandle(item.strCategory)}> {item.strCategory} </li>
        )
    })

    // Filtering Categories
    function CategoryViewHandle(Category) {
        setActiveCategory(Category)
        setDefCategoryData([])

        let Dishes = mealsData.filter((item) => {
            return item.strCategory === Category
        }).map((item, index) => {
            return (
                <li key={index}>
                    <img src={item.strMealThumb} alt="cousine-img" />
                    <h5>{item.strMeal}</h5>
                </li>
            )
        })

        setCategoryDishes(Dishes)
    }

    // Rendering
    return (
        <section className='categories'>
            <div className="categories_content">
                <h3>Categories</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem distinctio illum aspernatur, vero autem tempora, ipsum labore explicabo eum, deserunt amet. Dolorem soluta quod totam numquam perspiciatis.</p>
            </div>
            <div className="categories_list">
                <ul>
                    {categoryLists}
                </ul>
            </div>
            <div className="categories_view">
                <ul>
                    {categoryDishes.length !== 0 ? categoryDishes :
                        DefCategoryItems.length !== 0 ? DefCategoryItems :
                            <div className='categories_view_empty'>
                                <h2>No Dishes Found</h2>
                                <p> <strong>Try Another Category</strong></p>
                            </div>
                    }
                </ul>
            </div>
        </section>
    )
}

export default Categories
