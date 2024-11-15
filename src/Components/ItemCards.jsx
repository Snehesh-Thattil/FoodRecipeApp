import React from 'react'

function ItemCards({ item }) {
    return (
        <li>
            <img src={item.strMealThumb} alt="cousine-img" />
            <h5>{item.strMeal}</h5>
        </li>
    )
}

export default ItemCards
