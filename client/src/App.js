import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { Router, router } from "@reach/router";
import Main from "./views/Main";
import Detail from "./Components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/home" default />
        <Detail path="/people/:id" />
      </Router>
    </div>
  );
}

export default App;
