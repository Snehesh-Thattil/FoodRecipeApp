import React, { useContext } from 'react'
import './ItemPopUp.css'
import { ItemViewContext } from '../Contexts'

function ItemPop({ setPopUp }) {

    const { itemDetails } = useContext(ItemViewContext)

    return (
        <div className='popUp'>
            <div className="popUp_content">
                <h2>{itemDetails.strMeal}</h2>
                <button>Order Now</button>
            </div>

            <li className='popUp_close' onClick={() => setPopUp(false)}> ✖️ </li>
        </div>
    )
}

export default ItemPop
