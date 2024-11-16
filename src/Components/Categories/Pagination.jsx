import React from 'react'

function Pagination({ defCategoryData, categoryDishes, numberOfItems, currentPage, setCurrentPage, setNumberOfItems }) {

    let numberOfPages = [];

    if (defCategoryData.length !== 0) { // page nums with default category items
        for (let i = 1; i <= (Math.ceil(defCategoryData.length / numberOfItems)); i++) {
            numberOfPages.push(i)
        }
    } else { // pages nums with selected category items
        for (let i = 1; i <= (Math.ceil(categoryDishes.length / numberOfItems)); i++) {
            numberOfPages.push(i)
        }
    }

    let pagesList = numberOfPages.map((pageNumber, index) => {
        return (
            <li className={pageNumber === currentPage ? 'active' : ''} onClick={() => setCurrentPage(pageNumber)} key={index}>
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
