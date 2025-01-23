// Import React Structure
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
//Import Style
import "./styles/main.scss";
// Pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
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
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const dispatch = useDispatch();
  const { products, lastUpdated, loading, errorMessage } = useSelector(
    (state) => ({
      products: state.products.products,
      lastUpdated: state.products.lastUpdated,
      loading: state.products.loading,
      errorMessage: state.products.errorMessage,
    })
  );

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
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/contactus" element={<ContactUs />} />
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
