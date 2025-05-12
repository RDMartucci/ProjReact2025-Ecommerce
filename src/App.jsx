import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './layouts/Home'
import Nav from './components/nav';
import ProductosContainer from './components/ProductosContainer';
import About from './layouts/About';
import Contact from './layouts/Contact';
import Carrito from './components/Carrito';

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
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ProductosContainer manejoCarrito={manejoCarrito} />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='/carrito' element={<Carrito productosCarrito={productosCarrito} manejoEliminar={eliminarDelCarrito} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}
export default App
