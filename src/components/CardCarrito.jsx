import "../styles/Cards.css";

export default function CardCarrito({ producto, manejoCarrito }) {
    
    function eliminarProducto() {
        console.log("Paso 1 carrito: Eliminar producto:", producto.id);
        manejoCarrito(producto);
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

/*  
//return(
//        <div className="carrito-card" >
//            <h3 className="carrito-titulo" style={{color:"black"}}>{producto.name}</h3>
//            {<p className="descripcion-carrito" style={{color:"black"}}>{producto.description}</p>}
//            <img className="carrito-image" src={producto.imagen}></img>
//            <span style={{color:"black"}}>{producto.cantidad}</span>
            <div>
                <p style={{color:"black"}}>Precio unitario</p>
                <span style={{color:"black"}}>{producto.price} $</span>
            </div>
            <div>
                <p style={{color:"black"}}>Precio total</p>
                <span style={{color:"black"}}>{producto.cantidad * producto.price} $</span>
            </div>

            <button className="boton-carrito" onClick={agregarAlCarrito} style={{backgroundColor: "red" ,color:"black"}}>X</button>
        </div>
    )

*/
