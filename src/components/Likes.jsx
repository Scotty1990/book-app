import React, { useState } from 'react';

function Likes() {
    const [count, setCount] = useState(0)
    // comment so I can see if that works
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    );
}

export default Likes;