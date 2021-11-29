import React from 'react';
import { Link } from 'react-router-dom'


function Nav(props) {
    return (
        <nav id="nav-bar">
            <Link to="/">
                <h3>Home</h3>
            </Link>
            <Link to="/randombook">
                <h3>Random Book Generator</h3>
            </Link>
            <Link to="/musings">
                <h3>Musings</h3>
            </Link>
        </nav>
    );
}

export default Nav;