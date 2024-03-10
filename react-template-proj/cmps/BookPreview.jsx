

export function BookPreview({book}){
    return <article className="book-preview">
        
        <h1>{book.title}</h1>
        <h1>${book.listPrice.amount}</h1>
    </article>

}