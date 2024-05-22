import React from "react";
import { IoCartSharp } from "react-icons/io5";
import { useCartContext } from "../Context";

const Navbar = () => {
  const { cart } = useCartContext();

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    const productsSection = document.getElementById("about-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className='max-w-full px-8 py-2 flex flex-row justify-between items-center'>
      <h1 className='font-bold text-2xl cursor-pointer'>XSTER</h1>
      <ul className='flex flex-row gap-4 items-center'>
        <li className='relative'>
          <a className='text-2xl cursor-pointer' href='#'>
            <IoCartSharp />
          </a>
          {cart?.length > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1'>
              {cart.length}
            </span>
          )}
        </li>
        <li>
          <a
            className='text-lg cursor-pointer'
            onClick={() => scrollToProducts()}
            href='#product'
          >
            Product
          </a>
        </li>
        <li>
          <a
            className='text-lg cursor-pointer'
            onClick={() => scrollToAbout()}
            href='#about'
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
