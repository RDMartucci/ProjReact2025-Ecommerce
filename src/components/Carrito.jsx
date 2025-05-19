import '../styles/carrito.css';
import '../styles/Cards.css';
import CardCarrito from "./CardCarrito.jsx";


export default function Carrito({ productosCarrito, manejoEliminar }) {
    console.log("Cant productos en carrito: ", productosCarrito.length);
    const total = productosCarrito.reduce((subTotal, producto) => (
        subTotal + producto.price * producto.cantidad)
        , 0);
    console.log("Total: " + total);

    function funcionDisparadora(id) {
        manejoEliminar(id)
    }

    return (
        <>
            <div className="carrito-container">
                <div className="carrito-titulos" >
                    <div className='carrito-titulos-p1'>
                        <h2 className="carrito-titulo">Producto</h2>
                        <h2 className="carrito-titulo">Descripción</h2>
                    </div>
                    <div className='carrito-titulos-p2'>
                        <h2 className="carrito-titulo">  </h2>
                        <h2 className="carrito-titulo">Precio</h2>
                        <h2 className="carrito-titulo">Cantidad</h2>
                        <h2 className="carrito-titulo">Sub total</h2>
                    </div>
                </div>
                {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                    <CardCarrito
                        key={producto.id}
                        producto={producto}
                        funcionDisparadora={funcionDisparadora}
                    />
                ))
                    : <div className='carrito-titulo marg-top3'><span className='carrito-total carrito-vacio'>Carrito vacío</span></div>}
                {total > 0 ? <div className='carrito-titulo'><span className='carrito-total'>Total a pagar: $ {total.toFixed(2)} </span></div> : <></>}
            </div>
        </>
    )
} 
