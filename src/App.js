import React from "react";
import Donut from "./component/donut";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Donut topping="Chocolate" flavor="Bitter" />
      <hr />
      <Donut topping="White Chocolate" flavor="Vanilla" />
      <hr />
      <Donut />
      <hr />
      <Donut topping="Sprinkles" flavor="Caramel" />
    </div>
  );
}

export default App;
