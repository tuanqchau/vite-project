import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
import React, { useState, useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
const Navbar = () => {
    const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

    return (
        <div className='navbar-container'>
            <Link to={'/home'} className="nav-link" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}> 
            Home
            </Link>
            <Link to={'/photos'} className="nav-link" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}> 
            Gallery
            </Link>
            <Link to={'/about'} className="nav-link" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}> 
            About
            </Link>

            
        </div>
        
    );
}

export default Navbar;