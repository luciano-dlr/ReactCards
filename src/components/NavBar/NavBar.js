// import './NavBar.css'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <>
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand m-3" href='#'><Link to='/'>HOME</Link></a>
                        <button className="navbar-toggler " type="button " data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto ml-5 mb-lg-0 mx-3">

                                <li className="nav-item">
                                    <NavLink to='/category/Es smart'><a className="nav-link active" aria-current="page" href="#">Es smart</a></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/category/Monitores'><a className="nav-link active" aria-current="page" href="#">Monitores</a></NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Contacto</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                {/* <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input> */}
                                {/* <button className="btn btn-outline-success btn-dark btn-outline-light" type="submit">Buscar</button> */}
                            </form>
                            <Link to='/cart'><CartWidget /></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;






// const NavBar = ({ boton1, boton2, boton3, boton4 }) => {

//     return (
//         <div>
//             <ul className="nav justify-content-center justify-item-spo">
//                 <li className="nav-item">
//                     <a className="nav-link btn btn-outline-dark">{boton1}<Link to='/'>Lugar 1</Link></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link btn btn-outline-dark">{boton2}<NavLink to='/'>Lugar 2</NavLink></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link btn btn-outline-dark">{boton3}</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link btn btn-outline-dark">{boton4}</a>
//                 </li>
//                 <li className='nav-item'>
//                     <a className="nav-link">
//                         <Link to='/carrito'><CartWidget></CartWidget></Link>
//                     </a>
//                 </li>
//             </ul>
//         </div>
//     )
// }

// export default NavBar;

// import 'bootstrap/dist/css/bootstrap.min.css'



