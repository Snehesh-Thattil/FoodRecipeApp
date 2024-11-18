import React, { useContext, useEffect, useState } from 'react'
import './Categories.css'
import { CategoriesContext, DefCategoryContext } from '../../Contexts/OtherContexts'
import Pagination from '../Pagination/Pagination'
import ItemCards from '../ItemCards/ItemCards'
import ItemPop from '../ItemPopUp/ItemPopUp'
import { MealsDataContext } from '../../Contexts/MealsDataContext'

function Categories() {
    // From Contexts.js
    const { allCategoriesList } = useContext(CategoriesContext)
    const { mealsData } = useContext(MealsDataContext)
    const { defCategoryData, setDefCategoryData } = useContext(DefCategoryContext)

    const [categoryDishes, setCategoryDishes] = useState([])
    const [defCategoryDishes, SetDefCategoryDishes] = useState([])
    const [activeCategory, setActiveCategory] = useState('Vegetarian')
    const [popUp, setPopUp] = useState(false)

    // Pagination Codes
    const [currentPage, setCurrentPage] = useState(1)
    const [numberOfItems, setNumberOfItems] = useState(10)
    const [currentPgItems, setCurrentPgItems] = useState([])

    useEffect(() => {
        let IndexOfLastItem = currentPage * numberOfItems
        let IndexOfFirstItem = IndexOfLastItem - numberOfItems

        if (defCategoryData.length !== 0) {
            let pageItems = defCategoryDishes.slice(IndexOfFirstItem, IndexOfLastItem)
            setCurrentPgItems(pageItems)
        } else {
            let pageItems = categoryDishes.slice(IndexOfFirstItem, IndexOfLastItem)
            setCurrentPgItems(pageItems)
        }
    }, [categoryDishes, currentPage, numberOfItems, defCategoryData, defCategoryDishes])

    // Buttons of Categories
    let categoryLists = allCategoriesList.map((item, index) => {
        return (
            <li className={activeCategory === item.strCategory ? 'active' : ''} key={index}
                onClick={(e) => CategoryDishesFilter(e, item.strCategory)}> {item.strCategory} </li>
        )
    })

    // Default Dishes List Filtering
    useEffect(() => {
        let DefDishes = defCategoryData.map((item, index) => {
            return (
                <ItemCards key={index} item={item} setPopUp={setPopUp} /> // Componentization of Cards
            )
        })
        SetDefCategoryDishes(DefDishes)
    }, [defCategoryData, SetDefCategoryDishes])

    // Selected Category Dishes List Filtering
    function CategoryDishesFilter(e, Category) {
        e.preventDefault()
        setActiveCategory(Category) // for css style class
        setDefCategoryData([]) // for emptying while selecting
        setCurrentPage(1) // change pageNum on category change

        let Dishes = mealsData.filter((item) => {
            return item.strCategory === Category
        }).map((item, index) => {
            return (
                <ItemCards key={index} item={item} setPopUp={setPopUp} /> // Componentization of Cards
            )
        })
        setCategoryDishes(Dishes)
    }

    // Rendering
    return (
        <section className='categories'>
            {popUp && <ItemPop setPopUp={setPopUp} />}
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
                        <div className='categories_view_empty'>
                            <h2>No Dishes Found</h2>
                            <p> <strong>Try Another Category</strong></p>
                        </div>
                    }
                </ul>
            </div>

            <Pagination categoryDishes={categoryDishes}
                defCategoryData={defCategoryData}
                numberOfItems={numberOfItems}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setNumberOfItems={setNumberOfItems} />
        </section>
    )
}

export default Categories
