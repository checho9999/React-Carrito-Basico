import React from 'react';

const Producto = ( { producto } ) => {

// hago destructuracion de las props de la lista de productos que llegan desde la app principal
const { id, nombre, precio } = producto;

    return ( 
        <div>
           <h2>{nombre}</h2>
           <p>${precio}</p>
        </div>             
     );
}

 
export default Producto;