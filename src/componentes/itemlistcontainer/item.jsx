// components/Item/Item.jsx
import { Link } from "react-router-dom";
import './Item.css'; // Importamos el archivo CSS

const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image} className="img-item" alt={product.name} />
      <p className="text-item">{product.name}</p>
      <p className="text-item">${product.price}</p>

      <Link to={`/detail/${product.id}`} className="btn-link">
        Ver más info...
      </Link>
    </div>
  );
};

export default Item;