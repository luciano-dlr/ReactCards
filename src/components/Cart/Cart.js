import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext";
import React from "react"
import { Link } from "react-router-dom";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment, addDoc } from "firebase/firestore";
import db from '../../services/firebaseConfig';
import Formulario from "../Form/Formulario";
import { useForm } from "react-hook-form";


const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {

        const itemsForDB = test.cartList.map(item => ({
            id: item.idItem,
            name: item.nameItem,
            price: item.priceItem,
            qty: item.quantityItem,
            cliente: datos,
        }));

        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
                stock: increment(-item.quantityItem)
            });
        });

        let order = {
            total: test.sumaTotalProduct(),
            items: itemsForDB,
            date: serverTimestamp()
        };


        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
            .then(result => alert('Su id de orden es ID: ' + result.id))
            .catch(err => console.log(err));


        test.removeList();
    }


    const { register } = useForm();
    const { cartList, sumaTotalProduct, removeList } = useContext(CartContext)

    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        cel: '',
        direccion: '',
    })
    const crearOrder = (e) => {
        e.preventDefault();
        const ObjOrden = {
            cliente: datos,
            items: cartList,
            total: sumaTotalProduct()
        }
        const coleccion = collection(db, 'orders')
        addDoc(coleccion, ObjOrden).then(({ id }) => {
            console.log(datos);
            // Swal.fire({
            //     title: `Su compra de ${datos.nombre} esta en camino`,
            //     text: `Se creo la orden con el id ${id}`,
            //     icon: 'success',
            // })
            alert('Su compra de' `${datos.nombre}` `Se creo la orden con el id ${id}`)
        })
        removeList()
    }
    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        // Swal.fire({
        //     title: 'Error',
        //     Text: 'Campos requeridos',
        //     icon: 'error'
        // })
        alert('error')

    }


































    return (
        <div className="container">

            <div className="my-3">
                <Link to='/'><button className="btn btn-dark mx-3">AGREGAR PRODUCTOS</button></Link>
                {
                    (test.cartList.length > 0)
                        ? <button className="btn btn-dark" type="filled" onClick={test.removeList}>BORRAR PRODUCTOS</button>
                        : <p className="my-5 mx-3">Tu carrito esta vacio</p>
                }
            </div>
            <div className="row">


                {
                    test.cartList.length > 0 &&
                    test.cartList.map(item =>
                        <div className="col-8" key={item.idItem}>
                            <div>
                                <img src={item.imgItem} alt='img' width='300px' height='400px' />
                                <div>
                                    <span>
                                        <b>Producto:</b> {item.nameItem}
                                    </span>
                                    <button className='btn btn-dark mx-3' type="filled" onClick={() => test.deleteItem(item.idItem)}>BORRAR</button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>{item.quantityItem} Producto(S)</h3>

                                    <h3> {item.priceItem}</h3>
                                </div>
                                <h3>Total: $ {test.calcTotalPerItem(item.idItem)} </h3>
                            </div>
                        </div>
                    )
                }
                <br></br>

                {
                    test.cartList.length > 0 &&
                    <div className="col-4">
                        <div className="card border border-2 border-dark">
                            <h2>Tu pedido:</h2>
                            <div>
                                <p>Total: ${test.sumaTotalProduct()} </p>

                            </div>
                            <label >Nombre completo
                                <input type="text" placeholder="Escribe tu nombre"
                                    {...register('nombre', { required: true, message: 'campo requerido' })}
                                    onChange={handleInputChange}
                                    value={datos.nombre} />
                            </label>
                            <button onClick={createOrder} className="btn btn-dark">Finalizar Compra</button>
                        </div>
                    </div>
                }

            </div>
            {/* <Formulario /> */}
        </div>
    );
}

export default Cart;