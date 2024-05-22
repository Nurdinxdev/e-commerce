import React from "react";

const Navbar = () => {
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
    <nav className='max-w-full px-4 py-2 flex flex-row justify-between items-center'>
      <h1 className='font-bold text-2xl cursor-pointer'>XSTER</h1>
      <ul className='flex flex-row gap-4 '>
        <li>
          <a className='text-lg cursor-pointer' href='#'>
            Home
          </a>
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
