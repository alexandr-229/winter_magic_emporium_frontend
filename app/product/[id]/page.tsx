import React from 'react';
import cn from 'classnames';
import { ProductDescription } from '@/components/large/ProductDescription';
import { Slider } from '@/components/large/Slider';
import { ProductTag } from '@/components/large/Slider/types';
import { ProductList } from '@/components/large/ProductList';
import styles from './styles.module.css';
import { useProduct } from './useProduct';

const Product = () => {
  const { products } = useProduct();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Product title</h1>
      <Slider
        className={styles.slider}
        photos={[
          'https://t8g4g5t5.rocketcdn.me/wp-content/uploads/2019/11/AdriaticDragon-16-exterior-1619x1080.jpg',
          'https://www.katamarans.com/wp-content/uploads/2019/09/salon-ncz5119-a3-scaled.jpg',
          'https://pics.worldwideluxuryyacht.com/photos/boats/7143/original/1766_lagooncatamaranlagoon771676559929.jpg',
        ]}
        isFavorite
        tag={ProductTag.ToOrder}
      />
      <ProductDescription
        className={styles.description}
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
      <p className={cn(styles.productsTitle, styles.similarProductsTitle)}>Similar products</p>
      <ProductList products={products} loading={false} error={false} className={styles.similarProducts} />
      <p className={cn(styles.productsTitle, styles.popularProductsTitle)}>Popular products</p>
      <ProductList products={products} loading={false} error={false} className={styles.popularProducts} />
    </div>
  );
};

export default Product;
