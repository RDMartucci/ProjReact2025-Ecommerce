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
// import Login from './components/Login';
import Login2 from './components/Login';
import Contacto from './components/contacto';
import Login from './components/Login';
// import RutaProtegida from './components/rutaProtegida';

function App() {
  return (
    <>
      <Router>
        <div>
          <Header/>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/productos' element={<ProductosContainer />}/>
            <Route path='/acerca' element={<About />}/>
            <Route path='/contacto' element={<Contacto />}/>
            <Route path='/carrito' element={<Carrito/>}/>  
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path="/productos/:id" element={<ProductoDetalle/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  )
}
export default App


