import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const NAV_ITEMS = [
    {
      title: "TEXT 1",
      link: "*",
      id: 1,
    },
    {
      title: "TEXT 2",
      link: "*",
      id: 2,
    },
    {
      title: "TEXT 3",
      link: "*",
      id: 3,
    },
    {
      title: "TEXT 4",
      link: "*",
      id: 4,
    },
    {
      title: "TEXT 5",
      link: "*",
      id: 5,
    },
  ];

  const location = useLocation();
  return (
    <div className="navbar">
      {NAV_ITEMS.map((item) => (
        <Link className="navbar-item" key={item.id} to={item.link}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
