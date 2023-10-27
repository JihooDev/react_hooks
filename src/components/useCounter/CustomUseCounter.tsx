import React, { ReactElement, useState } from 'react'

const CustomUseCounter = (): ReactElement => {

    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount((prev: number) => prev + 1);
    }

    const decrement = () => {
        setCount((prev: number) => prev - 1);
    }

    const reset = () => {
        setCount(0);
    }

    const multiplyBy2 = () => {
        setCount((prev: number) => prev * 2);
    }

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={multiplyBy2}>Multiply by 2</button>
        </div>
    )
}

export default CustomUseCounter