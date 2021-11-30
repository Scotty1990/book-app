import React, { useState } from 'react';
import MusingsComments from './MusingsComments';

function Musings() {
    const [input, setInput] = useState([])
    const [musings, setMusings] = useState([])
   
    function handleChange(event) {
        // setMusings({...musings, input: event.target.value})
        setInput(input => [...input, event.target.value])
    }

    function handleSubmit(event) {
        event.preventDefault();
        setMusings(musings => [...musings, input[input.length - 2]])
        
    
        console.log(musings)
    }
    // const [musings, setMusings] = useState([])
    // const [input, setInput] = useState([])
    // let newMusing = ''
    // function handleChange(event) {
    //     // setMusings({...musings, input: event.target.value})
    //     setMusings(musings => [...musings, event.target.value])
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     setInput(input => [...input, musings[musings.length - 2]])
        
    //     newMusing = musings[musings.length - 2]
    //     console.log(input)
    // }

    // function onClick(event) {
    //     setMusings(musings => [...musings, event.target.value])
    // }

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
                
                {/* <p id="musingsId" display={inputDisplay ? "block" : "none"}>{musings.input}</p> */}
                
        </div>
    );
}

export default Musings;