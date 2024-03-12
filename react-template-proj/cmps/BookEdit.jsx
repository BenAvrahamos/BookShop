import { bookService } from "../services/book.service.js";

const { useState, useEffect } = React
const { useNavigate, useParams} = ReactRouter

export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook)
    const navigate = useNavigate()
   const {bookId} =useParams()
   console.log(bookId);

    function handlePriceList({ target }) {
        console.log(target.value);

        const listPrice = {...bookToEdit.listPrice, amount : target.value}

        setBookToEdit(prevBookToEdit => ({ ...prevBookToEdit, listPrice }))

    }

    useEffect(() => {
        if (bookId) loadBook()



    },[])

    function loadBook() {
        bookService.get(bookId)
            .then(book => setBookToEdit(book))
            .catch(err => {
                console.log(err)
                navigate('/books')
            })
    }


    function handleChange({ target }) {
        const field = target.name
        let value = target.value


        setBookToEdit(prevBookToEdit => ({ ...prevBookToEdit, [field]: value }))

    }

    function onSaveBook(ev) {
        ev.preventDefault()

        bookService.save(bookToEdit)
            .then(savedBook => {
                console.log(bookToEdit);
                navigate('/books')
            })
    }

    return <section className="book-edit">
        <form onSubmit={onSaveBook} >
            <label htmlFor="title">Book Title:</label>
            <input
                type="text"
                id="title"
                placeholder="Enter Book Title"
                name="title"
                onChange={handleChange}
                value={bookToEdit.title}
            />

            <label htmlFor="price">Price:</label>
            <input
                type="number"
                id="price"
                placeholder="Enter Book Price"

                name="price"
                onChange={handlePriceList}
                value={bookToEdit.listPrice.amount}
            />

            <label htmlFor="publishedDate">Publish Year:</label>
            <input
                type="number"
                id="publishedDate"
                placeholder="Enter Book Publish Year"

                name="publishedDate"
                onChange={handleChange}
                value={bookToEdit.publishedDate}
            />

            <button>Save</button>
        </form>
    </section>


}