import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Header from "./components/Header/Header";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
