import React, { useContext, useState } from 'react'
import './SpecialDishes.css'
import ItemCards from '../ItemCards'
import ItemPopUP from '../ItemPopUp/ItemPopUp'
import { MealsDataContext } from '../../Contexts/MealsDataContext'

function SpecialDishes() {
    const [popUp, setPopUp] = useState(false)
    const { mealsData } = useContext(MealsDataContext)

    let specialDishes = mealsData.map((item, index) => {
        if (index > 10 && index < 19) {
            return (
                <ItemCards key={index} item={item} setPopUp={setPopUp} /> // Componentization of Cards
            )
        }
        return null
    })

    return (
        <section className='SpecialDishes'>
            {popUp && <ItemPopUP setPopUp={setPopUp} />}
            <div className="SpecialDishes_content">
                <h3>Special Dishes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem distinctio illum aspernatur, vero autem tempora, ipsum labore explicabo eum, deserunt amet. Dolorem soluta quod totam numquam perspiciatis.</p>
            </div>
            <div className="SpecialDishes_list">
                <ul>
                    {specialDishes}
                </ul>
            </div>
        </section>
    )
}

export default SpecialDishes
