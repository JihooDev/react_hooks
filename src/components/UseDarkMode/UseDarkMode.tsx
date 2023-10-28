import React from 'react'
import { useDarkMode } from 'usehooks-ts'

const UseDarkMode = () => {

    // 세팅하는 순간 localStorage에 usehooks-ts-dark-mode 가 true 로 설정됨
    const { isDarkMode, toggle, enable, disable } = useDarkMode()

    return (
        <div>
            <p>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
            <button onClick={toggle}>Toggle</button>
            <button onClick={enable}>Enable</button>
            <button onClick={disable}>Disable</button>
        </div>
    )
}

export default UseDarkMode