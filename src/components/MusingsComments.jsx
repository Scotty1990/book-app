import React, { useState } from 'react';

function MusingsComments(props) {
//     const initialState = [{
//         input: '',
//     },
//    ];

    const [musings, setMusings] = useState(props.initialState)

    
    
        return ( 
            <div>
                {props.muse.input}
                 
            </div> 
        );
       
}

export default MusingsComments;