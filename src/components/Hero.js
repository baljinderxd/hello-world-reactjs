import React from 'react'

function Hero({heroname}) {
   if(heroname === 'Joker'){
       throw new Error('Not a hero xd')
   }
    return (
        <div>
            {heroname}
        </div>
    )
}

export default Hero
