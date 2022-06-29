// import './Item.css'
// import React from "react";
// import { Contador } from "../Contador/Contador";

// const Item = ({ product }) => {

//     const onAdd = (cantidad) => {
//         alert('Acabas de comprar  ' + cantidad + ' ' + product.name)

//     }


//     return (
//         <div className="card mx-5" style={{ backgroundColor: '#fff', width: '28rem', margin: '.5rem' }}>
//             <img src={product.img} className="card-img" alt={product.name} />

//             <div className="card-body">
//                 <p className="card-text fw-bold">{product.name}</p>
//                 <p className="card-text description">{product.description}</p>
//             </div>
//             <div className='card-footer' style={{ backgroundColor: '#fff' }}>

// {/* <button className='btn btn-outline-dark'>Ver Mas</button> */}
//             </div>
//             <Contador stock={10} initial={1} onAdd={onAdd} />
//         </div>
//     )
// }

// export default Item;



import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    const { id, name, img, price } = product



    return (
        <div className="card border-0" style={{ width: '18rem', margin: '.5rem' }}>
            <img src={img} className="card-img-top" alt={name} />

            <div className="card-body">
                <h3 className="card-text mx-5">{name}</h3>
                <Link to={`/item/${id}`}><h5 className="mx-5">Detalles</h5></Link>
                <div className="card-text mx-5"><h4>Precio: ${price}</h4></div>
            </div>
        </div>
    )
}

export default Item;