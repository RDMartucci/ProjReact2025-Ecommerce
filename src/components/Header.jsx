import '../styles/header.css';
import Nav from './nav';
//importo el logo del sitio.
import broncoLogo from "../assets/broncomuebles-logo-chico01.png";

export default function Header() { 
    return ( 
        <>
            <header>
                {/* <div className='banner-intro'>
                    <h2>BroncoMuebles</h2>
                </div> */}
                <div className='logo'>
                    <img src={broncoLogo} className='logo-img'/>
                </div> 
                {/* <div className='banner-intro'>
                    <h2>Shopping</h2>
                </div> */}
            </header>
        </> 
    ); 
}   