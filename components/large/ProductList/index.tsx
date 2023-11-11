import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { Loader } from '@/components/small/Loader';
import { Props } from './types';
import styles from './styles.module.css';
import { Card } from '../Card';

export const ProductList = ({
  loading,
  error,
  products,
  className,
  ...props
}: Props) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      {loading && (
        <div className={styles.loaderWrapper}>
          <Loader size={60} width={9} />
        </div>
      )}
      {error && (
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
      {products.length && !error && !loading && products?.map?.((product) => (
        <Card
          id={product._id}
          className={styles.cardItem}
          key={product._id}
          img={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.photos[0]}`}
          title={product.title}
          description={`${product.title} ${product.size.value} ${product.size.unit}`}
          price={product.price}
          isFavorite={false}
        />
      ))}
      {!products.length && !error && !loading && (
        <div className={styles.loaderWrapper}>
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
    </div>
  );
};
