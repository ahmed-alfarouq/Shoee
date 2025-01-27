// Import React Structure
import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
//Import Style
import "./styles/main.scss";
// Pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import CheckOut from "./pages/CheckOut";
import ContactUs from "./pages/ContactUs";
import Account from "./pages/Account/Account";
import LogIn from "./pages/Login/LogIn";
import SignUp from "./pages/Signup/Signup";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
// Components
import Spinner from "./features/Spinner";
import Navbar from "./features/Navbar";
import Footer from "./features/Footer";
import ScrollToTop from "./components/ScrollToTop";
// Redux
import {
  fetchProduts,
  updateLoadingState,
} from "./app/features/products/productsSlice";
import { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import purgeStorage from "./utils/purgeStorage";

function App() {
  const dispatch = useDispatch();
  const authrized = useSelector((state) => state.auth.authrized);
  const products = useSelector((state) => state.products.products);
  const lastUpdated = useSelector((state) => state.products.lastUpdated);
  const loading = useSelector((state) => state.products.loading);
  const errorMessage = useSelector((state) => state.products.errorMessage);

  const FallbackComponent = (props) => (
    <Error {...props} purgeStorage={purgeStorage} />
  );

  useEffect(() => {
    if (loading && !products.length) {
      dispatch(fetchProduts());
    }
  }, [loading, products.length, dispatch]);

  useEffect(() => {
    if (loading && products.length) {
      purgeStorage(lastUpdated, persistor);
      dispatch(updateLoadingState(false));
    }
  }, [loading, products.length, lastUpdated, dispatch]);

  return loading ? (
    <Spinner />
  ) : errorMessage.length ? (
    <Error error={{ message: errorMessage }} />
  ) : (
    <BrowserRouter>
      <ScrollToTop />
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route
              path="/checkout"
              element={
                authrized ? (
                  <CheckOut />
                ) : (
                  <Navigate
                    to="/login"
                    replace={true}
                    state={{
                      message: "You need to login before checking out!",
                    }}
                  />
                )
              }
            />
            <Route path="/contactus" element={<ContactUs />} />
            <Route
              path="/account"
              element={
                authrized ? (
                  <Account />
                ) : (
                  <Navigate to="/login" replace={true} />
                )
              }
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
          <Footer />
        </PersistGate>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
