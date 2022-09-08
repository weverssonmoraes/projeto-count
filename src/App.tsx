import React, { useState } from "react";

import "./App.css";

function App() {
  const [numero, setNumero] = useState(0);

  const handleMore = () => {
    setNumero( numero + 1 )
  };

  const handleMinus = () => {
    setNumero( numero - 1 )
  }

  return (
    <div className="buttons">
      <button onClick={handleMinus}>-</button>
      <div className="number">{numero}</div>
      <button onClick={handleMore}>+</button>
    </div>
  );
}

export default App;
