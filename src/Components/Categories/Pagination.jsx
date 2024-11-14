import React from 'react'

function Pagination({ categoryDishes, numberOfItems, currentPage, setCurrentPage }) {

    let pagesCount = Math.ceil(categoryDishes.length / numberOfItems)
    let numberOfPages = [];

    for (let i = 1; i <= pagesCount; i++) {
        numberOfPages.push(i)
    }

    let pagesList = numberOfPages.map((pageNumber, index) => {
        return (
            <li className={pageNumber === currentPage ? 'active' : ''} key={index}
                onClick={() => handlePageChange(pageNumber)}>
                {pageNumber}
            </li>
        )
    })

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber)
    }

    // Rendering
    return (
        <div className='categories_pagination'>
            <ul>
                {pagesList}
            </ul>
        </div>
    )
}

export default Pagination
