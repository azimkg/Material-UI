import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Header from "./components/Header/Header";
import MediaCard from "./components/MediaCard/MediaCard";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/add" element={<AddProduct />} />
        <Route path="/" element={<MediaCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
