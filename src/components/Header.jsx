import '../styles/header.css';
import Nav from './nav';
//importo el logo del sitio.
import broncoLogo from "../assets/broncomuebles-logo-chico01.png";

export default function Header() { 
    return ( 
        <>
            <header>
                <div className='banner-intro'>
                    <span className='banner-intro-texto'>muebles artesanales</span>
                </div>
                <div className='logo'>
                    <img src={broncoLogo} className='logo-img'/>
                </div> 
                <div className='banner-intro'>
                    <span className='banner-intro-texto'>armonizan tu hogar</span>
                </div>
            </header>
        </> 
    ); 
}   