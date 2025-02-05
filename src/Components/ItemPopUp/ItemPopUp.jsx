import React, { useContext, useMemo } from 'react'
import './ItemPopUp.css'
import { cartToggleContext, MealIdContext, PopUpContext } from '../../Contexts/OtherContexts'
import { MealIdDetailsContext } from '../../Contexts/MealIdDetailsContext'
import { cartContext } from '../../Contexts/CartContext'
import { wishlistsContext } from '../../Contexts/WishlistsContext'
import { orderContext } from '../../Contexts/OrderContext'
import { useNavigate } from 'react-router-dom'

function ItemPop() {

    const { idMealDetails, setIdMealDetails } = useContext(MealIdDetailsContext)
    const { orderDispatch } = useContext(orderContext)
    const { setMealId } = useContext(MealIdContext)
    const { cartDispatch } = useContext(cartContext)
    const { setToggle } = useContext(cartToggleContext)
    const { wishlistDispatch } = useContext(wishlistsContext)
    const { setPopUp } = useContext(PopUpContext)
    const navigate = useNavigate()

    // Fetching ingredients and its measures
    let ingredientsList = useMemo(() => {
        return Array.from({ length: 10 }, (_, i) => i + 1)
            .map((num) => {
                let ingredient = idMealDetails[`strIngredient${num}`]
                let measure = idMealDetails[`strMeasure${num}`]

                return { ingredient, measure }
            })
            .filter((item) => item.ingredient)
            .map((item) => {
                return (
                    <tr>
                        <td>{item.ingredient}</td>
                        <td>{item.measure}</td>
                    </tr>
                )
            })
    }, [idMealDetails])

    // Cart Button
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

    // Order Button
    function HandleOrderNow(idMealDetails) {
        orderDispatch({
            type: 'direct-order',
            payload: idMealDetails
        })
        navigate('/checkout')
        setPopUp(false)
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
                        {[{ label: '↗️ Website', url: idMealDetails.strSource },
                        { label: '▶️ Youtube', url: idMealDetails.strYoutube }]
                            .filter((item) => item.url)
                            .map((link, index) => (
                                <a href={link.url} target='_blank' rel='noopener noreferrer' key={index}>{link.label}</a>
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
                                {ingredientsList}
                            </tbody>
                        </table>
                    </div>

                    <div className="instructions">
                        <div className="instruction">
                            <h2>Recipe :-</h2>
                            {idMealDetails.strInstructions}
                        </div>
                        <div className="order">
                            <p>Rs.799/-</p>
                            <button onClick={() => HandleAddToWishlist(idMealDetails)}> 🩶 </button>
                            <button onClick={() => HandleOrderNow(idMealDetails)} className='buyButton'> 🛍️ Order Now</button>
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
