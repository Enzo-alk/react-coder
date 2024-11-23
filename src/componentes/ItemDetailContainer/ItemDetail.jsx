import ItemCount from "../itemCount/ItemCount"
import { useContext } from "react"
import { cartContext } from "../../context/CartContext"
import "./itemdetail.css"

const ItemDetail = ({ product }) => {
  const { addProductInCart } = useContext(cartContext)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }

    addProductInCart(productCart)
    // Aquí no cambiaremos el estado porque no habrá renderizado condicional
  }

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} width={600} />
      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>

        {/* Incluimos el componente ItemCount directamente */}
        <ItemCount stock={product.stock} addProduct={addProduct} />
      </div>
    </div>
  )
}

export default ItemDetail
