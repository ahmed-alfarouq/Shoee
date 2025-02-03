import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ items, direction }) => {
  return (
    <nav className="menu-wrap">
      <ul
        className="menu flex gap-3"
        style={{
          flexDirection: direction === "vertical" ? "column" : "row",
        }}
        aria-live="polite"
      >
        {items.map((item, i) => (
          <li className="menu-item" key={i}>
            <Link
              to={item.to}
              className="menu-link"
              aria-label={`Go to ${item.name} page`}
            >
              {item.name}
              {item.icon ? (
                <span className="menu-icon" aria-hidden="true">
                  {item.icon}
                </span>
              ) : (
                ""
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
