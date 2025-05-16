import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductoDetalle.css";
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
        <div className="detalle-container">
            <img className="detalle-imagen" src={producto.imagen} alt={producto.name} />
            <div className="detalle-info">
                <h2>{producto.name}</h2>
                <p>{producto.description}</p>
                <p>{producto.price} $</p>
                <div className="detalle-contador">
                    <button onClick={restarContador}>-</button>
                    <span>{cantidad}</span>
                    <button onClick={sumarContador}>+</button>
                </div>
                <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ProductoDetalle;
