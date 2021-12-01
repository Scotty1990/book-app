import React, { useState } from 'react';

function Musings() {
    const [input, setInput] = useState([])
    const [musings, setMusings] = useState([])
   
    function handleChange(event) {
        setInput(input => [...input, event.target.value])
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Don't know why it has to be input.length - 2. I feel like - 1 should work
        setMusings(musings => [...musings, input[input.length - 2]])
        // this is one entry behind, reminds me of that time when Tristan had the same problem
        // either way it's working where it's supposed to
        console.log(musings)
    }
   
    return (
        <div>
            Welcome to the Musings section! Have something you liked about an author or a book? Jot it down! Something you dislike? Let the world know your thoughts!
            <form id="musings-form" onSubmit={handleSubmit}>
                <input id="musings-input" type="text" onChange={handleChange} />        
                <button onClick={handleChange}>submit</button>  
            </form>
           
            {musings.map((muse) => {
               return (
                   <p>{muse}</p>
                
               )
            })}
        </div>
    );
}

export default Musings;