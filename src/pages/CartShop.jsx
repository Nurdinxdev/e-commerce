import React from "react";
import { useCartContext } from "../Context";

const CartShop = () => {
  const { cart, addToCart } = useCartContext();

  const totalPrice = cart?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const removeFromCart = (product) => {
    addToCart(product, -1);
  };
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h2 className='text-3xl font-bold mb-6'>Shopping Cart</h2>
      <div className=' flex flex-col gap-6'>
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col p-4 border rounded-md shadow-md overflow-hidden ${
                product.quantity > 0 ? "block" : "hidden"
              }`}
            >
              <div className='flex flex-row justify-between items-center'>
                <img
                  src={product.src}
                  alt={product.title}
                  className='w-24 h-24 object-cover'
                />
                <div className='flex flex-col items-start'>
                  <div className='flex flex-col flex-grow pl-4'>
                    <h3 className='text-xl font-semibold'>{product.title}</h3>
                    <p className='text-gray-700 sm:block hidden'>
                      {product.description}
                    </p>
                    <div className='flex flex-row items-center mt-2 gap-4'>
                      <button
                        className='bg-red-500 text-white px-2 py-1 rounded'
                        onClick={() => removeFromCart(product)}
                      >
                        -
                      </button>
                      <span>{product.price}</span>
                      <button
                        className='bg-green-500 text-white px-2 py-1 rounded'
                        onClick={() => addToCart(product, 1)}
                      >
                        +
                      </button>
                      <span>quantity: {product.quantity}</span>
                    </div>
                  </div>
                  <div className='flex flex-col ml-4'>
                    <p className='text-lg font-semibold'>
                      ${(product.price * product.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-700'>Your cart is empty.</p>
        )}
      </div>
      {cart.length > 0 && (
        <div className='total-price flex justify-start items-center gap-4 mt-6'>
          <button className='btn btn-primary'>Check Out</button>
          <p className='text-2xl font-bold'>Total: ${totalPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default CartShop;
