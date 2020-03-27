import React from "react";
import "bulma/css/bulma.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import World from "./world";
import Countries from "./contries";
import "./style.css";
import Charts from "./Graphs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <World />
          <Countries />
        </Route>
        <Route path="/graphs" component={Charts} />
      </BrowserRouter>
    </>
  );
}

export default App;
