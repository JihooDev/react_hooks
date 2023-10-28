import React, { ReactElement, useEffect, useState } from 'react'

const CustomUseDarkMode = (): ReactElement => {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
    const darkModeKey = 'usehooks-ts-dark-mode';
    const localData = localStorage.getItem(darkModeKey);

    useEffect(() => {
        if (!localData) {
            localStorage.setItem(darkModeKey, 'true');
        }
    }, [])

    const toggle = () => {

        if (localData === 'true') {
            setIsDarkMode(false);
            localStorage.setItem(darkModeKey, 'false');
        }

        if (localData === 'false') {
            setIsDarkMode(true);
            localStorage.setItem(darkModeKey, 'true');
        }
    }

    const enable = () => {
        setIsDarkMode(true);
        localStorage.setItem(darkModeKey, 'true');
    }

    const disable = () => {
        setIsDarkMode(false);
        localStorage.setItem(darkModeKey, 'false');
    }

    return (
        <div>
            <p>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
            <button onClick={toggle}>Toggle</button>
            <button onClick={enable}>Enable</button>
            <button onClick={disable}>Disable</button>
        </div>
    )
}

export default CustomUseDarkMode