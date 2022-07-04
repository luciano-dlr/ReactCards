import { useContext } from "react"
import { CartContext } from "../Context/CartContext";
import React from "react"
import { Link } from "react-router-dom";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../../services/firebaseConfig';
import { useForm } from "../../hooks/useForm";


const Cart = () => {


    const [formValues, handleImputChange] = useForm({
        nombre: '',
        email: '',
        cel: '',
        direccion: '',
    })

    const { nombre, email, cel, direccion } = formValues;


    const test = useContext(CartContext);


    const createOrder = (e) => {
        e.preventDefault()
        const itemsForDB = test.cartList.map(item => ({
            id: item.idItem,
            name: item.nameItem,
            price: item.priceItem,
            qty: item.quantityItem,
            cliente: formValues,
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
            .catch(err => console.log(err) + alert());


        test.removeList();
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
                {
                    test.cartList.length > 0 &&
                    <div className="col-4">
                        <div className="card border border-2 border-dark">
                            <h2>Tu pedido:</h2>
                            <div>
                                <p>Total: ${test.sumaTotalProduct()} </p>

                            </div>

                            <form className="row" onSubmit={createOrder}>

                                <label >Nombre completo</label>
                                <input
                                    name="nombre"
                                    type="text"
                                    placeholder="Escribe tu nombre"
                                    onChange={handleImputChange}
                                    value={nombre} required />

                                <label >Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Escribe tu Email"
                                    onChange={handleImputChange}
                                    value={email} required />

                                <label >Telefono</label>
                                <input
                                    name="cel"
                                    type="number"
                                    placeholder="telefono (opcional)"
                                    onChange={handleImputChange}
                                    value={cel} required />

                                <label >Direccion</label>
                                <input
                                    name="direccion"
                                    type="text"
                                    placeholder="Direccion"
                                    onChange={handleImputChange}
                                    value={direccion} required />

                                <button type="submit" className="btn btn-dark mt-5" onSubmit={createOrder} >Finalizar Compra</button>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Cart;

