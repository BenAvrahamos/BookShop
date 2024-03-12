

export function BookPreview({ book, index }) {

    return <article className="book-preview">

        <h1>{book.title}</h1>
        <img src={book.thumbnail} />
        <h1>${book.listPrice.amount}</h1>
    </article>

}