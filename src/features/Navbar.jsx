import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import Icons
import {
  IoIosArrowDown,
  IoIosSearch,
  IoIosCart,
  IoMdClose,
} from "react-icons/io";
import { BsTrashFill, BsExclamationCircleFill } from "react-icons/bs";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../app/features/products/productsSlice";
import SearchForm from "../components/SearchForm";

const Navbar = () => {
  // Redux
  let products = useSelector((state) => state.products.products);
  let cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  // Refs
  const menuRef = useRef(null);
  const btnRef = useRef(null);
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

  const menuTragger = () => {
    menuRef.current.classList.toggle("open");
    return btnRef.current.classList.toggle("open");
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
      <div className="bg-overlay hidden" ref={overlayRef}></div>{" "}
      {/* Used for searchbox and cart */}
      <Link to="/" className="logo">
        Shoee
      </Link>
      <div className="nav-right-side">
        <nav ref={menuRef} className="menu-collapse">
          <ul className="flex flex-center gap-3 menu">
            <li>
              <Link
                to="/"
                onClick={() =>
                  menuRef.current.className.includes("open")
                    ? menuTragger()
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
                    ? menuTragger()
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
                    ? menuTragger()
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
                    ? menuTragger()
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
                        ? menuTragger()
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
            
          </div>
        </div>

        <button
          className="menu-icons"
          aria-label="close"
          onClick={menuTragger}
          ref={btnRef}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
