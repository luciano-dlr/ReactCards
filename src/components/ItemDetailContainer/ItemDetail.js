import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts().then(Response => {
            setProductos(Response)
        })
    }, [])

    function ItemDetail({ item }) {

        return (
            <div>
                {/* // Desarrolla la vista de detalle expandida del producto con su imagen título, descripción y precio */}
            </div>
        )

    }



    return (
        <div >



        </div>
    )

}


export default ItemDetailContainer