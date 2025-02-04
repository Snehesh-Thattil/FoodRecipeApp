import React from 'react'
import './Pagination.css'

function Pagination({ dishesArray, numberOfItems, currentPg, setCurrentPg, setNumberOfItems }) {

    // Page numbers based on selected category items
    let numberOfPages = [];
    if (dishesArray.length !== 0) {
        for (let i = 1; i <= (Math.ceil(dishesArray.length / numberOfItems)); i++) {
            numberOfPages.push(i)
        }
    }

    // Create lists of page numbers and change page onClick
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

    // Change No. of itmes options based on device
    let firstOption = 3
    if ([3, 6, 9, 12].includes(numberOfItems)) {
        firstOption = 3
    } else if ([5, 10, 15, 20].includes(numberOfItems)) {
        firstOption = 5
    }

    // Rendering
    return (
        <div className='Pagination'>

            <div className="editCount">
                <p>Number of Items in one Page</p>
                <div className="dropdown">
                    <button> {numberOfItems}🔻</button>

                    <div className="changeList">
                        <li onClick={() => handleCountChange(firstOption)}>{firstOption}</li>
                        <li onClick={() => handleCountChange(firstOption * 2)}>{firstOption * 2}</li>
                        <li onClick={() => handleCountChange(firstOption * 3)}>{firstOption * 3}</li>
                        <li onClick={() => handleCountChange(firstOption * 4)}>{firstOption * 4}</li>
                    </div>
                </div>
            </div>

            <ul className='pageList'>
                {pagesList}
            </ul>

        </div>
    )
}

export default Pagination
