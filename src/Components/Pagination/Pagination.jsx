import React from 'react'
import './Pagination.css'

function Pagination({ dishesArray, numberOfItems, currentPg, setCurrentPg, setNumberOfItems }) {

    let numberOfPages = [];

    if (dishesArray.length !== 0) { // pages nums with selected category items
        for (let i = 1; i <= (Math.ceil(dishesArray.length / numberOfItems)); i++) {
            numberOfPages.push(i)
        }
    }

    let pagesList = numberOfPages.map((pageNumber, index) => {
        return (
            <li className={pageNumber === currentPg ? 'active' : ''} onClick={() => setCurrentPg(pageNumber)} key={index}>
                {pageNumber}
            </li>
        )
    })

    // Change No. of Items in one page
    function handleCountChange(selection) {
        if (selection !== numberOfItems) {
            setNumberOfItems(selection)
            setCurrentPg(1)
        }
    }

    // Rendering
    return (
        <div className='Pagination'>

            <div className="editCount">
                <p>Number of Items in one Page</p>
                <div className="dropdown">
                    <button> {numberOfItems}🔻</button>

                    <div className="changeList">
                        <li onClick={() => handleCountChange(5)}>5</li>
                        <li onClick={() => handleCountChange(10)}>10</li>
                        <li onClick={() => handleCountChange(15)}>15</li>
                        <li onClick={() => handleCountChange(20)}>20</li>
                    </div>
                </div>
            </div>

            <ul>
                {pagesList}
            </ul>

        </div>
    )
}

export default Pagination
