import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Aniroutes from "./components/Aniroutes";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Aniroutes />
      </Router>
    </>
  );
};

export default App;
