import React, { useState, useEffect } from 'react';


function Otr(props) {
    const [con, setc] = useState(0)
    const [con2, setc2] = useState(2)
    

    useEffect(() => {
        console.log('sir')
        document.title = `clao su ${con}`
    }
    )
    function inc() {
        if(con % 2 === 1) {
            setc2(prevCounter => prevCounter + 2)

        }
        setc(prevCounter => prevCounter +1)
    } 

    return (
        <div>
            <p>cont { con } || { con2 }
            </p>
            <button onClick={inc} >
                aume
            </button>
        </div>
    )
}
export default Otr