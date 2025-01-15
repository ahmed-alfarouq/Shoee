import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import Icons
import {
  IoIosArrowDown,
  IoIosSearch,
  IoIosCart,
  IoMdClose,
} from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

// Redux
import { useSelector } from "react-redux";

// Components
import SearchForm from "../components/SearchForm";
import Cart from "./Cart";

const Navbar = () => {
  // Redux
  let products = useSelector((state) => state.products.products);
  let cart = useSelector((state) => state.products.cart);

  // Refs
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const searchBoxRef = useRef(null);
  const cartRef = useRef(null);
  const overlayRef = useRef(null);
  const closeIconRef = useRef(null);

  // State
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("open");
    overlayRef.current.classList.toggle("hidden");
    return toggleBtnRef.current.classList.toggle("open");
  };
  const switchSearchBox = () => {
    closeIconRef.current.classList.toggle("hidden");
    overlayRef.current.classList.toggle("hidden");
    searchBoxRef.current.classList.toggle("open");
  };
  const switchCart = (_) => {
    cartRef.current.classList.toggle("open");
    overlayRef.current.classList.toggle("hidden");
  };
  return (
    <header>
      {/* Used for searchbox and cart */}
      <div className="bg-overlay hidden" ref={overlayRef}></div>
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
              <Link
                to="/"
                onClick={() =>
                  menuRef.current.className.includes("open")
                    ? toggleMenu()
                    : cartRef.current.className.includes("open")
                    ? switchCart()
                    : searchBoxRef.current.className.includes("open")
                    ? switchSearchBox()
                    : null
                }
                className="menu-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={() =>
                  menuRef.current.className.includes("open")
                    ? toggleMenu()
                    : cartRef.current.className.includes("open")
                    ? switchCart()
                    : searchBoxRef.current.className.includes("open")
                    ? switchSearchBox()
                    : null
                }
                className="menu-link"
              >
                all products
              </Link>
            </li>
            <li>
              <Link
                to="/checkout"
                onClick={() =>
                  menuRef.current.className.includes("open")
                    ? toggleMenu()
                    : cartRef.current.className.includes("open")
                    ? switchCart()
                    : searchBoxRef.current.className.includes("open")
                    ? switchSearchBox()
                    : null
                }
                className="menu-link"
              >
                Check Out
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                onClick={() =>
                  menuRef.current.className.includes("open")
                    ? toggleMenu()
                    : cartRef.current.className.includes("open")
                    ? switchCart()
                    : searchBoxRef.current.className.includes("open")
                    ? switchSearchBox()
                    : null
                }
                className="menu-link"
              >
                Contact
              </Link>
            </li>

            <li className="dropdown">
              <div className="dropdown-btn">
                <span>account</span>
                <IoIosArrowDown />
              </div>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/account" className="menu-link">
                    my account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    onClick={() =>
                      menuRef.current.className.includes("open")
                        ? toggleMenu()
                        : cartRef.current.className.includes("open")
                        ? switchCart()
                        : searchBoxRef.current.className.includes("open")
                        ? switchSearchBox()
                        : null
                    }
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
            <IoMdClose
              className="close hidden"
              onClick={switchSearchBox}
              ref={closeIconRef}
            />
            <SearchForm
              className="hidden"
              ref={searchBoxRef}
              options={products}
            />
          </div>

          <div className="cart-container">
            <div className="cart-icon" onClick={switchCart}>
              <span>{cartCount}</span>
              <IoIosCart />
            </div>
            <Cart ref={cartRef} switchCart={switchCart} />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="toggle-icon"
        aria-label="toggle menu"
        onClick={toggleMenu}
        ref={toggleBtnRef}
      >
        <CiMenuBurger />
      </button>
    </header>
  );
};

export default Navbar;
