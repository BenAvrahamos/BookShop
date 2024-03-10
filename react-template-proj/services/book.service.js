import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'BookTwoDB'
var gFilterBy = { txt: '', minSpeed: 0 }
export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    // getFilterBy,
    // setFilterBy,
    getDefaultFilter
}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.title) {
                const regex = new RegExp(filterBy.title, 'i')
                books = books.filter(book => regex.test(book.title))
            }
            if (filterBy.price) {

                books = books.filter(book => book.listPrice.amount >= filterBy.price
                )
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', amount = 0) {
    return {
        id: '',
        title,
        listPrice: [amount],
    }
}

function getFilterBy() {
    return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    return gFilterBy
}

// function getNextBookId(bookId) {
//     return storageService.query(CAR_KEY)
//         .then(books => {
//             var idx = books.findIndex(book => book.id === bookId)
//             if (idx === books.length - 1) idx = -1
//             return books[idx + 1].id
//         })
// }

function _createBooks() {
    let Books = utilService.loadFromStorage(BOOK_KEY)
    if (!Books || !Books.length) {
        Books = []
        Books.push(_createBook('Harry Potter',))
        Books.push(_createBook('Song of Ice and Fire',))
        Books.push(_createBook('Lord of the Rings',))
        utilService.saveToStorage(BOOK_KEY, Books)
    }
}

function _createBook(title) {
    const book = getEmptyBook(title)
    book.id = utilService.makeId()
    book.listPrice.amount = utilService.getRandomIntInclusive(20, 100)

    return book
}

function getDefaultFilter() {
    return {
        title: '',
        price: 0
    }


}

