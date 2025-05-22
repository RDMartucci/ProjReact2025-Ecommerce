import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/Cards.css';
// import "../styles/ProductoDetalle.css";
import { Mensaje } from "../assets/SweetAlert";

function ProductoDetalle({ manejoCarrito }) {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://68100d8c27f2fdac24101f11.mockapi.io/productos")
            .then((res) => res.json())
            .then((datos) => {
                const productoEncontrado = datos.find((item) => item.id === id);
                if (productoEncontrado) {
                    setProducto(productoEncontrado);
                } else {
                    setError("Producto no encontrado.");
                }
                setCargando(false);
            })
            .catch((err) => {
                console.log("Error:", err);
                setError("Hubo un problema al cargar el producto.");
                setCargando(false);
            });
    }, [id]);

    function agregarAlCarrito() {
        if (cantidad < 1) return;
        Mensaje("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
        manejoCarrito({ ...producto, cantidad });
    }

    function sumarContador() {
        setCantidad(cantidad + 1);
    }

    function restarContador() {
        if (cantidad > 1) setCantidad(cantidad - 1);
    }

    if (cargando) return <p className="mensaje-de-carga">Cargando producto...</p>;
    if (error) return <p>{error}</p>;
    if (!producto) return null;

    return (
        <div className="prod-detalle-container">
            <img className="prod-detalle-imagen" src={producto.imagen} alt={producto.name} />
            <div className="card-prod-detalle-info">
                <h2 className="prod-nombre">{producto.name}</h2>
                <p className="prod-descripcion">{producto.description}</p>
                <p className="prod-precio">$ {producto.price}</p>
                <div className="prod-detalle-cantidad">
                    <button onClick={restarContador} className="btn-prod-cantidad btn-menos">-</button>
                    <span className="prod-cantidad">{cantidad}</span>
                    <button onClick={sumarContador} className="btn-prod-cantidad btn-mas">+</button>
                </div>
                <button onClick={agregarAlCarrito} className="btn-agregar-al-carrito">Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ProductoDetalle;
