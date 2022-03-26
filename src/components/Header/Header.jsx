import React from "react";
import { Link } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import Navbar from "../Navbar/Navbar";
import loveDog from "../Icons/LoveDog.png";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <img width="90px" height="90px" src={loveDog} alt="logo" />
        <div>
          <Link to="/">
            <img
              width="350px"
              src="https://petshop.kg/wp-content/uploads/2020/07/petshop-logo-png-1-e1594202708701.png"
              alt=""
            />
          </Link>
        </div>
        <AddProduct />
      </div>
      <Navbar />
    </>
  );
};

export default Header;
