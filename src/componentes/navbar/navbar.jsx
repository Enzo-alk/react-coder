// components/NavBar/NavBar.jsx
import React from 'react';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8f8f8' }}>
      {/* Logo */}
      <div>
        <img src="logo.png" alt="Logo" style={{ width: '50px' }} />
      </div>

      {/* Categorías */}
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li>Categoría 1</li>
        <li>Categoría 2</li>
        <li>Categoría 3</li>
      </ul>

      {/* Carrito */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="cart.png" alt="Carrito" style={{ width: '30px' }} />
        <span style={{ marginLeft: '0.5rem' }}>3</span>
      </div>
    </nav>
  );
};

export default NavBar;
