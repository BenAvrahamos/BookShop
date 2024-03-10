import { BookPreview } from "./BookPreview.jsx"


export function BookList({ books, onSelectBook }) {
    return (
        <ul className="book-list">
            {books.map((book, index) => (
                <li key={book.id}>
                    <BookPreview book={book} />
                    <button onClick={() => onSelectBook(book,index)}>Select Book</button>
                </li>
            ))}
        </ul>
    )
}