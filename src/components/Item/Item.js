import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    const { id, name, img, price } = product



    return (
        <div className="card border-0" style={{ width: '18rem', margin: '.5rem' }}>
            <img src={img} className="card-img-top" alt={name} />

            <div className="card-body">
                <h3 className="card-text mx-5">{name}</h3>
                <Link to={`/item/${id}`}><h5 className="mx-5">COMPRAR</h5></Link>
                <div className="card-text mx-5"><h4>Precio: ${price}</h4></div>
            </div>
        </div>
    )
}

export default Item;