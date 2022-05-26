import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";



const ItemListContainer = (prop) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts().then(Response => {
            setProductos(Response)


        })
    }, [])



 

    return (
        <div>
            <h1>{prop.greeting}</h1>
            <ItemList productos={productos} />
        </div >
    )
}

export default ItemListContainer