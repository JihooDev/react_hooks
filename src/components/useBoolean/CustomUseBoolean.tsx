import React, { ReactElement, useState } from 'react'

const CustomUseBoolean = (): ReactElement => {

    const [value, setValue] = useState<boolean>(false);

    const setTrue = () => {
        if (!value) setValue(true);
    }

    const setFalse = () => {
        if (value) setValue(false);
    }

    const toggle = () => {
        setValue(!value);
    }

    return (
        <div>
            <h1>{!value ? 0 : 1}</h1>
            <button onClick={setTrue}>set true</button>
            <button onClick={setFalse}>set false</button>
            <button onClick={toggle}>toggle</button>
        </div>
    )
}

export default CustomUseBoolean