import React, { useState } from 'react';
import Likes from './Likes';

function Musings() {
    const [input, setInput] = useState([])
    const [musings, setMusings] = useState([])
    const [text, setText] = useState()
   
    function handleChange(event) {
        setText(event.target.value)
        setInput(input => [...input, event.target.value])
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Don't know why it has to be input.length - 2. I feel like - 1 should work
        setMusings(musings => [...musings, input[input.length - 2]])
        /* this was one entry behind, reminds me of that time when 
           Tristan had the same problem. Either way it's working 
           where it's supposed to console.log(input) */
           
        setText('')
    }
   
    return (
        <div id="musingsDiv">
            <p id="musings-intro">Welcome to the Musings section! Have something you liked about an author or a book? Jot it down! Something you dislike? Let the world know your thoughts!</p>
            <form id="musings-form" onSubmit={handleSubmit}>
                <textarea cols="50" rows="10" onChange={handleChange} value={text}></textarea>        
                <button onClick={handleChange}>submit</button>  
            </form>
            <div id="musingsMap">
                {musings.map((muse) => {
                    return (
                        <div className="musings-container">
                            <p className="individual-musings">{muse}</p>
                            <Likes />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Musings;