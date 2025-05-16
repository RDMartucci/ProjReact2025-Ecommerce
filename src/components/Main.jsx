import '../styles/main.css';

export default function Main() {

    return (
        <>
            <main>
                <section className='principal'>
                    {/* <h1>contenido principal del sitio</h1> */}
                    <h2 className='titulo'>características y beneficios</h2>
                        <ul className='texto-principal'>
                            <li><span>Diseños exclusivos:</span> <p>Piezas únicas que se adaptan a diferentes estilos de decoración.</p></li>
                            <li><span>Materiales de alta calidad:</span> <p>Utilizamos maderas nobles y materiales sostenibles que aseguran la resistencia y belleza de cada producto.</p></li>
                            <li><span>Hecho a mano:</span> <p>Cada mueble es elaborado de manera artesanal, con atención al detalle y la tradición.</p></li>
                            <li><span>Personalización:</span> <p>Adaptamos nuestros diseños a las necesidades y gustos de nuestros clientes, para que cada mueble sea un reflejo de su personalidad.</p></li>
                        </ul>
                </section>
            </main>
        </>
    )
}