import { useState, useEffect } from 'react';

export default function DocAu() {
    const [count, setCount] = useState(0);

    useEffect(() => {

    }, [count]);

    const inc = () => {
        setCount(count + 1)
    }
    const dec = () => {
        setCount(count - 1)
    }

    return {
        count,
        inc,
        dec
    }

}