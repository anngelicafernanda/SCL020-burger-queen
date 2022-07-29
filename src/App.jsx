import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import "./App.css";
import OrderDetails from "./pages/OrderDetails/OrderDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="order" element={<OrderPage />} />
      <Route path="orderDetails" element={<OrderDetails />} />
    </Routes>
  );
};

export default App;
