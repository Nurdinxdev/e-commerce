import React from "react";
import Card from "./Card";
import { useCartContext } from "../Context";

const Products = () => {
  const { dataImages: data } = useCartContext();

  return (
    <div className='max-w-full px-4 py-8' id='products-section'>
      {data.map((item) => (
        <div key={item[0].category}>
          <h1 className='text-3xl font-bold mb-4'>{item[0].category}</h1>
          <div className='grid sm:grid-cols-3 place-items-center gap-4'>
            {item[0].products.map((product) => (
              <Card key={product.title} {...product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
