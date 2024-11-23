import { useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"
import { BsFillTrash3Fill } from "react-icons/bs"

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(cartContext)

  //Early return
  if( cart.length === 0 ){
    return(
      <div className="empty-cart">
        <h2 className="title-empty-cart">Aun no agregaste  productos, segui explorando...</h2>
        <Link to="/" className="button-home-empty-cart" >vuelve al menu principal</Link>
      </div>
    )
  }

  return (
    <div className="cart" >
      <h1 className="title-cart">Productos en el carrito</h1>
      {
        cart.map( (productCart) => (
          <div className="item-cart" key={productCart.id}>
            <img className="img-item-cart" src={productCart.image} width={100} alt="" />
            <p className="text-item-cart">{productCart.name}</p>
            <p className="text-item-cart">precio c/u: ${productCart.price}</p>
            <p className="text-item-cart">cantidad: {productCart.quantity}</p>
            <p className="text-item-cart">precio parcial: ${ productCart.price * productCart.quantity } </p>
            <button className="delete-item-cart" onClick={ () => deleteProductById(productCart.id) } >
              <BsFillTrash3Fill />
            </button>
          </div>
        ))
      }

      <div className="info-cart">
        <p className="text-info-cart">Precio total: ${totalPrice()}</p>
        <button className="button-delete-cart" onClick={deleteCart} >Eliminar Productos</button>
        <button className="button-checkout" onClick={() => {
      window.location.href = "/checkout";
       }}
      >Continuar con mi compra</button>
      </div>
    </div>
  )
}
export default Cart