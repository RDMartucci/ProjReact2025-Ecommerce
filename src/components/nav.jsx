import '../styles/nav.css';
import { Link } from 'react-router-dom';

export default function Nav({productosCarrito}) {
//array de links para el NAV.
    //const links = ['Home','Productos','Acerca de','Contacto','Carrito'];
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
                    <li><Link to="/admin" className='link-nav'>admin</Link> </li>  
                    <li><Link to="/carrito" className='link-nav'>carrito 
                        <span className='cantidad-en-carrito'>{productosCarrito.length > 0 ? productosCarrito.length : ""}</span>
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    );
}