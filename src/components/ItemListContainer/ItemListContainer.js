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
// import React, { useState, useEffect } from "react";
// import ItemDetail from "./ItemDetail";
// import { getProducts } from "../../asyncmock";
// import { Contador } from "../Contador/Contador";

// const ItemDetailContainer = () => {
//     const [productos, setProductos] = useState([])
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         setLoading(true)
//         getProducts
//             .then((res) => setProductos(res))
//             .catch((error) => console.log(error))
//             .finally(() => setLoading(false))
//     }, [])

//     const onAdd = (cantidad) => {
//         alert('Acabas de comprar  ' + cantidad + ' ' + productos.name)

//     }

//     return (
//         <>
//             {loading ? <p>Cargando...</p> : <ItemDetail productos={productos} />}
//             {/* <Contador stock={5} initial={1} onAdd={onAdd} /> */}
//         </>
//     )
// }

// export default ItemDetailContainer;


