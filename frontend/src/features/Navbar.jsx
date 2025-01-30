import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import Icons
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
import { logUserOut } from "../app/features/auth/authSlice";

// Components
import SearchForm from "../components/SearchForm";
import Cart from "./cart/Cart";
import BGOverlay from "../components/BGOverlay";

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

  const authrized = useSelector((state) => state.auth.authrized);

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
  };
  
  const toggleDropdownMenu = (e) => {
    // open class is set only for screens smaller than 921px
    e.currentTarget.classList.toggle("open");
  };

  const switchSearchBox = () => {
    searchBoxRef.current.classList.toggle("open");
    setOverlayHidden(!overlayHidden);
  };

  const switchCart = () => {
    if (menuRef.current.classList.contains("open")) {
      menuRef.current.classList.toggle("open");
      cartRef.current.classList.toggle("open");
    } else {
      cartRef.current.classList.toggle("open");
      setOverlayHidden(!overlayHidden);
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

  const logout = () => {
    dispatch(logUserOut());
    handleNavigation();
  };

  return (
    <header>
      <BGOverlay reset={resetClasses} hidden={overlayHidden} />
      <Link to="/" className="logo">
        Shoee
      </Link>
      <div ref={menuRef} className="nav-right-side">
        <nav className="menu-collapse">
          <button
            type="button"
            className="close-menu"
            title="close menu"
            onClick={toggleMenu}
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
                all products
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
            <li className="dropdown" onClick={toggleDropdownMenu}>
              <div className="dropdown-btn">
                <span>account</span>
                <IoIosArrowDown />
              </div>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/account"
                    className="menu-link"
                    onClick={handleNavigation}
                  >
                    my account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    onClick={handleNavigation}
                    className="menu-link"
                  >
                    cart
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="icons">
          <div className="search-container">
            <IoIosSearch onClick={switchSearchBox} />
            <div className="search-box" ref={searchBoxRef}>
              <IoMdClose className="close" onClick={switchSearchBox} />
              <SearchForm className="hidden" options={products} />
            </div>
          </div>

          <div className="cart-container">
            <div className="cart-icon" onClick={switchCart}>
              <span>{cartCount}</span>
              <IoIosCart />
            </div>
            <Cart ref={cartRef} switchCart={switchCart} />
          </div>
          {authrized && <IoIosLogOut onClick={logout} />}
        </div>
      </div>
      <button
        type="button"
        className="toggle-icon"
        aria-label="toggle menu"
        onClick={toggleMenu}
      >
        <CiMenuBurger />
      </button>
    </header>
  );
};

export default Navbar;
