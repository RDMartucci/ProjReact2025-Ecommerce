import '../styles/nav.css';

export default function Nav() {
//array de links para el NAV.
    const links = ['Home','Productos','Categorias','Contacto'];
    return (
        <>
            <nav aria-label="Navegación principal">
                <ul>
                    {links.map((link, index) => (
                        <li key={index}><a href='#'>{link}</a></li>
                    ))}
                </ul>
            </nav>

        </>
    );
}