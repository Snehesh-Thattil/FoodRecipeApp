import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
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
    const { setPanelCartToggle } = useContext(cartToggleContext)
    const { wishlistDispatch } = useContext(wishlistsContext)
    const { setPopUp } = useContext(PopUpContext)
    const navigate = useNavigate()
    const [buttonText, setButtonText] = useState('Show Ingredients')
    const changeContentBtnRef = useRef()
    const ingredientsRef = useRef()
    const instructionRef = useRef()
    const popUpContentRef = useRef()

    // Fetching ingredients and its measures
    let ingredientsList = useMemo(() => {
        return Object.keys(idMealDetails)
            .filter((key) => key.startsWith('strIngredient') && idMealDetails[key])
            .map((key) => {
                const index = key.replace('strIngredient', '')

                const ingredient = idMealDetails[`strIngredient${index}`]
                const measure = idMealDetails[`strMeasure${index}`]

                return { ingredient, measure }
            })
            .map((item, index) => {
                return (
                    <tr key={index}>
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

        resetPopUp()
        setPanelCartToggle(true)
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
        resetPopUp()
    }

    // On Closing PopUp
    const resetPopUp = useCallback(() => {
        setMealId(null)
        setIdMealDetails([])
        setPopUp(false)
    }, [setMealId, setIdMealDetails, setPopUp])

    // Show ingredient Button
    function handleChangeContent() {
        ingredientsRef.current.classList.toggle('show')
        instructionRef.current.classList.toggle('hide')
        if (ingredientsRef.current) {
            ingredientsRef.current.classList.contains('show') ? setButtonText('Show Recipe') : setButtonText('Show Ingredients')
        }
    }

    // Clicks outside the PopUp box
    useEffect(() => {
        function handleClickOutside(e) {
            if (e.target.classList.contains('popUp')) resetPopUp()
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [resetPopUp])

    // Rendering
    return (
        <div className='popUp'>
            <div className="popUp_content" ref={popUpContentRef}>
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
                    <button className='change-content' onClick={handleChangeContent} ref={changeContentBtnRef}>{buttonText}</button>

                    <div className="ingredients" ref={ingredientsRef}>
                        <h2>Ingredients :-</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ingredientsList ? ingredientsList : 'No Ingredients found'}
                            </tbody>
                        </table>
                    </div>

                    <div className="instructions">
                        <div className="instruction" ref={instructionRef}>
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

            <li className='popUp_close' onClick={resetPopUp}> ✖️ </li>
        </div>
    )
}

export default ItemPop
