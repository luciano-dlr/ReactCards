// import { useState, useEffect } from "react";
// import React from "react";


// const ItemCount = ({ stock = 100, initial = 0,  onAdd }) => {
//     const [add, setAdd] = useState(0);
    

//     useEffect(() => {
//         setAdd(1);
//     },[]);

//     const increment = () => {
//         if (add < stock) {
//             setAdd(add + 1);
//         }
//     }
    
//     const decrement = () => {
//         if (add > initial) {
//             setAdd(add - 1);
//         }
//     }
//     return(
//         <>
//         <div className="d-flex">
//             <button className="btn btn-dark" onClick={increment}>+</button>
//             <div className="">{add}</div>
//             <button className="btn btn-dark" onClick={decrement}>-</button>
//             {
//                 stock && add
//                 ? <button className="btn btn-dark mx-3" onClick={() => onAdd(add)}>Add to Cart</button>
//                 : <button className="btn btn-dark" >Add to Cart</button>
//             }
//         </div>
//         </>
//     );
// }

// export default ItemCount;