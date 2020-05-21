import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['bruce','clark','diana']
    const namelist = names.map((name,index) => <h2 key={index}>{index} {name} </h2>)
    return (
        <div>
            {  
               namelist
            }
        </div>
    )
}

export default NameList
