// components/ItemListContainer/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ saludo }) => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{saludo}</h2>
    </div>
  );
};

export default ItemListContainer;
