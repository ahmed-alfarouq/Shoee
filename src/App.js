// Import React Structure
import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
//Import Style
import "./styles/main.scss";
// Pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import CheckOut from "./pages/CheckOut";
import ContactUs from "./pages/ContactUs";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
// Components
import Spinner from "./features/Spinner";
import Navbar from "./features/Navbar";
import Footer from "./features/Footer";
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
  const products = useSelector((state) => state.products.products);
  const lastUpdated = useSelector((state) => state.products.lastUpdated);
  const loading = useSelector((state) => state.products.loading);
  const errorMessage = useSelector((state) => state.products.errorMessage);

  useEffect(() => {
    if (loading && !products.length) {
      dispatch(fetchProduts());
    } else if (loading && products.length) {
      purgeStorage(lastUpdated, persistor);
      dispatch(updateLoadingState(false));
    }
  }, [loading, products, lastUpdated, dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={(props) => (
          <Error {...props} purgeStorage={purgeStorage} />
        )}
      >
        <PersistGate loading={<Spinner />} persistor={persistor}>
          <Navbar />
          <Routes>
            {errorMessage.length ? (
              <Route
                exact
                path="*"
                element={<Error error={{ message: errorMessage }} />}
              />
            ) : (
              <>
                <Route exact path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/singleProduct" element={<SingleProduct />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" exact element={<h1>Not Found</h1>} />
              </>
            )}
          </Routes>
          <Footer />
        </PersistGate>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
