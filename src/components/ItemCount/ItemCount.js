// import './Contador.css'
// import React, { useState } from 'react'


// export const Contador = ({ stock, initial, onAdd }) => {

//   const [numero, setNumero] = useState(initial)

//   const mas = () => {
//     if (numero < stock) {
//       setNumero(numero + 1)

//     }
//   }

//   const menos = () => {
//     if (numero > 1) {
//       setNumero(numero - 1)

//     }

//   }

//   const comprar = () => {
//     onAdd(numero);
//     setNumero(1)
//     console.log(numero)
//   }

//   return (
//     <div className='d-flex align-items-center justify-content-center dark ' style={{ backgroundColor: 'white' }}>

//       <button className="btn btn-outline-dark" onClick={mas}> + </button>
//       <span className='text-dark'>{numero}</span>
//       <button className="btn btn-outline-dark" onClick={menos}> - </button>
//       <div >
//         <button className="btn btn-outline-dark" onClick={comprar}>Comprar</button>

//       </div>

//     </div>
//   )
// }

import { useState, useEffect } from "react";
import React from "react";


const ItemCount = ({ stock = 100, initial = 0, onAdd }) => {
  const [add, setAdd] = useState(0);


  useEffect(() => {
    setAdd(1);
  }, []);

  const increment = () => {
    if (add < stock) {
      setAdd(add + 1);
    }
  }

  const decrement = () => {
    if (add > initial) {
      setAdd(add - 1);
    }
  }
  return (
    <>
      <div className="d-flex">
        <button className="btn btn-dark" onClick={increment}>+</button>
        <div className="">{add}</div>
        <button className="btn btn-dark" onClick={decrement}>-</button>
        {
          stock && add
            ? <button className="btn btn-dark mx-3" onClick={() => onAdd(add)}>Add to Cart</button>
            : <button className="btn btn-dark" >Add to Cart</button>
        }
      </div>
    </>
  );
}

export default ItemCount;



