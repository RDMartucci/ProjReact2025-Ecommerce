import '../styles/hero.css';

export default function Hero() {

    return (
        <>
            <main>
                <section className='principal'>
                    {/* <h1>contenido principal del sitio</h1> */}
                    <h2 className='titulo'>características y beneficios</h2>
                        <ul className='texto-principal'>
                            <li><span className='texto-color-sombra'>Diseños exclusivos:</span> <p className='leyenda'>Piezas únicas que se adaptan a diferentes estilos de decoración.</p></li>
                            <li><span className='texto-color-sombra'>Materiales de alta calidad:</span> <p className='leyenda'>Utilizamos maderas nobles y materiales sostenibles que aseguran la resistencia y belleza de cada producto.</p></li>
                            <li><span className='texto-color-sombra'>Hecho a mano:</span> <p className='leyenda'>Cada mueble es elaborado de manera artesanal, con atención al detalle y la tradición.</p></li>
                            <li><span className='texto-color-sombra'>Personalización:</span> <p className='leyenda'>Adaptamos nuestros diseños a las necesidades y gustos de nuestros clientes, para que cada mueble sea un reflejo de su personalidad.</p></li>
                        </ul>
                </section>
            </main>
        </>
    )
}