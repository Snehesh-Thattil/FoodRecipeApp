import React, { useContext, useEffect, useRef, useState } from 'react'
import './Areas.css'
import { AreasContext } from '../../Contexts/AreasContext'
import { MealsDataContext } from '../../Contexts/MealsDataContext'
import ItemCards from '../ItemCards/ItemCards'
import Pagination from '../Pagination/Pagination'
import { PopUpContext } from '../../Contexts/OtherContexts'
import ItemPop from '../ItemPopUp/ItemPopUp'

function Areas() {
    const { allAreasList } = useContext(AreasContext)
    const { mealsData } = useContext(MealsDataContext)
    const { popUp } = useContext(PopUpContext)

    const [areaDishes, setAreaDishes] = useState([])
    const [activeArea, setActiveArea] = useState('Indian')
    const areaDishesRef = useRef()

    // Pagination
    const [currentPg, setCurrentPg] = useState(1)
    const [numberOfItems, setNumberOfItems] = useState(() => window.innerWidth > 1024 ? 10 : 6)
    const [currentPgItems, setCurrentPgItems] = useState([])

    useEffect(() => {
        let IndexOfLastItem = numberOfItems * currentPg
        let IndexOfFirstItem = IndexOfLastItem - numberOfItems

        if (areaDishes.length !== 0) {
            let pageItems = areaDishes.slice(IndexOfFirstItem, IndexOfLastItem)
            setCurrentPgItems(pageItems)
        } else {
            setCurrentPgItems([])
        }
    }, [areaDishes, currentPg, numberOfItems])


    // Handle selection of an Area
    function handleAreaClick(Area) {
        setActiveArea(Area)
        setCurrentPg(1)

        areaDishesRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    // Buttons of Areas
    let areasLists = allAreasList.map((item, index) => {
        return (
            <li className={activeArea === item.strArea ? 'active' : ''} key={index}
                onClick={() => handleAreaClick(item.strArea)}>{item.strArea}</li>
        )
    })

    // Filtering Selected Area Dishes
    useEffect(() => {
        let Dishes = mealsData.filter((item) => {
            return item.strArea === activeArea
        }).map((item, index) => {
            return (
                <ItemCards key={index} item={item} />
            )
        })
        setAreaDishes(Dishes)
    }, [activeArea, mealsData])

    return (
        <section className='areas'>
            {popUp && <ItemPop />}
            <div className="areas_content">
                <h3>Areas</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem distinctio illum aspernatur, vero autem tempora, ipsum labore explicabo eum, deserunt amet. Dolorem soluta quod totam numquam perspiciatis.</p>
            </div>

            <div className="areas_list">
                <ul>
                    {areasLists}
                </ul>
            </div>

            <div className="areas_view" ref={areaDishesRef}>
                <ul>
                    {currentPgItems.length !== 0 ? currentPgItems :
                        <div className='areas_view_empty'>
                            <h2>No Dishes Found</h2>
                            <p> <strong>Try Other Areas</strong></p>
                        </div>
                    }
                </ul>
            </div>

            <Pagination dishesArray={areaDishes}
                numberOfItems={numberOfItems}
                setCurrentPg={setCurrentPg}
                currentPg={currentPg}
                setNumberOfItems={setNumberOfItems} />
        </section>
    )
}

export default Areas
