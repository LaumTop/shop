import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Logo + nosaukums</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Mājas</Link></li>
                <li><Link to="/Contacts">Kontakti</Link></li>
                <li><Link to="/About">Par mums</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
