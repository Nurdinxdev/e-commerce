import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || null
  );

  const addToCart = (data, number, notif) => {
    if (cart) {
      const existingProductIndex = cart.findIndex(
        (item) => item.title === data.title
      );

      let updatedCart;
      if (existingProductIndex !== -1) {
        // Product already in cart, increase quantity
        updatedCart = cart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + number }
            : item
        );
      } else {
        // Product not in cart, add new product with quantity 1
        updatedCart = [...cart, { ...data, quantity: number }];
      }
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      setCart([{ ...data, quantity: 1 }]);
    }
    if (notif) toast.success("Added to cart");
  };

  const data = {
    cart,
    setCart,
    addToCart,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
