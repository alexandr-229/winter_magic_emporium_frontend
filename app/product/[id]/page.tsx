import React from 'react';
import { ProductDescription } from '@/components/large/ProductDescription';
import { Slider } from '@/components/large/Slider';
import { ProductTag } from '@/components/large/Slider/types';

const Product = () => {
  return (
    <div>
      <Slider
        photos={[
          'https://t8g4g5t5.rocketcdn.me/wp-content/uploads/2019/11/AdriaticDragon-16-exterior-1619x1080.jpg',
          'https://www.katamarans.com/wp-content/uploads/2019/09/salon-ncz5119-a3-scaled.jpg',
          'https://pics.worldwideluxuryyacht.com/photos/boats/7143/original/1766_lagooncatamaranlagoon771676559929.jpg',
        ]}
        isFavorite
        tag={ProductTag.ToOrder}
      />
      <ProductDescription
        pricePerItem={100}
        discountPercent={10}
        totalQuantity={10}
        sizes={['20m', '30m']}
        description="Description Description Description"
        size={{
          height: '20m',
          width: '30m',
        }}
      />
    </div>
  );
};

export default Product;
