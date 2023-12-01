'use client';

import React from 'react';
import Image from 'next/image';

import { profilePage } from '@/components/hoc/ProfileLayout';
import { Loader } from '@/components/small/Loader';
import { Card } from '@/components/large/Card';
import { useCart } from '@/store/cart';
import styles from './styles.module.css';
import { useFavoriteGoods } from './useFavoriteGoods';

const FavoriteGoods = () => {
  const { data, isError, isLoading } = useFavoriteGoods();
  const { addProduct } = useCart();

  return (
    <div className={styles.page}>
      <h3 className={styles.title}>Favorite goods</h3>
      {isLoading && !isError && (
        <div className={styles.errorWrapper}>
          <Loader size={60} width={9} className={styles.loader} />
        </div>
      )}
      {isError && (
        <div className={styles.errorWrapper}>
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
      {Array.isArray(data) && !data.length && !isError && !isLoading && (
        <div className={styles.errorWrapper}>
          <Image
            className={styles.errorIcon}
            src="/icons/warning.svg"
            alt="error"
            width={30}
            height={30}
          />
          <p className={styles.warningMessage}>No data</p>
        </div>
      )}
      {!isLoading && !isError && !!data && (
        <div className={styles.products}>
          {data.map((product) => (
            <Card
              id={product._id}
              img={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.photos[0]}`}
              title={product.title}
              description={product.description}
              price={product.price}
              onAddToCart={() => addProduct(product, 1)}
              isFavorite
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default profilePage(FavoriteGoods);
