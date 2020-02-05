import React , { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';

function App() {

  // listado de productos
  const productos = [
    { id: 1, nombre: 'Remera Roja', precio: 50 },
    { id: 2, nombre: 'Remera Gris', precio: 40 },
    { id: 3, nombre: 'Remera Negra', precio: 30 },
    { id: 4, nombre: 'Remera Marron', precio: 20 },
  ];

   // useState para agregar/eliminar productos del carrito de compras
   const [ carrito, agregarProducto  ] = useState([]);

  // fecha para el footer
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
        <Header 
          titulo='Tienda Virtual'
        />

        <h1>Lista de Productos</h1>
     
        {productos.map(producto => (
            <Producto 
                key={producto.id}
                producto={producto}
                productos={productos}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        ))}
        
        <Footer 
          fecha={fecha}
        />
    </Fragment>
  );
}

export default App;
