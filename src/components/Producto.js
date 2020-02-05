import React from 'react';

const Producto = ( { producto, productos, carrito, agregarProducto } ) => {

// hago destructuracion de las props de la lista de productos que llegan desde la app principal
const { id, nombre, precio } = producto;

    // Agregar producto al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id )[0];        
        agregarProducto([
            ...carrito, 
            producto
        ]);
    }

    return ( 
        <div>
           <h2>{nombre}</h2>
           <button 
                type="button"
                onClick={ () => seleccionarProducto(id) }
           >Comprar</button>
           <p>${precio}</p>
        </div>             
     );
}

 
export default Producto;