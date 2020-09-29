import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Increment Counter!
             </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement Counter!
            </button>
        </>
    )
}

export default Counter;