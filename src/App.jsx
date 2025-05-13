import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

import Home from './layouts/Home'
import Nav from './components/nav';
import ProductosContainer from './components/ProductosContainer';
import About from './layouts/About';
import Contact from './layouts/Contact';
import Carrito from './components/Carrito';
import PagProductos from './layouts/productos';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [productosCarrito, setProductosCarrito] = useState([])

  function manejoCarrito(producto) {
    const existe = productosCarrito.find(p => p.id === producto.id);
    console.log(existe)
    if (existe) {
      const carritoActualizado = productosCarrito.map((prod) => {
        if (prod.id === producto.id) {
          const productoActualizado = { ...prod, cantidad: prod.cantidad + producto.cantidad };
          return productoActualizado;
        } else
          return prod;
      })
      setProductosCarrito(carritoActualizado);
    } else {  // Si no existe, lo agregamos con su cantidad
      console.log('Paso 2: Agregando producto al carrito con id:', producto.id);
      const nuevoCarrito = [...productosCarrito, producto];
      setProductosCarrito(nuevoCarrito)
    }
  }

  function eliminarDelCarrito(productoAEliminar) {
    const nuevoCarrito = productosCarrito.filter((producto) => (
      producto.id !== productoAEliminar.id)
    );
    setProductosCarrito(nuevoCarrito);
  }

  return (
    <>
      <Router>
        <div>
          <Header />
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ProductosContainer manejoCarrito={manejoCarrito} />} />
            {/* <Route path='/productos' element={<PagProductos manejoCarrito={manejoCarrito}/>}/> */}
            <Route path='/about' element={<About />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='/carrito' element={<Carrito productosCarrito={productosCarrito} manejoEliminar={eliminarDelCarrito} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}
export default App
