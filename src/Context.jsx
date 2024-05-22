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

  const sendToWhatsapp = (data) => {
    const message = data
      .filter((item) => item.quantity > 0)
      .map((item) => `${item.quantity} x ${item.title} - $${item.price}`)
      .join("\n");
    const total = data.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const finalMessage = `I want to buy:\n${message}\n\nTotal: $${total.toFixed(
      2
    )}`;
    const url = `https://wa.me/+0123456789?text=${encodeURIComponent(
      finalMessage
    )}`;
    console.log(finalMessage);
    console.log(url);
    // window.open(url, "_blank");
  };

  const data = {
    cart,
    setCart,
    addToCart,
    sendToWhatsapp,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
