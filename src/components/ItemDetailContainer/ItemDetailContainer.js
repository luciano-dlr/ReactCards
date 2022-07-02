import { useState, useEffect } from 'react'
import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreFetchOne } from '../../services/firestoreFetch'


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;