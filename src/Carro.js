import React from "react";
import "./style.css";

export default function Carro(props) {
  return (
    <div>
      <h1>Soy un carro</h1>
      <p> {props.descripcion} </p>
      <img src={props.imagen} alt="" width="150"/>
    </div>
  );
}
