import React, { useContext } from 'react'
import './SpecialDishes.css'
import { MealsContext } from '../Context'

function SpecialDishes() {
    const { mealsData } = useContext(MealsContext)
    // console.log('|| Meals Data From Context : ', mealsData)

    let specialDishes = mealsData.map((item, index) => {
        if (index < 8) {
            return (
                <li key={index}>
                    <img src={item.strMealThumb} alt="meal-img" />
                    <h4>{item.strMeal}</h4>
                </li>
            )
        }
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
