import '../styles/carrito.css';
import CardCarrito from "./CardCarrito.jsx";

export default function Carrito({ productosCarrito, manejoEliminar }) {
    console.log("Cant productos en carrito: " , productosCarrito.length);
    const total = productosCarrito.reduce((subTotal, producto) => (
                                        subTotal + producto.price * producto.cantidad)
                , 0);
    console.log("Total: " + total);
    
    return (
        <div className="carrito-container">
            {productosCarrito.length > 0 ? (
                productosCarrito.map((producto) => (
                    <CardCarrito 
                        key={producto.id} 
                        producto={producto} 
                        manejoCarrito={manejoEliminar}
                    />
                ))
            ) : (
                <p><span className='carrito-vacio'>Carrito vacío</span></p>
                //total > 0 ? <span>Total a pagar: {total} $</span>: <></>
            )}
        </div>
    );
}

/********

    return(
        <div className="carrito-conteiner">
            {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                <CarritoCard producto={producto} />
            ))
            : <p>Carrito vacio</p>}
            {total > 0 ? <span>Total a pagar: {total} $</span>: <></>}
        </div>
    )
} 
  
  
  
  
 */
