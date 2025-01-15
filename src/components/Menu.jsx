import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ items, style }) => {
  return (
    <nav className="menu-wrap">
      <ul
        className="menu flex gap-3"
        style={{
          flexDirection: style === "vertical" ? "column" : "row",
        }}
      >
        {items.map((item) => (
          <li className="menu-item">
            <Link to={item.to} className="menu-link">
              {item.name}
              {item.icon ? <span className="menu-icon">{item.icon}</span> : ""}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
