import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProducts().then(Response => {
            setProductos(Response)


        })
    }, [])

    return (
        <div>
            <ItemDetail productos={productos} />
        </div >
    )
}

export default ItemDetailContainer;