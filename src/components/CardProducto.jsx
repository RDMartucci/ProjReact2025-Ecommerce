import { Link, Navigate } from "react-router-dom";
import { useState } from 'react';
import '../styles/Cards.css';

export default function CardProducto({producto}){
    // const [cantidad, setCantidad] = useState(1);
        
    // function clickProducto() {
    //         console.log('Paso 1: Se clickeo sobre un producto.:',producto);
    //         if (cantidad < 1) return;
    //         manejoCarrito({ ...producto, cantidad }); // Pasamos también la cantidad
    //     }
    
    // function sumarContador() {
    //         setCantidad(cantidad + 1)
    //     }
    
    // function restarContador(){
    //         if (cantidad > 1) {
    //             setCantidad(cantidad - 1)
    //         }
    //     }


    
    function navegar(){
        const ruta = "/productos/" + producto.id
        return <Navigate to={ruta} replace />
    }

    return(
        <>
            <div className="card-producto">
                <h1 className='card-producto-nombre'>{producto.name}</h1>
                {/* <p className='card-producto-descripcion'>{producto.description}</p> */}
                <img 
                    className="card-producto-img" 
                    src={producto.imagen}>
                </img>
                <h2 className='card-producto-precio'>{producto.price}</h2>
                {/* <div className='cantidad-producto'>
                    <button onClick={restarContador}>-</button>
                    <span style={{ margin: "0 10px", color:"cyan" }}>{cantidad}</span>
                    <button onClick={sumarContador}>+</button>
                </div> */}
                {/* <button 
                    className="card-producto-btn" 
                    // onClick={clickProducto(producto)}
                    onClick={() => clickProducto(producto)}
                > agregar al carrito
                </button> */}
                <Link to={"/productos/" + producto.id} >
                    <button className="card-producto-btn">ver detalles</button>
                </Link>
            </div>
        </>
    )
}