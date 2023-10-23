import React, { useState } from 'react'
import { useClickAnyWhere } from 'usehooks-ts';

const UseClickAnyWhere = () => {
    const [count, setCount] = useState<number>(0);

    useClickAnyWhere(() => {
        setCount((prev: number) => prev + 1);
    })

    return (
        <div>count : {count}</div>
    )
}

export default UseClickAnyWhere