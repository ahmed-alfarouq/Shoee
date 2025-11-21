import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

// Auth Pages
// import LogIn from "@pages/LogIn";
// import SignUp from "@pages/Signup";
// import VerifyEmail from "@pages/VerifyEmail";
// import ResetPassword from "@pages/ResetPassword";
// import ForgotPassword from "@pages/ForgotPassword";

// Public Pages
import { Home } from "@pages/Home";
// import {Cart} from "@pages/Cart";
import { Products } from "@pages/Products";

// import Checkout from "@pages/Checkout/Checkout";
// import ContactUs from "@pages/ContactUs/ContactUs";
// import SingleProduct from "@pages/SingleProduct/SingleProduct";

// Protected Pages
// import Account from "@pages/Account/Account";

import Error from "@pages/Error";
import { NotFound } from "@pages/NotFound";

// Components
// import Spinner from "@/components/Spinner";
import { ScrollToTop } from "@shared/ScrollToTop";
import ShopLayout from "./layouts/Shop/ShopLayout";

// import { useProducts } from "@/query/products/useProducts";

const App = () => {
  // const { isLoading, error } = useProducts({});

  const FallbackComponent = (props: FallbackProps) => <Error {...props} />;

  // if (isLoading) return <Spinner />;

  // if (error) return <Error error={{ message: error.message }} />;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <Routes>
          <Route path="/" element={<ShopLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            {/* 
            
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} /> */}

            {/* <Route
              path="/checkout"
              element={
                isAuthenticated ? (
                  verified ? (
                    <Checkout />
                  ) : (
                    <Navigate to="/verify-email" replace={true} />
                  )
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
            /> */}
            {/* <Route path="/contactus" element={<ContactUs />} /> */}
            {/* <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
