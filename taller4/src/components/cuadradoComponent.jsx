import React, { useState } from "react";

const CuadradoComponent = () => {
  const [color, setColor] = useState({});
  const [temporizador, setTemporizador] = useState(0);

  /**
   * Creo que no se solicita pero tal vez al detenerse el cambio de color, deberia volver a ser negro
   * el cuadrado, asi que dejare agregado este estado opcional, si realmente se necesita que funcione de esta manera solo
   * debe descomentarse la linea de código 42, de la funcion detenerCambioColor()
   */
  const [modificado, setModificado] = useState(false);

  /**
   * Esta función sirve para iniciar el estado de temporizador y así llamar continuamente la función de cambio de color,
   * hasta que sea detenida.
   */
  const iniciarCambiarColor = () => {
    setTemporizador(setInterval(generarColorRandom, 1000));
  };

  const generarColorRandom = () => {
    // Primero capturamos generamos los colores en unas variables por aparte
    let rojo = Math.floor(Math.random() * 255);
    let verde = Math.floor(Math.random() * 255);
    let azul = Math.floor(Math.random() * 255);
    // Luego establecemos el color RGB atraves del setColor
    let colorRGB = {
      backgroundColor: `rgb(${rojo}, ${verde}, ${azul})`,
    };

    setColor(colorRGB);
    setModificado(true);
  };

  // Al salir del cuadrado o al dar doble click esta función detendra el cambio de color
  const detenerCambioColor = () => {
    setTemporizador(clearInterval(temporizador));

    // En caso de que el ejercicio solicite que al detenerse el cambio de color vuelva a su
    // color original entonces descomentar esta linea de código
    // setModificado(false);
  };

  // La clase cuadrado es la que le esta dando la forma del cuadrado
  return (
    <div className="cuadrado-container">
      <div>
        <h1>Taller 4: Cuadrado cambiacolor</h1>
      </div>
      <div
        className="cuadrado"
        onMouseEnter={iniciarCambiarColor}
        onMouseLeave={detenerCambioColor}
        onDoubleClick={detenerCambioColor}
        style={modificado ? color : { backgroundColor: "black" }}
      ></div>
    </div>
  );
};

export default CuadradoComponent;
