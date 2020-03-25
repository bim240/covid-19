import React from "react";
import "bulma/css/bulma.css";

import Header from "./header";
import World from "./world";
import Countries from "./contries";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <World />
      <Countries />
    </>
  );
}

export default App;
