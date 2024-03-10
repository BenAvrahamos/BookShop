const { useState, useEffect } = React

import { bookService } from "../services/book.service.js";


export function BookFilter({onSetFilter,filterBy}) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)




    function handleChange({ target }) {
        let { value, name: field, type } = target
        console.log(field);
        setFilterByToEdit(prevFilterBy =>
            ({ ...prevFilterBy, [field]: value }))
            

    }
    function onFilter(ev){
        ev.preventDefault()
        onSetFilter(filterByToEdit)

    }

    return <section className={'book-filter'}>
        <h2>Filters:</h2>

        <form onSubmit={onFilter}>
            <label htmlFor="title">Title</label>
            <input type="text"
                value={filterByToEdit.title}
                onChange={handleChange}
                name="title"
                id="title" />


            <label htmlFor="listPrice">Price</label>
            <input type="number"
                value={filterByToEdit.price}
                onChange={handleChange}
                name="price"
                id="listPrice" />

            <button>Filter</button>



        </form>


    </section>


}