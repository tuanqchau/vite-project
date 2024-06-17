import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
import React, { useState, useContext } from 'react';
//import { CursorContext } from '../context/CursorContext';
const Navbar = () => {
    //const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

    return (
        <div className='navbar-container'>
            {/* <Link to={'/home'} className="nav-link"> 
            Home
            </Link> */}
            <Link to={'/photos'} className="nav-link"> 
            Gallery
            </Link>
            <Link to={'/map'} className='nav-link'>
            Map
            </Link>
            <Link to={'/about'} className="nav-link"> 
            About
            </Link>

            
        </div>
        
    );
}

export default Navbar;