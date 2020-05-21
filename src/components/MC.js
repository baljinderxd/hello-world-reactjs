import React from 'react'

function MC({name}) {
    console.log('Rendering MC')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MC)
