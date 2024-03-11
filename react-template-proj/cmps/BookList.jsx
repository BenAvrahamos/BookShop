const { Link } = ReactRouterDOM

import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books }) {
    return (
        <ul className="book-list">
            {books.map((book, index) => (
                <li key={book.id}>
                    <BookPreview book={book} />
                    <Link to={`/book/${book.id}`}> <button>Select Book</button></Link>
                </li>
            ))}
        </ul>
    )
}