import "./App.css";
import { Clock, ClockHook } from "./hooks/clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <ClockHook />
      </header>
    </div>
  );
}

export default App;
