import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { useBoolean } from 'usehooks-ts'

const UseBoolean = () => {

    const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
    const customToggle = () => setValue((x: boolean) => !x);

    return (
        <div>
            <h1>{!value ? 0 : 1}</h1>
            <button onClick={setTrue}>set true</button>
            <button onClick={setFalse}>set false</button>
            <button onClick={toggle}>toggle</button>
            <button onClick={customToggle}>custom toggle</button>
        </div>
    )
}


export default UseBoolean