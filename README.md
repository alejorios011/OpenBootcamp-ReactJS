# OpenBootcamp-ReactJS
Repositorio con diferentes proyectos según los talleres solicitados en el curso de OpenBootcamp de ReactJS.

## Table of Contents
1. [Ejercicios](#ejercicios)
2. [Tecnologias](#tecnologias)
3. [Instalacion](#instalacion)

## Ejercicios
Aqui agregare la descripcion de lo que se solicitaba en cada taller.

### Taller 1
Para este primer reto de programación en React vamos a poner en practica lo aprendido hasta ahora para crear dos componentes.
Cada uno de estos componentes tendrá sus propias características.

Componente A: Este componente va a tener disponer un Contacto(crea una clase para ello), que va a contar con las siguientes características:

* Nombre: que será un String.
* Apellido: también un String.
* Email: de nuevo un String.
* Conectado: será un booleano que nos indicará si la persona está conectada o no.

Componente B: Por otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar su estado de conectado a desconectado y viceversa.

* Si el contacto está conectado, se debe mostrar: Contacto En Línea
* Si el contacto no está conectado, se debe mostrar: Contacto No Disponible

Renderizado de componentes en la solución:

* El Componente A debe ser renderizado dentro del componenet App.js del proyecto.
* El Componente B debe ser renderizado desde el componte A y recibir los props adecuadamente

Recordatorio: Haz uso de Proptypes adecuadamente

### Taller 2
Partiendo del siguiente componente de clase que contempla varios métodos de ciclo de vida, convertidlo en un componente funcional que realice exactamente lo mismo:

**** NOTA: Realice este ejercicio en el mismo taller 1, en la ruta src/hooks/clock.jsx, ahi esta también el componente de clase que se debia cambiar.

## Tecnologias
Lista de tecnologias utilizadas dentro del proyecto:
* [Node](https://nodejs.org/en): Version 18.16.0 LTS
* [NPM](https://example.com): Version 9.5.1
* [React JS](https://legacy.reactjs.org/docs/getting-started.html): Version 18.2.0 
## Instalacion
Para utilizar el proyecto. 
```
$ git clone https://example.com
$ cd ../path/to/the/file
$ npm install
$ npm start
