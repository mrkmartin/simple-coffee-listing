import React from "react";

export const ProductCard = ({ product }) => {
  return (
    // <div className='flex flex-col items-center'>
    <>
      <div className="mb-12">
        <li>
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-[100vw] rounded-xl"
              // className='w-full max-w-[300px] md:max-w-[250px] lg:max-w-[200px] rounded-xl'
            />
            <p
              className={
                product.popular &&
                "w-16 text-[8px] sm:text-[10px] md:text-[12px] text-[#111315] bg-[#F6C768] px-1 py-1 font-bold rounded-2xl absolute top-2.5 left-2.5"
              }
            >
              {product.popular ? "Popular" : ""}
            </p>
          </div>
          <div>
            <div className="flex justify-between mt-3">
              <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#FEF7EE] font-bold text-left self-center">
                {product.name}
              </p>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#111315] bg-[#BEE3CC] font-bold w-11 sm:w-14 md:w-17 py-0.5 px-1.5 rounded text-center">
                {product.price}
              </p>
            </div>
            <div className="flex justify-between mt-2.5 items-center text-[12px] sm:text-[14px] md:text-[16px]">
              <div className="flex items-center">
                <img
                  src={product.votes ? "/img/Star_fill.svg" : "/img/Star.svg"}
                  alt="star-svg"
                  className="mr-2"
                />
                <span className="text-[#FEF7EE] mr-1 ">{product.rating}</span>
                <span className="text-[#6F757C] font-bold ">
                  {product.votes > 0 ? `(${product.votes} votes)` : ""}
                </span>
              </div>
              <p className="text-[#ED735D] text-right">
                {product.available ? "" : "Sold out"}
              </p>
            </div>
          </div>
        </li>
      </div>
    </>
  );
};
