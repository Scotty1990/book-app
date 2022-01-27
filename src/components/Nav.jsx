import { Link } from 'react-router-dom'
import React from 'react'

function Nav() {
    return (
        <nav id="navBar">
            <Link to="/">
                <h3>Home</h3>
            </Link>
            <Link to="/randombook">
                <h3>Random Book Generator</h3>
            </Link>
            <Link to="/musings">
                <h3>Musings</h3>
            </Link>
            <Link to="/booksiveread">
                <h3>Books I've Read</h3>
            </Link>
            <Link to="/wanttoread">
                <h3>Books I Want to Read</h3>
            </Link>
        </nav>
    );
}

export default Nav;