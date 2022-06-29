import { useContext } from "react"
import { CartContext } from "../Context/CartContext";
import React from "react"
import { Link } from "react-router-dom";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../../services/firebaseConfig';

const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {

        const itemsForDB = test.cartList.map(item => ({
            id: item.idItem,
            name: item.nameItem,
            price: item.priceItem,
            qty: item.quantityItem
        }));

        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
                stock: increment(-item.quantityItem)
            });
        });

        let order = {
            buyer: {
                name: "Comprador",
                email: "correo@correo.com",
                phone: "41482824"
            },
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
                            <button onClick={createOrder} className="btn btn-dark">Finalizar Compra</button>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
}

export default Cart;