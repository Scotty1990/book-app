import { Link } from 'react-router-dom'
import React from 'react'

function Nav() {
    // const [readBooks, setReadBooks] = useState([])
    // function addBookToLog(addedBook) {
    //     // addedBookToLog()
    //     setReadBooks(readBooks => [...readBooks, addedBook])
    //     console.log(readBooks)
    //   }
    return (
        <nav id="navBar">
            {/* <Link to="/" addBookToLog={addBookToLog}>
                <h3>Home</h3>
            </Link> */}
            <Link to="/">
                <h3>Home</h3>
            </Link>
            <Link to="/randombook">
                <h3>Random Book Generator</h3>
            </Link>
            <Link to="/musings">
                <h3>Musings</h3>
            </Link>
            {/* <Link to="/booksiveread">
                <h3>Books I've Read</h3>
            </Link> */}
            {/* <Link to="/booksiveread" readBooks={readBooks}>
                <h3>Books I've Read</h3>
            </Link> */}
        </nav>
    );
}

export default Nav;