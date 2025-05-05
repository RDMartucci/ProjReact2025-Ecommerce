import { useState, useEffect } from "react";
import '../styles/Cards.css';
import CardProducto from "./CardProducto";
import Carrito from "./Carrito";

export default function ProductosContainer() {
    const [productos, setProductos] = useState([]);
    const [productosCarrito, setProductosCarrito] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0);

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

    function manejoCarrito(producto) {
        const existe = productosCarrito.find(p => p.id === producto.id);
        console.log(existe)
        if (existe) {
            const carritoActualizado = productosCarrito.map((prod) => {
            if (prod.id === producto.id){
                const productoActualizado = {...prod, cantidad: prod.cantidad + producto.cantidad}
                return productoActualizado
            }else
                return prod;
            })
        } else {  // Si no existe, lo agregamos con su cantidad
            setProductosCarrito([...productosCarrito, producto]);
            console.log('Paso 2: Agregando producto al carrito con id:',producto.id);
        }
        setTotal(0)
        productosCarrito.map((prod => {
            setTotal(total + prod.price * prod.cantidad)
        }))
    }

    function eliminarDelCarrito(productoAEliminar) {
        const nuevoCarrito = productosCarrito.filter((producto) => (
                producto.id !== productoAEliminar.id)
            );
        setProductosCarrito(nuevoCarrito);
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
                            manejoCarrito={manejoCarrito}
                        />
                    ))}
                </div>
                <div className="pagina">
                    <Carrito
                        productosCarrito={productosCarrito}
                        manejoEliminar={eliminarDelCarrito}
                    />
                </div>
            </div>
        );
    }
}
