import "../styles/Cards.css";

export default function CardCarrito({ producto, funcionDisparadora }) {
    
    function eliminarProducto() {
        console.log("Eliminando del  carrito producto id:", producto.id);
        funcionDisparadora(producto.id);
    }

    return (
        <div className="card-carrito">
            <h3 className="card-carrito-titulo">{producto.name}</h3>
            <p className="card-carrito-descripcion">{producto.description}</p>
            <img 
                className="card-carrito-img" 
                src={producto.imagen} 
                alt={producto.name}
            />
            <span style={{color:"black"}}>{producto.cantidad}</span>
            <div>
                <p style={{color:"black"}}>Precio unitario</p>
                <p className="card-carrito-precio">{producto.price} $</p>
            </div>
            <div>
                <p style={{color:"black"}}>Precio total</p>
                <span style={{color:"black"}}>{producto.cantidad * producto.price} $</span>
            </div>
            <button 
                className="card-carrito-boton-eliminar" 
                onClick={eliminarProducto}
            >
                X
            </button>
        </div>
    );
}
