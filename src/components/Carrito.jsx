import '../styles/carrito.css';
import CardCarrito from "./CardCarrito.jsx";


export default function Carrito({ productosCarrito, manejoEliminar }) {
    console.log("Cant productos en carrito: " , productosCarrito.length);
    const total = productosCarrito.reduce((subTotal, producto) => (
                                        subTotal + producto.price * producto.cantidad)
                , 0);
    console.log("Total: " + total);

        function funcionDisparadora(id){
        manejoEliminar(id)
    }

    return(
        <div className="carrito-container">
            <div className="carrito-titulos" >
                <h2 className="carrito-titulo-producto"> Producto </h2>
                <h2 className="carrito-titulo-descripcion">Descripción</h2>
                <h2>  </h2>
                <h2> Cantidad </h2>
                <h2> Precio unitario </h2>
                <h2> Sub total </h2>
                <h2>  </h2>
            </div>
            {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                <CardCarrito
                    key={producto.id} 
                    producto={producto} 
                    funcionDisparadora={funcionDisparadora}
                />
            ))
            : <div className='titulo-carrito'><span  id='carrito-vacio'>Carrito vacío</span></div>}
            {total > 0 ? <div className='titulo-carrito'><span id='total-a-pagar'>Total a pagar: $ {total.toFixed(2)} </span></div>: <></>}
        </div>
    )
} 
