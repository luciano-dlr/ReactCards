import React from "react";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ product }) => {
    const { id, name, img, price } = product



    return (
        <div className="card border-1" style={{ width: '18rem', margin: '.5rem' }}>
            <img src={img} className="card-img-top" alt={name} />

            <div className="card-body fondo_card">
                <h3 className="card-text title">{name}</h3>
                <Link to={`/item/${id}`}><h5 className="btn">COMPRAR</h5></Link>
                <div className=""><h4>Precio: ${price}</h4></div>
            </div>
        </div>
    )
}

export default Item;