import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductosContainer from "../components/ProductosContainer";

export default function PagProductos ({manejoCarrito}){
    return(
        <>
            <div>
                <ProductosContainer manejoCarrito={manejoCarrito} />
            </div>
        </>
    )
}