



export function BooksEdit({onAddBook}){

   return <form onSubmit={onAddBook}>
    <label htmlFor="title">Title</label>
    <input type="text"
        name="title"
        id="title" />


    <label htmlFor="listPrice">Price</label>
    <input type="number"
        name="listPrice"
        id="listPrice" />

    <button>Add Book</button>



</form>


}