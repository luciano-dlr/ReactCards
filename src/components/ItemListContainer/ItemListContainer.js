import './ItemListContainer.css'
import React from 'react'
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    // useEffect(() => {
    //     getProducts().then(Response => {
    //         setProductos(Response)


    //     })
    // }, [])

    useEffect(()=>{
        setLoading(true)
        if(!categoryId){
        getProducts()
        .then((Res)=>setProductos(Res))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))
    }else {
        getProductsByCategory(categoryId).then(response => {
            setProductos(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }
}, [categoryId])

if(loading) {
    return <h1>Loading...</h1>
}





 

    return (
        // <div>
        //     <h1>{prop.greeting}</h1>
        //     <ItemList productos={productos} />
        // </div >
        <>
        <h1 className='d-flex justify-content-center'>Ofertas destacadas</h1>
        { 
                productos.length > 0 
                    ? <ItemList productos={productos} />
                    : <h2>No hay productos</h2>
                }
        
        
       </> 
    )
}

export default ItemListContainer






