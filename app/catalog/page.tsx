'use client';

import React from 'react';
import Image from 'next/image';
import { Pagination } from '@/components/large/Pagination';
import { Filters } from '@/components/large/Filters';
import { Card } from '@/components/large/Card';
import { Loader } from '@/components/small/Loader';
import { useCatalog } from './useCatalog';
import styles from './styles.module.css';

const Catalog = () => {
  const {
    page,
    filters,
    products,
    loading,
    error,
    totalPages,
    setPage,
    setFilters,
  } = useCatalog();

  return (
    <main className={styles.page}>
      <div className={styles.sidebar}>
        <p className={styles.title}>Catalog</p>
        <Filters
          filters={filters}
          onChangeFilters={setFilters}
        />
      </div>
      <div className={styles.main}>
        {loading && !error && (
          <Loader size={60} width={9} className={styles.loader} />
        )}
        {error && (
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
        {!loading && !error && (
          <div className={styles.products}>
            {products.map((product) => (
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
          </div>
        )}
        <Pagination
          totalPages={totalPages}
          activePage={page}
          setActivePage={setPage}
          className={styles.pagination}
        />
      </div>
    </main>
  );
};

export default Catalog;
