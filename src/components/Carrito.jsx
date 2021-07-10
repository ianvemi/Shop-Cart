import React from 'react'
import Producto from './Producto';


const Carrito = ({carrito , agregarProducto}) => 
     ( 
        <div className="Carrito">
        <h2>Cart</h2>
        <div className="Cart">
            {carrito.length === 0
            ? 
            <div className="Aviso">No hay elementos en el carrito.</div>
            : carrito.map(corredor =>(
                <Producto
                    producto={corredor}
                    carrito ={carrito}
                    agregarProducto ={agregarProducto}
                />
            ))}
        </div>
        </div>
        
     );

 
export default Carrito;