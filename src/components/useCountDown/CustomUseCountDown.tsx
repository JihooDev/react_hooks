import React, { ReactElement, useCallback, useState } from 'react'

const CustomUseCountDown = (): ReactElement => {

    const defaultCount = 5000;

    const [count, setCount] = useState<number>(defaultCount);
    const [intervalCount, setIntervalCount] = useState<number>(1000);
    const [timer, setTimer] = useState<NodeJS.Timer>();
    const [intervalState, setIntervalState] = useState<boolean>(false);

    const startCountdown = (countNum: number) => {
        if (intervalState) return;
        stopCountdown();

        setIntervalState(true);
        let interval = setInterval(() => {
            setCount((prev: number) => prev - 1);
        }, countNum);

        setTimer(interval);
    }

    const stopCountdown = () => {
        clearInterval(timer);
        setIntervalState(false);
    }

    const resetCountdown = () => {
        stopCountdown();
        setCount(defaultCount);
        setIntervalState(false);
    }

    const handleChangeIntervalValue = (countValue: number) => {
        setIntervalCount(countValue);
    }

    return (
        <div>
            <p>Count: {count}</p>

            <input
                type="number"
                value={intervalCount}
                onChange={(e) => handleChangeIntervalValue(Number(e.target.value))}
            />
            <button onClick={() => startCountdown(intervalCount)}>start</button>
            <button onClick={stopCountdown}>stop</button>
            <button onClick={resetCountdown}>reset</button>
        </div>
    )
}

export default CustomUseCountDown