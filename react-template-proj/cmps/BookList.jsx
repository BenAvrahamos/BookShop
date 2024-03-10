import { BookPreview } from "./BookPreview.jsx"


export function BookList({ books,onSelectBook}) {
    return <ul className="book-list">
        
        {
            books.map(book => 
                <li key={book.id}>
                    <BookPreview book={book} />
                    <button onClick={()=> onSelectBook(book)}>Select Book</button>

                </li>
            )}




    </ul>




}