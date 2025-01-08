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

const Navbar = () => {
  // Redux
  let products = useSelector((state) => state.products.products);
  let cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  // Refs
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const searchBoxRef = useRef(null);
  const inputRef = useRef(null);
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
    inputRef.current.focus();
  };
  const switchCart = (_) => {
    cartRef.current.classList.toggle("open");
  };
  return (
    <header>
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
            <div className="bg-overlay hidden" ref={overlayRef}></div>
            <IoMdClose
              className="close hidden"
              onClick={switchSearchBox}
              ref={closeIconRef}
            />
            <IoIosSearch onClick={switchSearchBox} />
            <form name="search-form" ref={searchBoxRef}>
              <label className="sr-only" htmlFor="product">
                Search
              </label>
              <input
                list="products"
                name="products"
                id="product"
                ref={inputRef}
              />
              <datalist id="products" title="products">
                {
                  // products.map((product) => (
                  //   <option value={product.name} key={product.id} />
                  // ))
                }
                <option value="value 1" />
                <option value="value 2" />
                <option value="value 3" />
                <option value="value 4" />
              </datalist>
            </form>
          </div>
          <div className="cart-icon" onClick={switchCart}>
            <span>{cartCount}</span>
            <IoIosCart />
          </div>
        </div>

        <div className="cart" ref={cartRef}>
          {cart.length
            ? cart.map((el) => {
                return (
                  <div key={el.id}>
                    <div>
                      <img src={el.image} alt={el.name} />
                      <span className="items-number">{el.qty}</span>
                    </div>
                    <h2>{el.name}</h2>
                    <BsTrashFill
                      className="trash-icon"
                      onClick={() => dispatch(removeFromCart(el.id))}
                    />
                    <h3>Total Price: {el.qty * el.price} $</h3>
                  </div>
                );
              })
            : null}
          {cart.length === 0 ? (
            <div className="no-products">
              <BsExclamationCircleFill />
              <h2>There is no products yet. Choice some.</h2>
              <Link to="/products" onClick={switchCart}>
                Products
              </Link>
            </div>
          ) : (
            <Link to="/checkout" onClick={switchCart}>
              check out
            </Link>
          )}
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
