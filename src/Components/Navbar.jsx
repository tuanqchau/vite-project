import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
import React from 'react';
import useTheme from '../Hooks/useTheme'; // 👈 Import the custom hook

const Navbar = () => {
    // 🎣 Get the state and toggle function from the hook
    const { isDarkMode, toggleDarkMode } = useTheme();

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

            {/* ✅ The button now correctly uses the theme logic */}
            <button 
                className='theme-toggle-button' 
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
                {isDarkMode ? '☀️' : '🌙'}
            </button>
        </div>
    );
}

export default Navbar;