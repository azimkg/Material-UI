import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const NAV_ITEMS = [
    {
      title: "ГЛАВНАЯ ",
      link: "/",
      id: 1,
    },
    {
      title: "КОШКИ",
      link: "https://www.purina.ru/cats/getting-a-new-cat/finding-the-right-cat-for-me/the-most-beautiful-cats",
      id: 2,
    },
    {
      title: "ПТИЦЫ",
      link: "https://wwf.ru/interesting/gallery/redkie-vidy-zhivotnykh/birds/",
      id: 3,
    },
    {
      title: "РЫБКИ",
      link: "/",
      id: 4,
    },
    {
      title: "ПИТАНИЕ",
      link: "/",
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
