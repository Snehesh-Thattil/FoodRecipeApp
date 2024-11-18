import React, { useContext } from 'react'
import './ItemPopUp.css'
import { MealIdContext } from '../../Contexts/OtherContexts'
import { MealIdDetailsContext } from '../../Contexts/MealIdDetailsContext'

function ItemPop({ setPopUp }) {

    const { idMealDetails, setIdMealDetails } = useContext(MealIdDetailsContext)
    const { setMealId } = useContext(MealIdContext)

    // On Closing PopUp
    function HandleClosePopUp(e) {
        e.preventDefault()
        setMealId(null)
        setIdMealDetails([])
        setPopUp(false)
    }

    // Rendering
    return (
        <div className='popUp'>
            <div className="popUp_content">

                <div className="imageSection">
                    <img src={idMealDetails.strMealThumb} alt="recipe-image" />
                    <div className="imageTags">
                        <button>{idMealDetails.strCategory}</button>
                        <button>{idMealDetails.strArea}</button>
                    </div>
                </div>

                <div className="dishName">
                    <h2>{idMealDetails.strMeal}</h2>

                    <div className="sourcebuttons">
                        <button><a href={idMealDetails.strSource}> ↗️ </a>Website</button>
                        <button><a href={idMealDetails.strYoutube}> ▶️ </a>Youtube</button>
                    </div>
                </div>

                <div className="recipe">

                    <div className="ingredients">
                        <table>
                            <thead>
                                <tr>
                                    <th>Ingredients</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{idMealDetails.strIngredient1}</td>
                                    <td>{idMealDetails.strMeasure1}</td>
                                </tr>
                                <tr>
                                    <td>{idMealDetails.strIngredient2}</td>
                                    <td>{idMealDetails.strMeasure2}</td>
                                </tr>
                                <tr>
                                    <td>{idMealDetails.strIngredient3}</td>
                                    <td>{idMealDetails.strMeasure3}</td>
                                </tr>
                                <tr>
                                    <td>{idMealDetails.strIngredient4}</td>
                                    <td>{idMealDetails.strMeasure4}</td>
                                </tr>
                                <tr>
                                    <td>{idMealDetails.strIngredient5}</td>
                                    <td>{idMealDetails.strMeasure5}</td>
                                </tr>
                                <tr>
                                    <td>{idMealDetails.strIngredient6}</td>
                                    <td>{idMealDetails.strMeasure6}</td>
                                </tr>
                                <tr>
                                    <td>{idMealDetails.strIngredient7}</td>
                                    <td>{idMealDetails.strMeasure7}</td>
                                </tr>
                                <tr>
                                    <td>{idMealDetails.strIngredient8}</td>
                                    <td>{idMealDetails.strMeasure8}</td>
                                </tr>
                                <tr>
                                    <td>{idMealDetails.strIngredient9}</td>
                                    <td>{idMealDetails.strMeasure9}</td>
                                </tr>
                                <tr>
                                    <td>{idMealDetails.strIngredient10}</td>
                                    <td>{idMealDetails.strMeasure10}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="instructions">
                        <div className="instruction">
                            <h2>Recipe :-</h2>
                            {idMealDetails.strInstructions}
                        </div>
                        <div className="order">
                            <button> 🩶 </button>
                            <button className='buyButton'> 🛍️ Order Now</button>
                            <button> 🛒 </button>
                        </div>
                    </div>

                </div>

            </div>

            <li className='popUp_close' onClick={(e) => HandleClosePopUp(e)}> ✖️ </li>
        </div>
    )
}

export default ItemPop
