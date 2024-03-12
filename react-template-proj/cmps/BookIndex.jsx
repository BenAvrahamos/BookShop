const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js";
import { BookList } from "./BookList.jsx"
import { BookFilter } from "./BookFilter.jsx"


export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())



    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then((books) => {
                setBooks(books)
            })
    }

    function onSetFilter(fieldsToUpdate) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...fieldsToUpdate }))
    }

    if (!books) return <div>loading...</div>
    return <section className="book-index">

        <React.Fragment>
            <h1>Out Books</h1>

            <BookFilter
                filterBy={filterBy}
                onSetFilter={onSetFilter}
            />
            <Link to="/book/edit"><button>Add a Book</button></Link>
            <BookList
                books={books}
                 />
        </React.Fragment>

    </section>

}