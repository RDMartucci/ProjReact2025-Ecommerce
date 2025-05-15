import '../styles/nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
//array de links para el NAV.
    //const links = ['Home','Productos','Acerca de','Contacto','Carrito'];
    return (
        <>
            <nav aria-label="Navegación principal">
                <ul>
                    {/* {links.map((l, index) => (
                        <li key={index}><Link to={l}></Link></li>
                    ))} */}

                    <li><Link to="/" >Inicio</Link></li>  
                    <li><Link to="/productos" >Productos</Link></li>  
                    <li><Link to="/about" >acerca de</Link></li>  
                    <li><Link to="/contacto" >contacto</Link></li>  
                    <li><Link to="">Login</Link> </li>  
                    <li><Link to="">Admin</Link> </li>  
                    <li><Link to="/carrito" >Carrito</Link></li>
                </ul>
            </nav>

        </>
    );
}