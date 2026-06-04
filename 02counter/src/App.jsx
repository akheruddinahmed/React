import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  //et counter = 5;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    //console.log("clicked ", counter);
  };

  const remValue = () => {
    setCounter(counter - 1);
    //console.log(counter);
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br></br>
      <button onClick={remValue}>Remove Value</button>
    </>
  );
}

export default App;
