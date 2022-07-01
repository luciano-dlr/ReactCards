// import { useForm } from "react-hook-form";
// import { useState, useContext } from "react";
// import { addDoc, collection } from 'firebase/firestore'
// import db from "../../services/firebaseConfig";
// import { Link } from "react-router-dom";
// import { CartContext } from "../Context/CartContext";
// // import Swal from 'sweetalert2'

// const Formulario = () => {
//     const { register } = useForm();
//     const { cartList, sumaTotalProduct, removeList } = useContext(CartContext)

//     const [datos, setDatos] = useState({
//         nombre: '',
//         email: '',
//         cel: '',
//         direccion: '',
//     })
//     const crearOrder = (e) => {
//         e.preventDefault();
//         const ObjOrden = {
//             cliente: datos,
//             items: cartList,
//             total: sumaTotalProduct()
//         }
//         const coleccion = collection(db, 'orders')
//         addDoc(coleccion, ObjOrden).then(({ id }) => {
//             console.log(datos);
//             // Swal.fire({
//             //     title: `Su compra de ${datos.nombre} esta en camino`,
//             //     text: `Se creo la orden con el id ${id}`,
//             //     icon: 'success',
//             // })
//             alert('Su compra de' `${datos.nombre}` `Se creo la orden con el id ${id}`)
//         })
//         removeList()
//     }
//     const handleInputChange = (e) => {
//         setDatos({
//             ...datos,
//             [e.target.name]: e.target.value
//         })
//     }


//     const handleSubmit = (e) => {
//         // Swal.fire({
//         //     title: 'Error',
//         //     Text: 'Campos requeridos',
//         //     icon: 'error'
//         // })
//         alert('error')

//     }




//     return (
//         <form onSubmit={handleSubmit} class="row ">
//             <div class="col-sm-3">
//                 <label >Nombre completo
//                     <input type="text" placeholder="Escribe tu nombre"
//                         {...register('nombre', { required: true, message: 'campo requerido' })}
//                         onChange={handleInputChange}
//                         value={datos.nombre} />
//                 </label>
//             </div>
//             <div class="col-sm-3">
//                 <label >cel:</label>
//                 <div >

//                     <input type="number" placeholder="cel"{...register('cel', { required: true, message: 'campo requerido' })}
//                         onChange={handleInputChange}
//                         value={datos.cel} />
//                 </div>
//             </div>

//             <label >email @</label>
//             <div >

//                 <input type="text" placeholder="email"{...register('email', { required: true, message: 'campo requerido' })}
//                     onChange={handleInputChange}
//                     value={datos.email} />
//             </div>
//             <label >direccion</label>
//             <div class="col-auto">
//                 <div >
//                     <input type="text" style={{ display: 'flex' }}{...register('direccion', { required: true, message: 'campo requerido' })}
//                         onChange={handleInputChange}
//                         value={datos.direccion} />
//                 </div>
//             </div>
//             <div class="col-auto">
//                 <Link to='/' type="submit" class="btn btn-primary" onClick={crearOrder}>enviar</Link>
//             </div>
//         </form>

//     )
// }
// export default Formulario