//App.css
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

// App.jsx
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { CartProvider } from './context/CartContext'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout'


function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme='dark' />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App