import React from "react";
import Products from "./componets/Products";
import "./app.css";
import data from "./componets/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentSuccess from "./componets/PaymentSuccess";
import Navbar from "./componets/Navbar";
const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Products data={data} />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
