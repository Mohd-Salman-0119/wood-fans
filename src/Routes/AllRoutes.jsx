import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import LoginAndSignup from "../Pages/SignUp&Login/LoginAndSignup";
import Signup from "../Pages/SignUp&Login/Signup";
import Cart from "../Pages/Cart";
import ProductPage from "../Components/ProductPage/ProductPage";
import SingleProduct from "../Pages/SingleProduct";
import UserProfile from "..//Pages/UserProfile";
import OrderConfirmation from "../Components/OrderConfirmation";
import Checkout from "../Pages/Checkout";
import { useSelector } from "react-redux";
import Login from "../Pages/SignUp&Login/Login";

const AllRoutes = () => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  console.log("IsAuth", isAuth);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<LoginAndSignup />}></Route>
      <Route path="/products/:category" element={<ProductPage />}></Route>
      <Route path="/product/:id" element={<SingleProduct />}></Route>
      <Route path="/cart" element={isAuth ? <Cart /> : <LoginAndSignup />}></Route>
      <Route path="/success" element={<OrderConfirmation />}></Route>
      <Route path="/user/profile" element={<UserProfile />}></Route>
      <Route
        path="/checkout"
        element={isAuth ? <Checkout /> : <LoginAndSignup />}
      ></Route>
    </Routes>
  );
};

export { AllRoutes };
