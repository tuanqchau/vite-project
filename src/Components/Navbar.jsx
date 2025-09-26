import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <Link to={'/home'} className="navbar-brand"> 
                Tuan Chau
            </Link>
            <div className="nav-links">
                <Link to={'/photos'} className="nav-link"> 
                    Gallery
                </Link>
                {/* <Link to={'/map'} className='nav-link'>
                    Map
                </Link> */}
                <Link to={'/about'} className="nav-link"> 
                    About
                </Link>
            </div>
        </div>
    );
}

export default Navbar;