import React from 'react';

import ProductCardContainer from './ProductCardContainer';

export const Main = () => {
  return (
    <div className='w-full h-[150px]'>
      <img
        src='/img/bg-cafe.jpg'
        alt='bg-cafe banner'
        className='w-full h-full object-fill'
      />
      <ProductCardContainer />
    </div>
  );
};
