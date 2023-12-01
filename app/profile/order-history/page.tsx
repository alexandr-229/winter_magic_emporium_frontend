'use client';

import React from 'react';
import Image from 'next/image';

import { profilePage } from '@/components/hoc/ProfileLayout';
import { Loader } from '@/components/small/Loader';
import { OrderItem } from '@/components/large/OrderItem';

import styles from './styles.module.css';
import { useOrderHistory } from './useOrderHistory';

const OrderHistory = () => {
  const { isLoading, data, isError } = useOrderHistory();

  return (
    <div className={styles.page}>
      <h3 className={styles.title}>Order history</h3>
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
        <div className={styles.orders}>
          {data.map((order) => <OrderItem order={order} key={order._id} />)}
        </div>
      )}
    </div>
  );
};

export default profilePage(OrderHistory);
