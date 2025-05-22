import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css';

import Home from './layouts/Home'
import Nav from './components/nav';
import ProductosContainer from './components/ProductosContainer';
import ProductoDetalle from './components/ProductoDetalle';
import Carrito from './components/Carrito';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/acerca';
import Admin from './components/admin';
import Login from './components/Login';
import Contacto from './components/contacto';

function App() {
  const [productosCarrito, setProductosCarrito] = useState([])
  const [usuarioLogeado, setUsuarioLogeado] = useState(false)
  const [adminLogeado, setAdminLogeado] = useState(false)

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

  function eliminarDelCarrito(id) {
    const nuevoCarrito = productosCarrito.filter((producto) => (
      producto.id !== id)
    );
    setProductosCarrito(nuevoCarrito);
  }
  function vaciarCarrito(){
    setProductosCarrito([]);
  }

  function manejarAdmin() {
    setAdminLogeado(!adminLogeado)
  }

  function manejarUser(){
    setUsuarioLogeado(!usuarioLogeado)
  }


  return (
    <>
      <Router>
        <div>
          <Header />
          <Nav productosCarrito={productosCarrito}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ProductosContainer />} />
            {/* <Route path='/productos' element={<PagProductos manejoCarrito={manejoCarrito}/>}/> */}
            <Route path='/acerca' element={<About />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/carrito' element={<Carrito productosCarrito={productosCarrito} manejoEliminar={eliminarDelCarrito} usuarioLogeado={usuarioLogeado} vaciarCarrito={vaciarCarrito}/>} />  
            <Route path='/login' element={<Login user={usuarioLogeado} admin={adminLogeado} setLogeadoAdmin={manejarAdmin} setLogeadoUser={manejarUser}/>}/>
            <Route path='/admin' element={adminLogeado ? <Admin/> : <Navigate to={"/login"} replace/>} />
            <Route path="/productos/:id" element={<ProductoDetalle manejoCarrito={manejoCarrito} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}
export default App


