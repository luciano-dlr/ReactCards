import { useState, useEffect } from 'react'
import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
const productos = require('../../asyncmock').default;


const ItemDetailContainer = () =>{
    const [dato, setDato] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    
    
    useEffect(()=>{
    let isok = true;
    
    const data = (time, task) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (isok) {
                    resolve(task);
                } else {
                    reject("Error setDato");
                }
            }, time);
        });
    }
    setLoading(true)
    data(200, productos.find(item => item.id === parseInt(id)))
        .then((res) => setDato(res))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    },[id]);
    
    
        return (
            <>
                {loading ? <h1>Cargando...</h1> : <ItemDetail item={dato}/>}
            
            </>
    
        )
    }

export default ItemDetailContainer;