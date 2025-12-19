import { useEffect, useState } from "react";
import { useUserActions, useUserToken } from "@/stores/user";
import { Link, useLocation, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.scss";

import { Cart } from "@/features/Cart";
import NavItems from "./components/NavItems";
import { Button } from "@/components/Button";
import { SearchOverlay } from "@/features/SearchOverlay";

import { LuLogOut } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [overlayHidden, setOverlayHidden] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const token = useUserToken();
  const { logout } = useUserActions();

  const handleLogout = () => {
    logout();
    navigate("/sign-in", { replace: true });
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setOverlayHidden(!overlayHidden);
  };

  useEffect(() => {
    if (isOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <header className={`${styles.navbar} container`}>
      <Link to="/" className={styles.logo}>
        Shoee
      </Link>
      <nav
        className={`${styles.menu_collapse} ${isOpen && styles.open}`}
        aria-label="Main navigation"
      >
        <Button
          size="icon"
          variant="ghost"
          className={styles.close_menu}
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <IoMdClose />
        </Button>
        <NavItems />
      </nav>
      <div className={styles.icons_container}>
        <Cart />
        <SearchOverlay />
        {token && (
          <Button
            variant="ghost"
            size="icon"
            aria-label="Log out"
            onClick={handleLogout}
          >
            <LuLogOut aria-hidden="true" />
          </Button>
        )}
      </div>
      <Button
        size="icon"
        variant="ghost"
        className={styles.toggle_icon}
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <CiMenuBurger />
      </Button>
    </header>
  );
};

export default Navbar;
