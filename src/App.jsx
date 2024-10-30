import { useState } from "react";
import "./App.css";
import Balance from "./components/Balance";
import Spending from "./components/Spending";

function App() {
  return (
    <div className="App">
      <Balance />
      <Spending/>
    </div>
  );
}

export default App;
