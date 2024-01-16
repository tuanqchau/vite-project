import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
const Navbar = () => {

    return (
        <div className='navbar-container'>
            <Link to={'/home'} className="nav-link"> 
            Home
            </Link>
            <Link to={'/photos'} className="nav-link"> 
            Gallery
            </Link>
            <Link to={'/about'} className="nav-link"> 
            About
            </Link>

            
        </div>
        
    );
}

export default Navbar;