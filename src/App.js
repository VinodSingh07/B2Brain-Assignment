import React from "react";
import Home from "./components/Home";
import { useContext } from "react";
import { AppContext } from "./context";
import { useGlobalContext } from "./context";
const App = () => {
  const data = useContext(AppContext);

  return <Home />;
};

export default App;
