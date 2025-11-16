import styles from "./SocialIcons.module.scss";

import type { SocialIconsProps } from "./SocialIcons.types";

const SocialIcons = ({ items, direction = "vertical", className }: SocialIconsProps) => {
  return (
    <nav className={className}>
      <ul
        className={styles.nav_menu}
        style={{
          flexDirection: direction === "vertical" ? "column" : "row",
        }}
      >
        {items.map((item, i) => (
          <li key={i}>
            <a
              href={item.to}
              aria-label={`Go to ${item.name}`}
              className={styles.item}
            >
              {item.icon && <item.icon aria-hidden="true" />}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialIcons;
