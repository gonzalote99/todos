import React, {useState} from 'react'



function Las() {
const [count, setCount] = useState(2)


    return (
        <div>
         <button onClick={() => setCount(count + 3)}>pong {count}</button>
         </div>
        
    )
}

export default Las

