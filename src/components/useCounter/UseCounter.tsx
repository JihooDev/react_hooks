import React, { ReactElement } from 'react'
import { useCounter } from 'usehooks-ts'

const UseCounter = (): ReactElement => {
    const { count, setCount, increment, decrement, reset } = useCounter(0);

    const multiplyBy2 = () => setCount((x: number) => x * 2)

    return (
        <>
            <p>Count is {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={multiplyBy2}>Multiply by 2</button>
        </>
    )
}

export default UseCounter