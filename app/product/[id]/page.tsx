'use client';

import React from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { ProductDescription } from '@/components/large/ProductDescription';
import { Slider } from '@/components/large/Slider';
import { ProductTag } from '@/components/large/Slider/types';
import { Loader } from '@/components/small/Loader';
import { ProductList } from '@/components/large/ProductList';
import { useCart } from '@/store/cart';

import styles from './styles.module.css';
import { useProduct } from './useProduct';

const Product = () => {
  const {
    product,
    productError,
    productLoading,
    popularProducts,
    popularProductsError,
    popularProductsLoading,
    similarProducts,
    similarProductsError,
    similarProductsLoading,
  } = useProduct();
  const { addProduct } = useCart();

  return (
    <div className={styles.wrapper}>
      {false && (
        <div className={styles.loaderWrapper}>
          <Loader size={100} width={10} />
        </div>
      )}
      {productError && (
        <div className={styles.loaderWrapper}>
          <Image
            className={styles.errorIcon}
            src="/icons/error.svg"
            alt="error"
            width={30}
            height={30}
          />
          <p className={styles.errorMessage}>Something went wrong</p>
        </div>
      )}
      {!productLoading && !productError && product && (
        <>
          <h1 className={styles.title}>{product?.title || ''}</h1>
          <Slider
            className={styles.slider}
            photos={product?.photos || []}
            isFavorite={product.isFavorite}
            tag={product?.tag || ProductTag.NotAvailable}
            productId={product._id}
          />
          <ProductDescription
            className={styles.description}
            pricePerItem={product?.price || 0}
            discountPercent={product?.discounts || 0}
            totalQuantity={product?.quantity || 0}
            sizes={[`${product?.size.value || 1}${product?.size.unit || 'm'}`]}
            description={product?.description}
            onAddToCart={(quantity) => addProduct(product, quantity)}
            size={{
              height: `${product?.size.value || 1}${product?.size.unit || 'm'}`,
              width: `${product?.size.value || 1}${product?.size.unit || 'm'}`,
            }}
          />
        </>
      )}
      <p className={cn(styles.productsTitle, styles.similarProductsTitle)}>Similar products</p>
      <ProductList
        products={similarProducts || []}
        loading={similarProductsLoading}
        error={similarProductsError}
        className={styles.similarProducts}
      />
      <p className={cn(styles.productsTitle, styles.popularProductsTitle)}>Popular products</p>
      <ProductList
        products={popularProducts || []}
        loading={popularProductsLoading}
        error={popularProductsError}
        className={styles.popularProducts}
      />
    </div>
  );
};

export default Product;
