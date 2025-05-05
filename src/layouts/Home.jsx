import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/nav";
import ProductosContainer from "../components/ProductosContainer";
/*importo las imagenes para prueba*/
import Imagen1 from "../assets/foto.jpeg";
import imagen2 from "../assets/foto2.png";


export default function Home() {

    // const productos = [
    //     {
    //         id: 1,
    //         name: "Essence Mascara Lash Princess",
    //         description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    //         price: 9.99,
    //         imagen: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    //     },
    //     {
    //         id: 2,
    //         name: "Eyeshadow Palette with Mirror",
    //         description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    //         price: 19.99,
    //         imagen: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
    //     },
    //     {
    //         id: 3,
    //         name: "Essence Mascara Lash Princess",
    //         description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    //         price: 9.99,
    //         imagen: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    //     },
    //     {
    //         id: 4,
    //         name: "Eyeshadow Palette with Mirror",
    //         description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    //         price: 19.99,
    //         imagen: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
    //     },
    //     {
    //         id: 5,
    //         name: "Essence Mascara Lash Princess",
    //         description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    //         price: 9.99,
    //         imagen: imagen2
    //     },
    //     {
    //         id: 6,
    //         name: "Essence Mascara Lash Princess",
    //         description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    //         price: 9.99,
    //         imagen: imagen2
    //     }
    // ]


    return (
        <>
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
            <div>
                <br />
                <br />
                <br />
                <Nav />
                <ProductosContainer/>
            </div>
        </>
    )
}