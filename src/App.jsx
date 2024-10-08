import './App.css'

// App.jsx
import React from 'react';
import NavBar from './componentes/navbar/navbar';
import ItemListContainer from './componentes/itemlistcontainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Primer prueba REACT" />
      <ItemListContainer saludo="funciona o no funciona?" />
    </div>
  );
}

export default App;
