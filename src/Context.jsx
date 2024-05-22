import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || null
  );

  const data = {
    cart,
    setCart,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
