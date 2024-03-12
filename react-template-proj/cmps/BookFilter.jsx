const { useState, useEffect } = React

import { bookService } from "../services/book.service.js";


export function BookFilter({ onSetFilter, filterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    function handleChange({ target }) {

        let { value, name: field, type } = target

        setFilterByToEdit(prevFilterBy =>
            ({ ...prevFilterBy, [field]: value }))

    }
    function onFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)

    }

    return <section className='book-filter'>
        <h2>Filters:</h2>

        <form onSubmit={onFilter}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text"
                    value={filterByToEdit.title}
                    onChange={handleChange}
                    name="title"
                    id="title" />
            </div>
            <div>
                <label htmlFor="listPrice">Price</label>
                <input type="number"
                    value={filterByToEdit.price}
                    onChange={handleChange}
                    name="price"
                    id="listPrice" />
            </div>
            <div>
                <label htmlFor="publishedDate">Publish Year:</label>
                <input
                    type="number"
                    id="publishedDate"
                    placeholder="Enter Book Publish Year"

                    name="publishedDate"
                    onChange={handleChange}
                    value={filterByToEdit.publishedDate}
                />
            </div>
            <button>Filter</button>

        </form>

    </section>

}