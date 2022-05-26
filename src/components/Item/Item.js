import './Item.css'
import React from "react";
import { Contador } from "../Contador/Contador";

const Item = ({ product }) => {

    const onAdd = (cantidad) => {
        alert('Acabas de comprar  ' + cantidad + ' ' + product.name)

    }


    return (
        <div className="card mx-5" style={{ backgroundColor: '#fff', width: '28rem', margin: '.5rem' }}>
            <img src={product.img} className="card-img" alt={product.name} />

            <div className="card-body">
                <p className="card-text fw-bold">{product.name}</p>
                <p className="card-text description">{product.description}</p>
            </div>
            <div className='card-footer' style={{ backgroundColor: '#fff' }}>
                <button className='btn btn-outline-dark'>Ver Mas</button>

            </div>
            <Contador stock={10} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default Item;