// import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <div>
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div className="navbar-brand m-3 "><Link to='/'>mercadolibre</Link></div>
                        <button className="navbar-toggler " type="button " data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto ml-5 mb-lg-0 mx-3">

                                <li className="nav-item">
                                    <NavLink to='/category/smart'><div className="nav-link active" aria-current="page" href="#">Smart</div></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/category/monitor'><div className="nav-link active" aria-current="page" href="#">Monitor</div></NavLink>
                                </li>
                            </ul>
                            <Link to='/cart'><CartWidget /></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
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



