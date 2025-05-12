import '../styles/carrito.css';
import CardCarrito from "./CardCarrito.jsx";

export default function Carrito({ productosCarrito, manejoEliminar }) {
    console.log("Cant productos en carrito: " , productosCarrito.length);
    const total = productosCarrito.reduce((subTotal, producto) => (
                                        subTotal + producto.price * producto.cantidad)
                , 0);
    console.log("Total: " + total);

    return(
        <div className="carrito-container">
            {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                <CardCarrito
                    key={producto.id} 
                    producto={producto} 
                    manejoCarrito={manejoEliminar}
                />
            ))
            : <div className='titulo-carrito'><span  id='carrito-vacio'>Carrito vacío</span></div>}
            {total > 0 ? <div className='titulo-carrito'><span id='total-a-pagar'>Total a pagar: $ {total} </span></div>: <></>}
        </div>
    )
} 
