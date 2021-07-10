// Importar {Fragment} para no usar div classname app  y así no generar HTML innecesario
//Importar useState para la lectura de acciones del usuario

import React, { Fragment, useState } from "react";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

import "./App.css";

function App() {
  //useState de productos
  //Array destructuring se extraen dos valores [valor,función (agrega o elimina)]
  //useState (valores iniciales)
  const [productos, regProductos] = useState([
    { id: 1, nombre: "camisa amarilla",precio: 1300,img: "img/camisa-amarilla.png",},
    { id: 2, nombre: "camisa azul", precio: 1800, img: "img/camisa-azul.png" },
    { id: 3, nombre: "camisa gris", precio: 1000, img: "img/camisa-gris.png" },
    { id: 4, nombre: "camisa morada",precio: 1900, img: "img/camisa-morada.png"},
    { id: 5, nombre: "camisa roja", precio: 1200, img: "img/camisa-roja.png" },
    { id: 6, nombre: "camisa verde",precio: 1200,img: "img/camisa-verde.png"}
  ]);

  //State para el carrito
  const [carrito, agregarProducto] = useState([]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <div className="app">
        <Welcome />
        <div className="Content">
          <div className="Productos">
            {productos.map((corredor) => (
              <Producto
                //Asignando identificador unico al componente
                key={corredor.id}
                //Prop de corredor asignando a cada valor de productos en la iteracion map
                producto={corredor}
                carrito={carrito}
                productos={productos}
                agregarProducto={agregarProducto}
              />
            ))}
          </div>
          <Carrito carrito={carrito} agregarProducto={agregarProducto} />
        </div>
      </div>

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
