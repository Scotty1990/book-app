import React from 'react';
import NoImg from './pics/NoImg.jpeg'

const SearchResults = ({ book, addReadBookToLog, addWantToReadLog }) => { 
    function readBook(event) {
        addReadBookToLog(book)
        console.log("title: " + book.volumeInfo.title)
        console.log("image url: " + book.volumeInfo.imageLinks.thumbnail)
        console.log("authors: " + book.volumeInfo.authors)
        console.log("published date: " + book.volumeInfo.publishedDate)
        console.log(book.volumeInfo.description)
        event.preventDefault()
    }

    function wantToRead(event) {
        addWantToReadLog(book)
        event.preventDefault()
    }

    return (
        <div key={book.id}>
            <div>
                <img src={Object.keys(book.volumeInfo).includes(`imageLinks`) ? book.volumeInfo.imageLinks.thumbnail : NoImg} alt={book.volumeInfo.title}/>
            </div>
            <div id="book-title">
                {book.volumeInfo.title}
            </div>
            <div>
                {Object.keys(book.volumeInfo).includes(`averageRating`) ? `Average Rating: ${book.volumeInfo.averageRating}/5` : ''}
            </div>
            <div>
                <div>
                    <button className="logButton" onClick={readBook}>I've read this book</button>
                </div>
                <div>
                    <button className="wTRButton" onClick={wantToRead}>I want to read this book</button>
                </div>
            </div>
        </div>
    );
   
};

export default SearchResults;