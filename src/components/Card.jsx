import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { useCartContext } from "../Context";

const Card = ({ src, title, description, price }) => {
  const { addToCart } = useCartContext();

  const sendToWhatsapp = () => {
    const message = `I want to buy ${title} from E-commerce.`;
    const url = `https://wa.me/+0123456789?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className='card card-compact max-w-sm bg-base-100 shadow-xl'>
      <figure>
        <img src={src} alt={title} />
      </figure>
      <div className='card-body'>
        <h2 className='sm:card-title text-xs'>{title}</h2>
        <p className='text-primary text-xs sm:text-sm'>${price}</p>
        <p className=''>{description}</p>
        <div className='card-actions justify-end'>
          <button
            className='btn btn-neutral md:btn-md btn-sm'
            onClick={() =>
              addToCart({ src, title, description, price }, 1, true)
            }
          >
            <BsCartPlus />
          </button>
          <button
            className='btn btn-primary md:btn-md btn-sm'
            onClick={() => sendToWhatsapp()}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
