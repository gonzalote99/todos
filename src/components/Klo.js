import React, { useState, useEffect, useRef, useLayoutEffect } from 'react' 

export default function Klo() {
    const [name, setName] = useState('')
    const prevN = useRef()
 

    useLayoutEffect(() => {
      prevN.current = name
    }, [name])
    
    return (
        <>
        <input  value={name} onChange={e => setName(e.target.value)}/>
    <div>pol {name} LOS {prevN.current}</div>
        
        </>
    )
}