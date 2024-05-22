import React from "react";
import Card from "./Card";
import data from "../data/data";

const Products = () => {
  const datas = data;

  return (
    <div className='max-w-full px-4 py-8' id='products-section'>
      {datas.map((item) => (
        <>
          <h1 className='text-3xl font-bold mb-4' key={item[0].category}>
            {item[0].category}
          </h1>
          <div className='grid grid-cols-3 gap-4'>
            {item[0].products.map((product) => (
              <Card key={product.title} {...product} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Products;
