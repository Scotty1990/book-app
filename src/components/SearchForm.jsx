import React from 'react';

function SearchForm(props) {
    return (
        <form>
            <input
                placeholder="Search"
                type="text"
                name="searchString"
                required
                // onChange={handleChange}
                // value={searchString} 
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;