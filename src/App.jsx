import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css';

import Home from './layouts/Home'
import Nav from './components/Nav';
import ProductosContainer from './components/ProductosContainer';
import ProductoDetalle from './components/ProductoDetalle';
import Carrito from './components/Carrito';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './layouts/Acerca';
import Admin from './layouts/Admin';
import Login from './layouts/Login';
import Contacto from './layouts/Contacto';
import RutaProtegida from './components/rutaProtegida';

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
          <Nav productosCarrito={productosCarrito} adminLogeado={adminLogeado}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ProductosContainer />} />
            {/* <Route path='/productos' element={<PagProductos manejoCarrito={manejoCarrito}/>}/> */}
            <Route path='/acerca' element={<About />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/carrito' element={<RutaProtegida estaLogueado={adminLogeado}>
                                              <Carrito productosCarrito={productosCarrito} manejoEliminar={eliminarDelCarrito}>
                                              </Carrito> 
                                            </RutaProtegida>} 
            />  
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


