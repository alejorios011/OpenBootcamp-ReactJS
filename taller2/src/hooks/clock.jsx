import React, { Component, useEffect, useState } from "react";
// import "../../styles/clock.scss";

export class Clock extends Component {
  constructor(props) {
    super(props);
    // Estado privado del component
    this.state = {
      // Se genera una fecha como estado inicial del componente
      fecha: new Date(),
      edad: 0,
      nombre: "Martín",
      apellidos: "San José",
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h2>
          Hora Actual:
          {this.state.fecha.toLocaleTimeString()}
        </h2>
        <h3>
          {this.state.nombre} {this.state.apellidos}
        </h3>
        <h1>Edad: {this.state.edad}</h1>
      </div>
    );
  }
  tick() {
    this.setState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }
}

export const ClockHook = () => {
  // Valores iniciales del estado
  const initialState = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  // Utilizamos la hook de useState y le pasamos como valor inicial el objeto que hicimos anteriormente
  const [state, setState] = useState(initialState);

  // Para manejar el ciclo de vida del componente de función usaremos el useEffect()
  useEffect(() => {
    /**
     * Agregue la función en el useEffect debido a "[ESLint] Feedback for 'exhaustive-deps' lint rule #14920" al parecer hay una
     * nueva regla sobre como debemos utlizarlo.
     */

    // Creamos la función tick() que se estara ejecutando en el useEffect() cada vez que se realice un cambio de estado
    function tick() {
      let edad = state.edad + 1;
      setState({
        ...state,
        fecha: new Date(),
        edad,
      });
    }

    // Esta sección reemplazara el componentDidMount()
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      // Esta sección reemplaza el componentWillUnmount()
      clearInterval(timerID);
    };
  }, [state]);

  // Reutilizamos la misma estructura del componente de clase, solo quitandole los "this"
  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};
