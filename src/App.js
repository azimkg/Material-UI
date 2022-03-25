import React from "react";
import MediaCard from "./components/MediaCard/MediaCard";
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
