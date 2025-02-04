import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import Icons
import {
  IoIosSearch,
  IoIosCart,
  IoMdClose,
  IoIosLogOut,
  IoIosArrowDown,
} from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Components
import SearchForm from "../components/SearchForm";
import Cart from "./cart/Cart";
import BGOverlay from "../components/BGOverlay";
import { logout } from "../app/features/auth/authAPI";

const Navbar = () => {
  // Redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.products.cart);

  // Refs
  const menuRef = useRef(null);
  const searchBoxRef = useRef(null);
  const cartRef = useRef(null);

  // State
  const [cartCount, setCartCount] = useState(0);
  const [overlayHidden, setOverlayHidden] = useState(true);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("open");
    setOverlayHidden(!overlayHidden);
    if (menuRef.current.classList.contains("open")) {
      menuRef.current.querySelector("button").focus();
    }
  };

  const toggleDropdownMenu = (e) => {
    e.currentTarget.classList.toggle("open");
  };

  const switchSearchBox = () => {
    searchBoxRef.current.classList.toggle("open");
    setOverlayHidden(!overlayHidden);
    if (searchBoxRef.current.classList.contains("open")) {
      searchBoxRef.current.querySelector("input").focus();
    }
  };

  const switchCart = () => {
    if (menuRef.current.classList.contains("open")) {
      menuRef.current.classList.toggle("open");
      cartRef.current.classList.toggle("open");
    } else {
      cartRef.current.classList.toggle("open");
      setOverlayHidden(!overlayHidden);
    }
    if (cartRef.current.classList.contains("open")) {
      cartRef.current.querySelector("button").focus();
    }
  };

  const resetClasses = () => {
    cartRef.current.classList.remove("open");
    menuRef.current.classList.remove("open");
    searchBoxRef.current.classList.remove("open");
    setOverlayHidden(!overlayHidden);
  };

  const handleNavigation = () =>
    menuRef.current.className.includes("open")
      ? toggleMenu()
      : cartRef.current.className.includes("open")
      ? switchCart()
      : searchBoxRef.current.className.includes("open")
      ? switchSearchBox()
      : null;

  const handleLogout = () => {
    dispatch(logout());
    handleNavigation();
  };

  return (
    <header>
      <BGOverlay reset={resetClasses} hidden={overlayHidden} />
      <Link to="/" className="logo">
        Shoee
      </Link>
      <div ref={menuRef} className="nav-right-side">
        <nav className="menu-collapse" aria-label="Main navigation">
          <button
            type="button"
            className="close-menu"
            title="close menu"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <span className="sr-only">close menu</span>
            <IoMdClose />
          </button>
          <ul className="flex flex-center menu">
            <li>
              <Link to="/" onClick={handleNavigation} className="menu-link">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={handleNavigation}
                className="menu-link"
              >
                All products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleNavigation}
                className="menu-link"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                onClick={handleNavigation}
                className="menu-link"
              >
                Contact
              </Link>
            </li>
            <li
              className="dropdown"
              onClick={toggleDropdownMenu}
              tabIndex="0"
              role="button"
            >
              <div className="dropdown-btn">
                <span>Account</span>
                <IoIosArrowDown />
              </div>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <Link
                    to="/account"
                    className="menu-link"
                    onClick={handleNavigation}
                  >
                    My account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    onClick={handleNavigation}
                    className="menu-link"
                  >
                    Cart
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="icons">
          <div className="search-container">
            <button type="button" onClick={switchSearchBox} aria-label="Search">
              <IoIosSearch />
            </button>
            <div
              className="search-box"
              ref={searchBoxRef}
              role="dialog"
              aria-modal="true"
              aria-hidden="true"
            >
              <button
                type="button"
                className="close"
                onClick={switchSearchBox}
                aria-label="Close search"
              >
                <IoMdClose />
              </button>
              <SearchForm
                className="hidden"
                options={products}
                close={switchSearchBox}
              />
            </div>
          </div>

          <div className="cart-container">
            <button
              type="button"
              className="cart-icon"
              onClick={switchCart}
              aria-label="Cart"
            >
              <span>{cartCount}</span>
              <IoIosCart />
            </button>
            <Cart ref={cartRef} switchCart={switchCart} />
          </div>
          {isAuthenticated && (
            <button type="button" onClick={handleLogout} aria-label="Logout">
              <IoIosLogOut />
            </button>
          )}
        </div>
      </div>
      <button
        type="button"
        className="toggle-icon"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <CiMenuBurger />
      </button>
    </header>
  );
};

export default Navbar;
