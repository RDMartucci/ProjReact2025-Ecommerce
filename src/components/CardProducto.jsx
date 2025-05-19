import { Link, Navigate } from "react-router-dom";
import { useState } from 'react';
import '../styles/Cards.css';

export default function CardProducto({producto}){

    function navegar(){
        const ruta = "/productos/" + producto.id
        return <Navigate to={ruta} replace />
    }

    return(
        <>
            <div className="card-producto">
                <h2 className='card-producto-nombre'>{producto.name}</h2>
                <img 
                    className="card-producto-img" 
                    src={producto.imagen}>
                </img>
                <h2 className='card-producto-precio'>$ {producto.price}</h2>
                <Link to={"/productos/" + producto.id} >
                    <button className="card-producto-btn">ver detalles</button>
                </Link>
            </div>
        </>
    )
}