import '../styles/header.css';
import Nav from './nav';
//importo el logo del sitio.
import broncoLogo from "../assets/broncomuebles-logo.png";

export default function Header() { 
    return ( 
        <>
            <header>
                <div className='logo'>
                    <img src={broncoLogo} className='logo-img'/>
                </div> 
                <div className='banner-intro'>
                    <h2>Proyecto E-Commerce</h2>
                    <h3>mi app con REACT</h3>
                </div>
            </header>
        </> 
    ); 
}   