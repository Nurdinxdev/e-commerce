import React from "react";
import { IoCartSharp } from "react-icons/io5";
import { useCartContext } from "../Context";
import { Link } from "react-router-dom";

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

  const totalLength = cart?.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className='max-w-full px-8 py-2 flex flex-row justify-between items-center sticky top-0 z-50 bg-base-100'>
      <h1 className='font-bold text-2xl cursor-pointer'>
        <Link to={"/"}>XSTER </Link>
      </h1>
      <ul className='flex flex-row gap-4 items-center'>
        <li className='relative'>
          <Link className='text-2xl cursor-pointer' to='/cart'>
            <IoCartSharp />
          </Link>
          {cart?.length > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1'>
              {totalLength}
            </span>
          )}
        </li>
        <li>
          <Link
            className='text-lg cursor-pointer'
            onClick={() => scrollToProducts()}
            href='#product'
          >
            Product
          </Link>
        </li>
        <li>
          <Link
            className='text-lg cursor-pointer'
            onClick={() => scrollToAbout()}
            href='#about'
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
