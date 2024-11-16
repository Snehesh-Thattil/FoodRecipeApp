import React, { useContext } from 'react'
import { MealIdContext } from './Contexts'

function ItemCards({ item, setPopUp }) {
    const { setMealId } = useContext(MealIdContext)

    function cardClickHandle(item) {
        setMealId(item.idMeal)
        setPopUp(true)
    }

    // Rendering
    return (
        <li onClick={() => cardClickHandle(item)}>
            <img src={item.strMealThumb} alt="cousine-img" />
            <h5>{item.strMeal}</h5>
        </li>
    )
}

export default ItemCards