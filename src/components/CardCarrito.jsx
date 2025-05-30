import "../styles/Cards.css";

export default function CardCarrito({ producto, funcionDisparadora }) {
    
    function eliminarProducto() {
        console.log("Eliminando del  carrito producto id:", producto.id);
        funcionDisparadora(producto.id);
    }

    return (
        <div className="card-carrito">
            <img 
                className="card-carrito-img" 
                src={producto.imagen} 
                alt={producto.name}
            />
            <h3 className="card-carrito-titulo">{producto.name}</h3>
            <p className="card-carrito-descripcion">{producto.description}</p>
            <div className="card-carrito-precio">
                <p className="card-carrito-precio-prod">$ {producto.price}</p>
            </div>
            <span className="card-carrito-cantidad">{producto.cantidad}</span>
            <div className="card-carrito-precio">
                <span className="card-carrito-precio-prod">$ {producto.cantidad * producto.price}</span>
            </div>
            <button 
                className="carrito-boton-eliminar-prod" 
                onClick={eliminarProducto}
            >
                X
            </button>
        </div>
    );
}
