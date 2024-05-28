import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import imgPizza1 from "/images/asset-3.jpeg";
import imgPizza2 from "/images/asset-4.jpeg";
import imgPizza3 from "/images/asset-5.jpeg";
import imgBurger1 from "/images/asset-7.jpeg";
import imgBurger2 from "/images/asset-8.jpeg";
import imgBurger3 from "/images/asset-9.jpeg";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || null
  );

  const dataImages = [
    [
      {
        category: "Pizza",
        products: [
          {
            src: imgPizza1,
            price: 15.99,
            title: "Pizza Mozzarella",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati, voluptatibus quaerat eum corporis est. Quas maiores consequatur officia sed cum. Reiciendis similique maxime debitis!",
          },
          {
            src: imgPizza2,
            price: 19.99,
            title: "Pizza Margherita",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati, voluptatibus quaerat eum corporis est. Quas maiores consequatur officia sed cum. Reiciendis similique maxime debitis!",
          },
          {
            src: imgPizza3,
            price: 22.99,
            title: "Pizza Funghi",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati, voluptatibus quaerat eum corporis est. Quas maiores consequatur officia sed cum. Reiciendis similique maxime debitis!",
          },
        ],
      },
    ],
    [
      {
        category: "Burger",
        products: [
          {
            src: imgBurger1,
            price: 15.99,
            title: "BBQ Burger",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati, voluptatibus quaerat eum corporis est. Quas maiores consequatur officia sed cum. Reiciendis similique maxime debitis!",
          },
          {
            src: imgBurger2,
            price: 12.99,
            title: "Cheese Burger",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati, voluptatibus quaerat eum corporis est. Quas maiores consequatur officia sed cum. Reiciendis similique maxime debitis!",
          },
          {
            src: imgBurger3,
            price: 10.99,
            title: "Mushroom Swiss Burger",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati, voluptatibus quaerat eum corporis est. Quas maiores consequatur officia sed cum. Reiciendis similique maxime debitis!",
          },
        ],
      },
    ],
  ];

  const addToCart = (data, number, notif) => {
    if (cart) {
      const existingProductIndex = cart.findIndex(
        (item) => item.title === data.title
      );

      let updatedCart;
      if (existingProductIndex !== -1) {
        updatedCart = cart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + number }
            : item
        );
      } else {
        updatedCart = [...cart, { ...data, quantity: number }];
      }
      // filter all updatedCart with 0 quantity
      updatedCart = updatedCart.filter((item) => item.quantity > 0);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newCart = [{ ...data, quantity: 1 }];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
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
    window.open(url, "_blank");
  };

  const data = {
    cart,
    setCart,
    addToCart,
    sendToWhatsapp,
    dataImages,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
