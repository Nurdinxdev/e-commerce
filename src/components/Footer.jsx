import React from "react";
import { FaFacebookF, FaHashtag } from "react-icons/fa6";
import { FaYoutube, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='footer items-center px-4 py-2 bg-neutral text-neutral-content flex justify-between'>
      <aside className='items-center grid-flow-col'>
        <FaHashtag className='md:w-8 md:h-8 w-6 h-6' />

        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <a href='https://twitter.com' target='_blank'>
          <FaTwitter className='md:w-8 md:h-8 w-6 h-6' />
        </a>
        <a href='https://youtube.com' target='_blank'>
          <FaYoutube className='md:w-8 md:h-8 w-6 h-6' />
        </a>
        <a href='https://facebook.com' target='_blank'>
          <FaFacebookF className='md:w-8 md:h-8 w-6 h-6' />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
