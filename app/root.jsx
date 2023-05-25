import { useState, useEffect } from "react"

import { 
    Meta,
    Links,
    Outlet, 
    Scripts,
    LiveReload,
    useRouteError,
    useCatch,
    Link,
    isRouteErrorResponse
} from "@remix-run/react"
import styles from "./styles/index.css" 
import Header from "./components/header"
import Footer from "./components/footer"

//Sirve para agregar el inicio del HTML, se debe importa la libreria META
//Y colococarla en layout como un componente
export function meta() {
    return (
        [            
        {charset: 'utf-8'},
        {title: 'ElectroCommerce - Remix'},
        {viewport: "width=device-width, initial-scale=1"}            
        ]
    )
}



//Sirve para agregar hojas de estilos, primeramente se debe crear la carpeta styles y colocarle los css
export function links () {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com", 
            crossOrigin: "true"
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700;900&display=swap"
        },
    ]
}

export default function App () {

    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null

    const [carrito, setCarrito] = useState(carritoLS)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    //Funcion para evitar duplicado de elementos al momento de agregar articulos
    //Y para modificar la cantidad
    const AgregarCarrito = articulo => {
        if(carrito.some(articuloState => articuloState.id === articulo.id)){
            const CarritoActualizado = carrito.map (articuloState => {
                if(articuloState.id === articulo.id){
                    //Reescribir cantidad
                    articuloState.cantidad = articulo.cantidad
                } 
                return articuloState
            })
                //Añadiendo al carrito
            setCarrito(CarritoActualizado)
        } else{
            setCarrito([...carrito, articulo])
        }


    }

    //Actualizar cantidad desde el carrito
    const actualizarCantidad = articulo => {
        const CarritoActualizado = carrito.map(articuloState => {
            if(articuloState.id === articulo.id) {
                articuloState.cantidad = articulo.cantidad
            }
            return articuloState
        })
        setCarrito(CarritoActualizado)
    }

    const eliminarProducto = id => {
        const CarritoActualizado = carrito.filter(articuloState => articuloState.id !== id)
        setCarrito(CarritoActualizado)
    }
    return (
        <Document>
            <Outlet 
                context={{
                    AgregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarProducto
                }}
            />
        </Document>
    )
}

function Document ({children}) {

    return (
        <html>
            <head>
                <Meta />
                <Links/>
            </head>

                <body>
                    <Header/>
                    {children}
                    <Footer/>
                    <Scripts/>
                    <LiveReload/>
                </body>

        </html>
    )
}

export function CatchBoundary() {
    
    const error = useRouteError(); // esto es un hook de remix
 
        
    return (
        <Document>
            {/* de esta manera imprimimos los errores */}
            <p className="error">{error.status} {error.statusText} </p>
            <Link className="error-enlace" to="/tienda">¿Desea volver a la tienda?</Link>
        </Document>
        )
   
 
}
 
export function ErrorBoundary() {
     
    const error = useRouteError(); // esto es un hook de remix
        
    return (
        <Document>
            {/* de esta manera imprimimos los errores */}
            <p className="error">{error.status} {error.statusText} </p>
            <Link className="error-enlace" to="/tienda">¿Desea volver a la tienda?
            </Link>
        </Document>
        )
}