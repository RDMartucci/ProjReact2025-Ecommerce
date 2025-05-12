import { useState, useEffect } from "react";
import '../styles/Cards.css';
import CardProducto from "./CardProducto";

export default function ProductosContainer({manejoCarrito}) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://68100d8c27f2fdac24101f11.mockapi.io/productos')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                console.log(datos);
                setProductos(datos);
                setCargando(false);
            })
            .catch((error) => {
                console.log("Error", error);
                setError('Hubo un problema al cargar los productos.');
                setCargando(false);
            });
    }, []);

    function functionEnProductos(producto){
        manejoCarrito(producto)
    }

    if (cargando) {
        return <p>Cargando productos...</p>;
    } else if (error) {
        return <p>{error}</p>;
    } else {
        return (
            <div className="pagina">
                <div className="productos-container">
                    {productos.map((producto) => (
                        <CardProducto
                            key={producto.id}
                            producto={producto}
                            manejoCarrito={functionEnProductos}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
