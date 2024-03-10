const { useState, useEffect } = React

import { LongText } from "./LongText.jsx"


export function BookDetails({ book, index, onGoBack }) {
    const [btnText, setBtnText] = useState('')
    let [txtLength, setTextLength] = useState(100)
    const [btnState, setBtnState] = useState(false)


    useEffect(() => {
        
        if (btnState) {
            setTextLength(txtLength = -1)
            setBtnText('Read Less...')
        } else {
            setTextLength(txtLength = 100)
            setBtnText('Read More...')
        }

    }, [btnState])



    function randomTxt() {
        return `a dead channel to a pleasure as generally It to burn . I the color of television . had to and it this happened . the story the color of television was a pleasure the story It the story above the port a different story the color of television above a dead channel had to and happens It . a dead channel as generally burn more or less more or less as generally . burn and this happened happens it was tuned above above had more or less The sky a different story . bit by bit It to burn in such cases a different story All was as generally . The sky each time . above was it a dead channel All All and above had from various people was and to I to as generally above . tuned The sky to a different story it had I All to a different story the story and `
    }

    function dynPriceColor() {
        if (book.listPrice.amount > 150) {
            return ' red'
        } else if (book.listPrice.amount < 20) {
            return ' green'
        } else {
            return ''
        }
    }

    function dynLengthClassification() {
        if (book.pageCount > 500) {
            return ' Serious Reading'
        } else if (book.pageCount > 200) {
            return ' Descent Reading'
        } else {
            return 'Light Reading'
        }
    }

    return <section className="book-details">
        <h2 className="book-title">{book.title}| by {book.authors}</h2>
        <h2 className="green">{book.listPrice.isOnSale && 'On Sale '}</h2>
        <img src={`http://coding-academy.org/books-photos/${index + 1}.jpg`} alt="" />
        <h1>{book.subtitle}</h1>
        <h1>Price : <span className={dynPriceColor()}> ${book.listPrice.amount}   </span>
            | length : {dynLengthClassification() + ' '}
            | {2024 - book.publishedDate < 10 ? 'New' : 'Vintage'}</h1>
        <h3>
            <LongText
                txt={randomTxt()}
                length={txtLength} />
            <button onClick={() => setBtnState(prevState => prevState = !prevState)}>{btnText}</button>
        </h3>



        <button onClick={onGoBack}>Go back</button>
    </section>

}