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
import BGOverlay from "../components/BGOverlay";

const Navbar = () => {
  // Redux
  let products = useSelector((state) => state.products.products);
  let cart = useSelector((state) => state.products.cart);

  // Refs
  const menuRef = useRef(null);
  const searchBoxRef = useRef(null);
  const cartRef = useRef(null);

  // State
  const [cartCount, setCartCount] = useState(0);
  const [overlayHidden, setOverlayHidden] = useState(true);

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

            <li className="dropdown" onClick={toggleDropdownMenu}>
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
