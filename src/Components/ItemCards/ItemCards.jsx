import React, { useContext } from 'react'
import { MealIdContext, PopUpContext } from '../../Contexts/OtherContexts'

function ItemCards({ item }) {
    const { setMealId } = useContext(MealIdContext)
    const { setPopUp } = useContext(PopUpContext)

    function HandleCardClick(item) {
        setMealId(item.idMeal)
        setPopUp(true)
    }

    // Rendering
    return (
        <li onClick={() => HandleCardClick(item)}>
            <img src={item.strMealThumb} alt="cousine-img" />
            <h5>{item.strMeal}</h5>
        </li>
    )
}

export default ItemCards