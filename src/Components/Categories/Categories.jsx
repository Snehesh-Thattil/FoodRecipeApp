import React, { useContext, useEffect, useState } from 'react'
import './Categories.css'
import { CategoriesContext, DefCategoryContext, MealsContext } from '../Contexts'
import Pagination from './Pagination'
import ItemCards from '../ItemCards'

function Categories() {
    // From Contexts.js
    const { allCategoriesList } = useContext(CategoriesContext)
    const { mealsData } = useContext(MealsContext)
    const { defCategoryData, setDefCategoryData } = useContext(DefCategoryContext)

    const [categoryDishes, setCategoryDishes] = useState([])
    const [activeCategory, setActiveCategory] = useState('Vegetarian')

    // Pagination Codes
    const [currentPage, setCurrentPage] = useState(1)
    const [numberOfItems, setNumberOfItems] = useState(10)
    const [currentPgItems, setCurrentPgItems] = useState([])

    useEffect(() => {
        let IndexOfLastItem = currentPage * numberOfItems
        let IndexOfFirstItem = IndexOfLastItem - numberOfItems

        let pageItems = categoryDishes.slice(IndexOfFirstItem, IndexOfLastItem)
        setCurrentPgItems(pageItems)
    }, [categoryDishes, currentPage, numberOfItems])

    // Default Category Items
    let DefCategoryItems = defCategoryData.map((item, index) => {
        if (index < numberOfItems) {
            return (
                <ItemCards key={index} item={item} /> // Componentization of Cards
            )
        }
        return null
    })

    // Buttons of Categories
    let categoryLists = allCategoriesList.map((item, index) => {
        return (
            <li className={activeCategory === item.strCategory ? 'active' : ''} key={index}
                onClick={() => CategoryDishesFilter(item.strCategory)}> {item.strCategory} </li>
        )
    })

    // Filtering Category Dishes
    function CategoryDishesFilter(Category) {
        setActiveCategory(Category) // for css style class
        setDefCategoryData([]) // for emptying while selecting
        setCurrentPage(1) // change pageNum on category change

        let Dishes = mealsData.filter((item) => {
            return item.strCategory === Category
        }).map((item, index) => {
            return (
                <ItemCards key={index} item={item} /> // Componentization of Cards
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
                    {currentPgItems.length !== 0 ? currentPgItems :
                        DefCategoryItems.length !== 0 ? DefCategoryItems :
                            <div className='categories_view_empty'>
                                <h2>No Dishes Found</h2>
                                <p> <strong>Try Another Category</strong></p>
                            </div>
                    }
                </ul>
            </div>

            <Pagination categoryDishes={categoryDishes}
                numberOfItems={numberOfItems}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setNumberOfItems={setNumberOfItems} />
        </section>
    )
}

export default Categories
