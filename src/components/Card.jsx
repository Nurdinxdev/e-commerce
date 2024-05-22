import React from "react";

const Card = ({ src, title, description, price }) => {
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
        <h2 className='card-title'>{title}</h2>
        <p className='text-primary text-sm'>{price}</p>
        <p className='sm:block hidden'>{description}</p>
        <div className='card-actions justify-end'>
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
