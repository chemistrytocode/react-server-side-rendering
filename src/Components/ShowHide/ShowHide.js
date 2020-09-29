import React, { useState } from 'react';

const ShowHide = () => {
    const [visible, setVisible] = useState(true);

    return (
        <>
            <button onClick={() => setVisible(prevVisible => !prevVisible)}>
                Toggle Display!
             </button>
            { visible ? <p>Display is Visible!</p> : null}
        </>
    )
}

export default ShowHide;