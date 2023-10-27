import React, { ReactElement, useState } from 'react'

const CustomUseClickAnyWhere = (): ReactElement => {

    const [value, setValue] = useState<boolean>(false);

    return (
        <div onClick={() => setValue(!value)}>
            value : {value ? 1 : 0}
        </div>
    )
}

export default CustomUseClickAnyWhere