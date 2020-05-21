import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
                I am {person.name}, have {person.power}
            </h2>
        </div>
    )
}

export default Person
