import React from "react";
import "./style.css";

export default function Moto(props) {
  return (
    <div>
      <h1>Soy una moto</h1>
      <p>{props.descripcion}</p>
      <img src= {props.imagen} alt="Imagen" width="150" alai/>
    </div>
  );
}
