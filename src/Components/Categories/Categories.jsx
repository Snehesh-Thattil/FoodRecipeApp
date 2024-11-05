import React, { useContext } from 'react'
import './Categories.css'
import { CategoriesContext } from '../Context'

function Categories() {
    const { categoriesData, setCategoriesData } = useContext(CategoriesContext)
    console.log('|| Categories Data From Context : ', categoriesData)

    let categories = (categoriesData ? categoriesData.map((item, index) => {
        return (
            <li key={index}> {item.strCategory} </li>
        )
    }) : '')

    return (
        <section className='categories'>
            <div className="categories_content">
                <h3>Our Categories</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem distinctio illum aspernatur, vero autem tempora, ipsum labore explicabo eum, deserunt amet. Dolorem soluta quod totam numquam perspiciatis.</p>
            </div>
            <div className="categories_list">
                <ul>
                    {categories}
                </ul>
            </div>
        </section>
    )
}

export default Categories
