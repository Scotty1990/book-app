import React, { useState } from 'react';
import Home from './Home';
import BooksIveRead from './BooksIveRead';

function HomeAndBIRContainer() {
    // comment so I can see if that works
    const [readBooks, setReadBooks] = useState(["Books I've read: "])
    function addBookToLog(addedBook) {
        setReadBooks(readBooks => [...readBooks, addedBook + ', ' ])
      }
    return (
        <div>
            <BooksIveRead readBooks={readBooks}/>
            <Home 
                readBooks={readBooks}
                addBookToLog={addBookToLog}
            />
        </div>
    );
}

export default HomeAndBIRContainer;