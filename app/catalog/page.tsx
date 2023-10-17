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
    setPage,
    setFilters,
  } = useCatalog();

  const products = new Array(12).fill(0);
  const loading = false;
  const error = false;

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
          <>
            <div className={styles.products}>
              {products.map((id) => (
                <Card
                  img="https://admin.catamarans-lagoon.com/sites/default/files/2023-05/SEVENTY%207%20Vue%20sur%20le%20Cockpit%20et%20le%20Pont_0.jpg"
                  id={id}
                  title="Product"
                  description="Description"
                  price={1000}
                  isFavorite={false}
                />
              ))}
            </div>
            <Pagination totalPages={10} activePage={page} setActivePage={setPage} className={styles.pagination} />
          </>
        )}
      </div>
    </main>
  );
};

export default Catalog;
