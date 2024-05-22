import React from "react";
import img from "/images/asset-2.jpeg";

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='hero bg-base-200 max-w-full'>
      <div className='hero-content flex-col sm:flex-row-reverse mx-4'>
        <img src={img} className='lg:max-w-lg max-w-xs rounded-lg shadow-2xl' />
        <div>
          <h1 className='text-5xl font-bold'>
            Unleash Your Pizza Passion Here!
          </h1>
          <p className='py-6'>
            Experience the authentic taste of Italy right at your doorstep. Our
            pizzas are made with authentic ingredients and traditional recipes.
            Discover a world of flavors with our diverse range of pizzas, from
            classic Margherita to gourmet specialties. Delight your taste buds
            with our mouthwatering pizzas, crafted with love and the finest
            ingredients. Order now and elevate your dining experience!
          </p>
          <a
            onClick={() => scrollToProducts()}
            className='btn btn-primary'
            role='button'
            href='#product'
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
