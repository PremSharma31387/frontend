import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customers/components/Pages/HomePage";
import Cart from "../customers/components/Cart/Cart";
import Navigation from "../customers/components/Navigation/Navigation";
import Footer from "../customers/components/Footer/Footer";
import Product from "../customers/components/Products/Product";
import ProductDetails from "../customers/components/ProductDetails/ProductDetail";
import Checkout from "../customers/components/Checkout/Checkout";
import Order from "../customers/components/Order/Order";
import OrderDetail from "../customers/components/Order/OrderDetail";
import OrderSummary from "../customers/components/Checkout/OrderSummary";
import PaymentSuccess from "../customers/components/Payment/PaymentSuccess";

const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetail />} />
        <Route path="/orderSummary" element={<OrderSummary />} />
        <Route path="/payment/:orderId" element={<PaymentSuccess />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouter;
