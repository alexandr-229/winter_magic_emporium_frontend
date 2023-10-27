import React from 'react';
import { Loader } from '@/components/small/Loader';
import styles from './styles.module.css';

export const GoogleLoading = () => {
  return (
    <div className={styles.wrapper}>
      <Loader size={50} className={styles.loader} />
      <p>Loading...</p>
    </div>
  );
};
