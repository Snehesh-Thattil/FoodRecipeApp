import React, { useContext } from 'react'
import { MealIdContext } from '../../Contexts/OtherContexts'

function ItemCards({ item, setPopUp }) {
    const { setMealId } = useContext(MealIdContext)

    function cardClickHandle(e, item) {
        e.preventDefault()
        setMealId(item.idMeal)
        setPopUp(true)
    }

    // Rendering
    return (
        <li onClick={(e) => cardClickHandle(e, item)}>
            <img src={item.strMealThumb} alt="cousine-img" />
            <h5>{item.strMeal}</h5>
        </li>
    )
}

export default ItemCards