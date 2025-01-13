import React, { useContext, useEffect, useState } from 'react'
import './Areas.css'
import { AreasContext } from '../../Contexts/AreasContext'
import { MealsDataContext } from '../../Contexts/MealsDataContext'
import ItemCards from '../ItemCards/ItemCards'

function Areas() {
    const { allAreasList } = useContext(AreasContext)
    const { mealsData } = useContext(MealsDataContext)

    const [areaDishes, setAreaDishes] = useState()
    const [activeArea, setActiveArea] = useState('Indian')

    let areasLists = allAreasList.map((item, index) => {
        return (
            <li className={activeArea === item.strArea ? 'active' : ''} key={index}
                onClick={() => setActiveArea(item.strArea)}>{item.strArea}</li>
        )
    })

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
            <div className="areas_content">
                <h3>Areas</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem distinctio illum aspernatur, vero autem tempora, ipsum labore explicabo eum, deserunt amet. Dolorem soluta quod totam numquam perspiciatis.</p>
            </div>

            <div className="areas_list">
                <ul>
                    {areasLists}
                </ul>
            </div>

            <div className="categories_view">
                <ul>
                    {areaDishes}
                </ul>
            </div>
        </section>
    )
}

export default Areas
