import React from "react";

const Producto = ({ producto, carrito, productos, agregarProducto }) => {
  const { id, nombre, precio, img } = producto;

  //Funcion comprando
  const comprarProducto = (id) => {
    const producto = productos.filter( (producto) => producto.id === id);
    // console.log(producto);
    agregarProducto([...carrito, ...producto]);
  };

  //Función eliminar del carrito
  const eliminarProducto = (id) =>{
    const corredor = carrito.filter( (corredor) => corredor.id !== id);
    agregarProducto(corredor);

  }

  return (
    <div className="Producto">

      <div className="Contenido">
        <img src={img} alt="Imagen-camisa"></img>
        <div className="Datos">
        <h2>{nombre}</h2>
          <h2>${precio}</h2>
          {/* Si productos existe (?) insertar botón comprar Si no (:) insertar botón eliminar  */}
          {/* productos se define en app.js por lo tanto se encuentra en productos / no se encuentra en carrito */}
          { productos
            ?(<button type="button" onClick={() => comprarProducto(id)}>
            Comprar
          </button>)

            :(<button type="button" onClick={() => eliminarProducto(id)}>
            x
          </button>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Producto;
