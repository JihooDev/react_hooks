import React, { ChangeEvent, ReactElement, useState } from 'react'
import { useCountdown } from 'usehooks-ts';

// using usehooks-ts
const UseCountDown = (): ReactElement => {
    const [intervalCount, setIntervalCount] = useState<number>(1000);
    const [count, { startCountdown, stopCountdown, resetCountdown }] =
        useCountdown({
            countStart: 5000,
            intervalMs: intervalCount,
        })

    const handleChangeIntervalValue = (event: ChangeEvent<HTMLInputElement>) => {
        setIntervalCount(Number(event.target.value))
    }

    return (
        <div>
            <p>Count: {count}</p>

            <input
                type="number"
                value={intervalCount}
                onChange={handleChangeIntervalValue}
            />
            <button onClick={startCountdown}>start</button>
            <button onClick={stopCountdown}>stop</button>
            <button onClick={resetCountdown}>reset</button>
        </div>
    )
}


export default UseCountDown