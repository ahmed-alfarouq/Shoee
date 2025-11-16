import { Link } from "react-router-dom";

import styles from "./NavMenu.module.scss";

import type { NavMenuProps } from "./NavMenu.types";

const NavMenu = ({ items, direction = "vertical" }: NavMenuProps) => {
  return (
    <nav>
      <ul
        className={styles.nav_menu}
        style={{
          flexDirection: direction === "vertical" ? "column" : "row",
        }}
      >
        {items.map((item, i) => (
          <li className={styles.menu_item} key={i}>
            <Link
              to={item.to}
              className={styles.menu_link}
              aria-label={`Go to ${item.name} page`}
            >
              {item.icon && (
                <span className={styles.icon} aria-hidden="true">
                  {<item.icon />}
                </span>
              )}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
