import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./Header";
import CurrentCity from "./CurrentCity";
import Container from "./Container";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header /> <CurrentCity />
    <Container />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
