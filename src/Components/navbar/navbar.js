import React from 'react'
import './navbar.css'
function Navbar() {
    return ( 
        <>
        //navbar
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo">
                    TRVL <i className="fab fa-typo3"></i>
                </a>
                <div className="menu-icon">
                    <i className="fas fa-bars"></i>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#home" className="nav-links">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-links">
                            Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#products" className="nav-links">
                            Products
                        </a>
                    </li>
                </ul>
            </div>
        </>
     );
}

export default Navbar;
