// components/NavBar/NavBar.jsx
import React from 'react';
import imglogo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
import CartWidget from "./CartWidget"


const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <img src={imglogo} alt="Logo" />
      </Link>

      {/* Categorías */}
      <ul className="navbar-categories">
        <li><Link to="/category/cajas" >Cajas</Link></li>
        <li><Link to="/category/bolsas">Bolsas</Link></li>
        <li><Link to="/category/envoltorios">Envoltorios</Link></li>
      </ul>

      {/* Carrito */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;