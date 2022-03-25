import React from "react";
import ContextProductProvider from "./context/ContextProduct";
import MyRoute from "./MyRoute";

const App = () => {
  return (
    <ContextProductProvider>
      <MyRoute />
    </ContextProductProvider>
  );
};

export default App;
