import "./App.css";
import { Clock, ClockHook } from "./hooks/clock";
// import ContactoContainer from "./components/containers/contacto-container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ContactoContainer /> */}
        {/* Dejare los dos funcionando para que se mas fácil comprobar si esta bien o no */}
        <Clock />
        <ClockHook />
      </header>
    </div>
  );
}

export default App;
