import React, { ReactElement, useState } from 'react'

const CustomUseCopyClipboard = (): ReactElement => {
    const [value, setValue] = useState<'wlgn829@gmail.com' | string>('');

    const copy = (copyValue: string) => {
        window.navigator.clipboard.writeText(copyValue);
        setValue(copyValue);
    }

    return (
        <div>
            <button
                onClick={() => copy('wlgn829@gmail.com')}
            >
                복사
            </button>
            <p>복사한 값 : {value}</p>
        </div>
    )
}

export default CustomUseCopyClipboard