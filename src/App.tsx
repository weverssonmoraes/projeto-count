import React, { useState } from "react";

import "./App.css";
import { Logo } from "./components/Logo";

function App() {
  const [numero, setNumero] = useState(0);

  const handleMore = () => {
    setNumero( numero + 1 )
  };

  const handleMinus = () => {
    setNumero( numero - 1 )
  }

  return (
    <div className="mae">
      <Logo />
      <div className="buttons">
        <button onClick={handleMinus}>-</button>
        <div className="number">{numero}</div>
        <button onClick={handleMore}>+</button>
      </div>
    </div>
  );
}

export default App;
