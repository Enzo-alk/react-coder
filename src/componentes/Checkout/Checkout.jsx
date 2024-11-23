import { useState, useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import db from "../../db/db.js";
import { Link } from "react-router-dom";
import validateForm from "../../utils/validateForm.js";
import { toast } from "react-toastify";
import "./checkout.css";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    province: "",
  });
  const [idOrder, setIdOrder] = useState(null);
  const { cart, totalPrice, deleteCart } = useContext(cartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };

    // Antes de subir la orden, validamos los datos del formulario
    const response = await validateForm(dataForm);
    if (response.status === "success") {
      uploadOrder(order);
    } else {
      toast.error(response.message);
    }
  };

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, newOrder)
      .then((response) => {
        setIdOrder(response.id);
      })
      .finally(() => {
        // Una vez generada la orden, vaciamos nuestro carrito
        deleteCart();
        toast.success("Orden generada correctamente!");
      });
  };

  return (
    <div className="checkout">
      {idOrder === null ? (
        <form onSubmit={handleSubmitForm} className="form-checkout">
          <h2>Checkout</h2>
          <div className="content-input">
            <label className="label">Nombre completo:</label>
            <input
              type="text"
              name="fullname"
              value={dataForm.fullname}
              onChange={handleChangeInput}
            />
          </div>

          <div className="content-input">
            <label className="label">Teléfono:</label>
            <input
              type="number"
              name="phone"
              value={dataForm.phone}
              onChange={handleChangeInput}
            />
          </div>

          <div className="content-input">
            <label className="label">Email:</label>
            <input
              type="email"
              name="email"
              value={dataForm.email}
              onChange={handleChangeInput}
            />
          </div>

          <div className="content-input">
            <label className="label">Dirección:</label>
            <input
              type="text"
              name="address"
              value={dataForm.address}
              onChange={handleChangeInput}
            />
          </div>

          <div className="content-input">
            <label className="label">Ciudad:</label>
            <input
              type="text"
              name="city"
              value={dataForm.city}
              onChange={handleChangeInput}
            />
          </div>

          <div className="content-input">
            <label className="label">Provincia:</label>
            <input
              type="text"
              name="province"
              value={dataForm.province}
              onChange={handleChangeInput}
            />
          </div>

          <button type="submit" className="button-send-order">
            Enviar orden
          </button>
        </form>
      ) : (
        <div>
          <h2>El pedido se genero correctamente, en breve te contactamos... ✅</h2>
          <p>Este es tu numero de pedido, no lo pierdas: {idOrder}</p>
          <Link to="/" className="button-to-home">
            segui comprando...
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
