import React, { useContext } from 'react'
import './SpecialDishes.css'
import { MealsContext } from '../Contexts'
import ItemCards from '../ItemCards'

function SpecialDishes() {
    const { mealsData } = useContext(MealsContext)

    let specialDishes = mealsData.map((item, index) => {
        if (index > 10 && index < 19) {
            return (
                <ItemCards key={index} item={item} /> // Componentization of Cards
            )
        }
        return null
    })

    return (
        <section className='SpecialDishes'>
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
