import React from "react";
import { Link } from "react-router-dom";
import { ShoppingOutlined } from "@ant-design/icons";

import Navbar from "../Navbar/Navbar";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div></div>
        <Link to="/">
          <img
            width="200px"
            src="https://thumbs.dreamstime.com/z/alaskan-malamute-dog-happy-face-paw-puppy-pup-pet-clip-art-k-cop-police-logo-svg-png-clipart-vector-cricut-cut-set-cutting-201981611.jpg"
            alt=""
          />
        </Link>
        <Link to="/cart">
          <ShoppingOutlined style={{ fontSize: "30px", color: "black" }} />
        </Link>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
