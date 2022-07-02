import React from "react";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ product }) => {
    const { id, name, img, price } = product



    return (
        <div className="card border-1" style={{ width: '18rem', margin: '.5rem' }}>
            <img src={img} className="card-img-top" alt={name} />

            <div className="card-body fondo_card">
                <h3 className="card-text mx-5">{name}</h3>
                <Link to={`/item/${id}`}><h5 className="mx-5 btn">COMPRAR</h5></Link>
                <div className="card-text mx-5 "><h4>Precio: ${price}</h4></div>
            </div>
        </div>
    )
}

export default Item;