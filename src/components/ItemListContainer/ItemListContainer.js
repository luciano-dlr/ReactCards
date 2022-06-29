import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../../services/firestoreFetch';



const ItemListContainer = ({ greeting }) => {
    const [datos, setDatos] = useState([])

    const { idcategory } = useParams()


    useEffect(() => {
        firestoreFetch(idcategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idcategory]);


    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);


    return (
        <>
            <h1 className='d-flex justify-content-center'>{greeting}</h1>
            <ItemList productsList={datos} />
        </>
    );
}

export default ItemListContainer;