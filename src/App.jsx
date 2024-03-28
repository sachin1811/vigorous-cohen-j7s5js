import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(10);

  const startTimer = () => {
    if (timer > 0) {
      var id = setInterval(() => {
        setTimer((x) => {
          if (x <= 0) clearInterval(id);
          else x = x - 1;
          return x;
        });
      }, 1000);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>counter</h1>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        {"  " + counter + "  "}
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <div>
        <h1>Stopwatch</h1>
        <button onClick={() => setTimer(counter)}>set Timer</button>
        <button onClick={startTimer}>start Timer</button>
        {"  " + timer + "  "}
      </div>
    </div>
  );
}
