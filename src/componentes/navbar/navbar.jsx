// components/NavBar/NavBar.jsx
import React from 'react';
import imglogo from '../../assets/logo.jpg';
import imgcarrito from '../../assets/cart.png';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

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
      <div className="navbar-cart">
        <img src={imgcarrito} alt="Carrito" />
        <span>3</span>
      </div>
    </nav>
  );
};

export default NavBar;