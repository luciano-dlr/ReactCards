import './NavBar.css'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark navBar_container">
                <Link to='/' className="btn btn-outline-light categorys">Todos</Link>
                <div className="nav-item">
                    <NavLink to='/category/smart'><div className="btn btn-outline-light categorys" aria-current="page" href="#">Smart</div></NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to='/category/monitor'><div className="btn btn-outline-light categorys" aria-current="page" href="#">Monitor</div></NavLink>
                </div>
                <CartWidget />
            </nav>

        </div>
    )
}

export default Navbar;



