import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
import React from 'react';
import useTheme from '../Hooks/useTheme';
import Switch from './LightDarkToggleButton'; // 👈 Import the new Switch component

const Navbar = () => {
    // 🎣 Get the state and toggle function from the hook
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <div className='navbar-container'>
            <Link to={'/home'} className="navbar-brand"> 
                Tuan Chau
            </Link>
            
            {/* 🎯 Wrap links and switch in the new .nav-group */}
            <div className="nav-group"> 
                <div className="nav-links">
                    <Link to={'/photos'} className="nav-link"> 
                        Gallery
                    </Link>
                    <Link to={'/about'} className="nav-link"> 
                        About
                    </Link>
                </div>

                {/* ✅ Use the custom Switch component instead of the button */}
                <Switch 
                    isDarkMode={isDarkMode} // Pass current theme state
                    toggleDarkMode={toggleDarkMode} // Pass the toggle function
                />
            </div>
            {/* 🎯 End of .nav-group */}

        </div>
    );
}

export default Navbar;