const { Link } = ReactRouterDOM

import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books }) {
    return (
        <ul className="book-list">
            {books.map((book, index) => (
                <li key={book.id}>
                    <BookPreview 
                    book={book}
                    index={index}
                     />
                    <Link to={`/book/${book.id}`}> <button>Select Book</button></Link>
                    <Link to={`/books/book/edit${book.id}`}> <button>Edit Book</button></Link>
                </li>
            ))}
        </ul>
    )
}