const { useState, useEffect } = React

import { bookService } from "../services/book.service.js";
import { BookList } from "./BookList.jsx"
import { BookDetails } from "./BookDetails.jsx"
import { BookFilter } from "./BookFilter.jsx"
// import { BooksEdit } from "./BooksEdit.jsx"


export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    function onAddBook(ev) {
        ev.preventDefault()
        console.log(ev);


    }



    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function onSelectBook(book) {
        setSelectedBook(book)
        console.log(book);
    }

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

        {!selectedBook && <React.Fragment>
            <h1>Out Books</h1>

            <BookFilter
                filterBy={filterBy}
                onSetFilter={onSetFilter}
            />
            <BookList
                books={books}
                onSelectBook={onSelectBook} />
            {/* <BooksEdit
                onAddBook={onAddBook} /> */}
        </React.Fragment>}

        {selectedBook && <BookDetails
            book={selectedBook}
            onGoBack={() => onSelectBook(null)}
        />

        }



    </section>

}

