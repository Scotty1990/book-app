import React from 'react';
import NoImg from './pics/NoImg.jpeg'

const SearchResults = ({ book, addBookToLog }) => { 
    
    function onClick(event) {
        addBookToLog(book.volumeInfo.title)
        event.preventDefault()
    }

    return (
        <div>
        {/* Object.keys(book.volumeInfo.imageLinks) Object.keys(bookInfo).includes(thumbnail) ? */}
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
                <button className="logButton" onClick={onClick}>I've read this book</button>
            </div>
        </div>
    );
   
};

export default SearchResults;