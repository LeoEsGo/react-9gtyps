import React from "react";
import "./style.css";
import Carro from "./Carro.js";
import Moto from "./Moto.js";

export default function App() {
  return (
    <div align="center">
      <h2>Hola!</h2>
       <Moto marca="Harley davidson Sportster 48" imagen="https://www.pngmart.com/files/10/Harley-Davidson-PNG-Transparent.png" descripcion="La nueva Harley-Davidson Forty-Eight es la que monta el propulsor de mayor cilindrada dentro de la gama Sportster. En esta ocasión, el motor V-Twin Air-Cooled Evolution ™ es de 1.202cc y se caracteriza por tener una gran par motor en bajas revoluciones: el par motor máximo que alcanza es de 96Nm a 3.500rpm."/> 
       <Carro marca="BMW M3" descripcion="Soy un m3 de 8 cilindros" imagen="https://img.lovepik.com/free-png/20220120/lovepik-a-car-png-image_401521869_wh860.png"/>
    </div>
  );
}
