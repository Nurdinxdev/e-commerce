import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartContextProvider } from "./Context.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
        <Toaster />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
