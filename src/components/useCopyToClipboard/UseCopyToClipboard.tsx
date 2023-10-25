import React, { ReactElement, useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

const UseCopyToClipboard = (): ReactElement => {
    const [value, copy] = useCopyToClipboard();

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

export default UseCopyToClipboard