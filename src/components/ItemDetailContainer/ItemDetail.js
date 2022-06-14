import React from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";



const ItemDetail =({item})=>{
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    


    const onAdd = (qty) => {
        alert(`You have selected ${qty} items`);
        setItemCount(qty);
        test.addToCart(item, qty);
    }
    return(
        <> 
           {
                item && item.img
                ?  
            
            <div className='card'>
            <h4>{item.name}</h4>
            <div>
                <img src={item.img} alt={item.name} width='300px' height='400px'/>
            </div>
            <h5>{item.details}</h5>
            <h5>Precio: ${item.price}</h5>  
            <h5>{item.stock} unidades en stock</h5>

            {
                itemCount === 0
                ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                : <Link to='/cart'><button className="btn btn-dark">Finalizar Compra</button></Link>
            }       
            </div>
             : <p>Cargando...</p> 
        }

        </>
    );
}
        



export default ItemDetail;