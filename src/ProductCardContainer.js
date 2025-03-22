import React, { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Header } from "./Header";
import coffees from "./simple-coffee-listing.json";

const ProductCardContainer = () => {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all" ? coffees : coffees.filter((product) => product.available);

  return (
    <div className="bg-[#1B1D1F] w-[90%] md:w-[90%] lg:w-[60%] xl:w-[80%] m-auto absolute top-[83px] left-1/2 transform -translate-x-1/2 p-4 md:p-8 rounded-xl text-[14px] overflow-hidden">
      <img
        src="/img/vector.svg"
        alt="vector"
        className="absolute -z-10 right-[-52px] h-32"
      />
      <Header setFilter={setFilter} filter={filter} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductCardContainer;
