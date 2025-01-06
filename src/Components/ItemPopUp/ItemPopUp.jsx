import React, { useContext } from 'react'
import './ItemPopUp.css'
import { cartToggleContext, MealIdContext } from '../../Contexts/OtherContexts'
import { MealIdDetailsContext } from '../../Contexts/MealIdDetailsContext'
import { cartContext } from '../../Contexts/CartContext'
import { wishlistsContext } from '../../Contexts/WishlistsContext'

function ItemPop({ setPopUp }) {

    const { idMealDetails, setIdMealDetails } = useContext(MealIdDetailsContext)
    const { setMealId } = useContext(MealIdContext)
    const { cartDispatch } = useContext(cartContext)
    const { setToggle } = useContext(cartToggleContext)
    const { wishlistDispatch } = useContext(wishlistsContext)

    // Order Button
    function HandleAddToCart(idMealDetails) {
        cartDispatch({
            type: 'add-to-cart',
            payload: idMealDetails
        })

        setMealId(null)
        setIdMealDetails([])
        setPopUp(false)

        // Cartpanel div showup and remove
        setToggle(true)
    }

    // Wishlists Button
    function HandleAddToWishlist(idMealDetails) {
        wishlistDispatch({
            type: 'add-to-wishlists',
            payload: idMealDetails
        })

        setMealId(null)
        setIdMealDetails([])
        setPopUp(false)
    }

    // On Closing PopUp
    function HandleClosePopUp(e) {
        e.preventDefault()
        setMealId(null)
        setIdMealDetails([])
        setPopUp(false)
    }

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
                        {[
                            { label: '↗️ Website', url: idMealDetails.strSource },
                            { label: '▶️ Youtube', url: idMealDetails.strYoutube }
                        ]
                            .filter((item) => item.url)
                            .map((link, index) => (
                                <button key={index}>
                                    <a href={link.url} target='_blank' rel='noopener noreferrer'>{link.label}</a>
                                </button>
                            ))}
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
                            <button onClick={() => HandleAddToWishlist(idMealDetails)}> 🩶 </button>
                            <button className='buyButton'> 🛍️ Order Now</button>
                            <button onClick={() => HandleAddToCart(idMealDetails)}> 🛒 </button>
                        </div>
                    </div>
                </div>

            </div>

            <li className='popUp_close' onClick={(e) => HandleClosePopUp(e)}> ✖️ </li>
        </div>
    )
}

export default ItemPop
