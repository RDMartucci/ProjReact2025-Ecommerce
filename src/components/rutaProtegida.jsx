import { Navigate } from "react-router-dom";

export default function RutaProtegida({usuarioLogeado, adminLogeado, children}){
    
    if(!usuarioLogeado && !adminLogeado){
        return(
            <Navigate to="/login" replace/>
        )
    } else if (!adminLogeado){
        return(
            <Navigate to="/login" replace/>
        )
    }
    return children;
}