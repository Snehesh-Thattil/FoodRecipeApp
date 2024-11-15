import React from 'react'

function Pagination({ categoryDishes, numberOfItems, currentPage, setCurrentPage, setNumberOfItems }) {

    let pagesCount = Math.ceil(categoryDishes.length / numberOfItems)
    let numberOfPages = [];

    for (let i = 1; i <= pagesCount; i++) {
        numberOfPages.push(i)
    }

    let pagesList = numberOfPages.map((pageNumber, index) => {
        return (
            <li className={pageNumber === currentPage ? 'active' : ''} key={index}
                onClick={() => setCurrentPage(pageNumber)}>
                {pageNumber}
            </li>
        )
    })

    // Change No. of Items in one page
    function handleCountChange(selection) {
        setNumberOfItems(selection)
        setCurrentPage(1)
    }

    // Rendering
    return (
        <div className='categories_pagination'>

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
