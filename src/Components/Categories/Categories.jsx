import React, { useContext, useEffect, useRef, useState } from 'react'
import './Categories.css'
import { CategoriesContext } from '../../Contexts/CategoriesContext'
import Pagination from '../Pagination/Pagination'
import ItemCards from '../ItemCards/ItemCards'
import ItemPop from '../ItemPopUp/ItemPopUp'
import { MealsDataContext } from '../../Contexts/MealsDataContext'
import { PopUpContext } from '../../Contexts/OtherContexts'

function Categories() {
    // From Contexts.js
    const { mealsData } = useContext(MealsDataContext)
    const { allCategoriesList } = useContext(CategoriesContext)
    const { popUp, setPopUp } = useContext(PopUpContext)

    const [categoryDishes, setCategoryDishes] = useState([])
    const [activeCategory, setActiveCategory] = useState('Vegetarian')
    const categoryDishesRef = useRef()

    // Pagination Codes
    const [currentPg, setCurrentPg] = useState(1)
    const [numberOfItems, setNumberOfItems] = useState(() => window.innerWidth > 1024 ? 10 : 6)
    const [currentPgItems, setCurrentPgItems] = useState([])

    useEffect(() => {
        let IndexOfLastItem = currentPg * numberOfItems
        let IndexOfFirstItem = IndexOfLastItem - numberOfItems

        if (categoryDishes.length !== 0) {
            let pageItems = categoryDishes.slice(IndexOfFirstItem, IndexOfLastItem)
            setCurrentPgItems(pageItems)
        } else {
            setCurrentPgItems([])
        }
    }, [categoryDishes, currentPg, numberOfItems])

    // Handle selection of a Category
    function handleCategoryClick(Category) {
        setActiveCategory(Category)
        setCurrentPg(1)

        categoryDishesRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    // Buttons of Categories
    let categoryLists = allCategoriesList.map((item, index) => {
        return (
            <li className={activeCategory === item.strCategory ? 'active' : ''} key={index}
                onClick={() => handleCategoryClick(item.strCategory)}> {item.strCategory} </li>
        )
    })

    // Filtering Selected Category Dishes
    useEffect(() => {
        setCurrentPg(1) // change pageNum on category change
        let Dishes = mealsData.filter((item) => {
            return item.strCategory === activeCategory
        }).map((item, index) => {
            return (
                <ItemCards key={index} item={item} /> // Componentization of Cards
            )
        })
        setCategoryDishes(Dishes)
    }, [activeCategory, mealsData])

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

            <div className="categories_view" ref={categoryDishesRef}>
                <ul>
                    {currentPgItems.length !== 0 ? currentPgItems :
                        <div className='categories_view_empty'>
                            <h2>No Dishes Found</h2>
                            <p> <strong>Try Other Categories</strong></p>
                        </div>
                    }
                </ul>
            </div>

            <Pagination dishesArray={categoryDishes}
                numberOfItems={numberOfItems}
                setCurrentPg={setCurrentPg}
                currentPg={currentPg}
                setNumberOfItems={setNumberOfItems} />
        </section>
    )
}

export default Categories
