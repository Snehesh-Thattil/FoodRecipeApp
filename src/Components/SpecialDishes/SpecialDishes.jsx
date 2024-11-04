import React, { useContext } from 'react'
import './SpecialDishes.css'
import { MealsData } from '../Context'

function SpecialDishes() {
    const { mealsData } = useContext(MealsData)
    console.log('|| Data With Context : ', mealsData)

    let specialDishes = (mealsData ? mealsData.map((item, index) => {
        if (index < 8) {
            return (
                <li>
                    <img src={item.strMealThumb} alt="meal-img" />
                    <h4>{item.strMeal}</h4>
                </li>
            )
        }
    }) : null)

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
