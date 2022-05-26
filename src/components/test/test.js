import React , { useState } from 'react'


export const test = () => {

    
    const [numero, setNumero] = useState(0)
   

    const mas = () =>{
        setNumero(numero+1)
    }

    const menos  = () => {

        setNumero(numero-1)

    }

  return (
    <div>
    <button onClick ={mas}> + </button>
    <h1>{numero}</h1>
    <button onClick ={menos}> - </button>
</div>
  )
}


