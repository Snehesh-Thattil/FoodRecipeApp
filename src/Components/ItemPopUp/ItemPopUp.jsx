import React, { useContext } from 'react'
import './ItemPopUp.css'
import { MealIdDetailsContext } from '../Contexts'

function ItemPop({ setPopUp }) {

    const { idMealDetails } = useContext(MealIdDetailsContext)
    console.log('LOOKING IT :', idMealDetails)

    // Rendering
    return (
        <div className='popUp'>
            <div className="popUp_content">
                <h2>{idMealDetails.strMeal}</h2>
                <button>Order Now</button>
            </div>

            <li className='popUp_close' onClick={() => setPopUp(false)}> ✖️ </li>
        </div>
    )
}

export default ItemPop
