import React from "react";

export const Header = ({ filter, setFilter }) => {
  return (
    <>
      <h1 className="text-[#FEF7EE] font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mt-12 mb-4">
        Our Collection
      </h1>
      <p className="text-[#6F757C] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-snug md:leading-relaxed text-balance mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[80%]  mb-6 md:mb-8">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <div className="text-[#FEF7EE] mb-10 md:mb-18 flex justify-center gap-2 md:gap-4">
        <button
          className={`px-3 py-1.5 rounded-md tracking-wider ${
            filter === "all" ? "bg-[#6F757C]" : ""
          }`}
          onClick={() => setFilter("all")}
        >
          All Products
        </button>
        <button
          className={`px-3 py-1.5 rounded-md tracking-wider ${
            filter === "available" ? "bg-[#6F757C]" : ""
          }`}
          onClick={() => setFilter("available")}
        >
          Available Now
        </button>
      </div>
    </>
  );
};
