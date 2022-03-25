import React from "react";
import { Link } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";

import Navbar from "../Navbar/Navbar";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            width="100px"
            src="https://thumbs.dreamstime.com/z/alaskan-malamute-dog-happy-face-paw-puppy-pup-pet-clip-art-k-cop-police-logo-svg-png-clipart-vector-cricut-cut-set-cutting-201981611.jpg"
            alt=""
          />
        </Link>
        <div>
          <img
            width="300px"
            src="https://vtlogo.com/wp-content/uploads/2021/02/retail-zoo-vector-logo.png"
            alt=""
          />
        </div>
        <AddProduct />
      </div>
      <Navbar />
    </>
  );
};

export default Header;
