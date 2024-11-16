import React, { useContext } from 'react'
import { ItemViewContext } from './Contexts'

function ItemCards({ item, setPopUp }) {

    const { setItemDetails } = useContext(ItemViewContext)

    function cardClickHandle(item) {
        setPopUp(true)
        setItemDetails(item)
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
