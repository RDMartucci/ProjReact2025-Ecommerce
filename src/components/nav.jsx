import '../styles/nav.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from "../contexts/CarritoContext";
import { useAuthContext } from '../contexts/AuthContext';

export default function Nav() {
//array de links para el NAV.
    //const links = ['Home','Productos','Acerca de','Contacto','Carrito'];
    const {productosCarrito} = useContext(CarritoContext);
    const {usuario} = useAuthContext();

    return (
        <>
            <nav aria-label="Navegación principal">
                <ul>
                    {/* {links.map((l, index) => (
                        <li key={index}><Link to={l}></Link></li>
                    ))} */}

                    <li><Link to="/" className='link-nav'>inicio</Link></li>  
                    <li><Link to="/productos" className='link-nav'>productos</Link></li>  
                    <li><Link to="/acerca" className='link-nav'>acerca de</Link></li>  
                    <li><Link to="/contacto" className='link-nav'>contacto</Link></li>  
                    <li><Link to="/login" className='link-nav'>log in</Link> </li>  
                    {/*no muestra la opcion admin si no esta logueado como admin */}
                    {usuario && <li><Link to="/admin" className='link-nav'>admin</Link> </li>} 
                    {/* <li><Link to="/admin" className='link-nav'>admin</Link> </li> */}
                    <li><Link to="/carrito" className='link-nav'>carrito 
                        { productosCarrito.length == 0 ? <span></span> : <span className='cantidad-en-carrito'>{productosCarrito.length > 0 ? productosCarrito.length : "0"}</span>}
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    );
}